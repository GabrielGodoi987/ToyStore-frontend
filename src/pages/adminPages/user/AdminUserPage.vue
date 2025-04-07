<template>
    <main>
        {{ form }}
        <h1 class="text-2xl font-bold mb-4">Gerenciamento de Usuário</h1>
        <div class="p-6 bg-white rounded-lg shadow-md">
            <UserTable v-model="users" />
        </div>
        <section>
            <button @click="createDialog = !createDialog" type="button"
                class="mt-10 p-4 w-[250px] rounded-3xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">
                Adicionar Categoria
            </button>
        </section>
    </main>

    <section>
        <DialogComponent v-model="createDialog" title="Criar novo usuário" @close="createDialog = false">
            <template #content>
                <form @submit.prevent="createUser">
                    <div>
                        <label class="block mb-1 font-medium">Envie apenas uma imagem</label>
                        <input type="file" accept="image/*"
                            class="bg-secondary mx-5 mt-2 mb-2 text-center p-4 rounded-2xl text-white focus:bg-blue-700 cursor-pointer"
                            @change="handleImageUpload" :disabled="form.file.length >= 1" />
                        <p class="text-sm text-gray-500 mt-1">Envie apenas uma imagem para o usuário</p>
                        <div class="flex gap-2 mt-2 flex-wrap">
                            <div v-for="(img, index) in form.file" :key="index" class="relative w-20 h-20">
                                <img :src="img.preview" class="w-full h-full object-cover rounded" />
                                <button type="button"
                                    class="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                                    @click="removeImage(index)">
                                    ✕
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="mb-4">
                        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
                        <input v-model="form.name" type="text" id="name" name="name" required
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Nome do usuário" />
                    </div>
                    <div class="mb-4">
                        <label for="userRole">Escolha qual será o papel do usuário no sistema</label>
                        <select v-model="form.type"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="ADMIN">administrador</option>
                            <option value="CLIENT">client</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input v-model="form.email" type="email" id="email" name="email" required
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Email do usuário" />
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Senha:</label>
                        <input v-model="form.password" type="text" id="password" name="password" required disabled
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-100 cursor-not-allowed focus:outline-none focus:shadow-outline"
                            placeholder="Senha do usuário" />
                    </div>
                    <button type="submit"
                        class="mt-4 p-2 w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold">
                        Criar Usuário
                    </button>
                </form>
            </template>
        </DialogComponent>
    </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { UserService } from '../../../services/UserService';
import type { IUser } from '../../../interfaces/IUser';
import DialogComponent from '../../../components/DialogComponent.vue';
import passgenerator from '../../../utils/passwordGenerator';
import UserTable from './UserTable.vue';
import { UserRole } from '../../../enums/UserRole';

const userService = new UserService("/users");
const pass = ref<string>(passgenerator());
const users = ref<IUser[]>([]);
const createDialog = ref<boolean>(false);

const form = ref<IUser>({
    name: '',
    email: '',
    type: UserRole.ADMIN,
    password: pass.value,
    file: [],
});


const handleImageUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (!files || form.value.file.length >= 1) return;

    for (let i = 0; i < files.length && form.value.file.length < 4; i++) {
        const file = files[i];
        const preview = URL.createObjectURL(file);
        form.value.file.push({ file, preview });
    }
};

const removeImage = (index: number) => {
    form.value.file.splice(index, 1);
};


const createUser = async () => {
    const formData = new FormData();
    formData.append('name', form.value.name);
    formData.append('userRole', form.value.type);
    formData.append('email', form.value.email);
    formData.append('password', form.value.password);
    formData.append('photo', form.value.file[0].file || null);

    try {
        const response = await userService.create(formData);

        if (response.status === 201) {
            users.value.push(response.data);
            createDialog.value = false;

            // Resetar o formulário
            form.value = {
                name: '',
                type: UserRole.ADMIN,
                email: '',
                password: passgenerator(),
                file: [],
            };
        } else {
            console.error(response);
        }
    } catch (error) {
        return error;
    }
};

onMounted(async () => {
    try {
        const userResponse = await userService.getAll();
        if (userResponse.status == 200) {
            users.value = userResponse.data;
        } else {
            console.error("Erro ao buscar usuários");
        }
    } catch (error) {
        console.error("Erro ao buscar usuários", error);
    }
})
</script>