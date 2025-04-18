<template>
    {{ form }}
    <main>
        <h1 class="text-2xl font-bold mb-4">Gerenciamento de Usuário</h1>
        <div class="p-6 bg-white rounded-lg shadow-md">
            <UserTable v-model="users" @edit="handleEdit" @delete="handleDeleteConfirm" />
        </div>

        <section>
            <button @click="createDialog = !createDialog" type="button"
                class="mt-10 p-4 w-[250px] rounded-3xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">
                Adicionar Categoria
            </button>
        </section>

        <!-- Criar Usuário -->
        <DialogComponent v-model="createDialog" title="Criar novo usuário" @close="createDialog = false">
            <template #content>
                <UserForm v-model="form" :disabledPassword="true" @submit="createUser" @file-change="handleImageUpload"
                    @remove-image="removeImage" />
            </template>
        </DialogComponent>

        <!-- Editar Usuário -->
        <DialogComponent v-model="editDialog" title="Editar usuário" @close="editDialog = false">
            <template #content>
                <UserForm v-model="form" :disabledPassword="false" @submit="updateUser" @file-change="handleImageUpload"
                    @remove-image="removeImage" @generate-password="() => (form.password = passgenerator())" />
            </template>
        </DialogComponent>
    </main>


    <section>
        <!-- ... código anterior ... -->

        <!-- Diálogo de Deleção -->
        <DialogComponent v-model="deleteDialog" title="Confirmar deleção" @close="cancelDelete">
            <template #content>
                <div class="text-center space-y-4">
                    <p class="text-lg">Tem certeza que deseja deletar este usuário?</p>
                    <div class="flex justify-center gap-4 mt-6">
                        <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            @click="confirmDelete">
                            Sim, deletar
                        </button>
                        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                            @click="cancelDelete">
                            Cancelar
                        </button>
                    </div>
                </div>
            </template>
        </DialogComponent>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { UserService } from '../../../services/UserService';
import type { IUser } from '../../../interfaces/IUser';
import DialogComponent from '../../../components/DialogComponent.vue';
import passgenerator from '../../../utils/passwordGenerator';
import UserTable from './UserTable.vue';
import UserForm from './UserForm.vue';
import { UserRole } from '../../../enums/UserRole';

const userService = new UserService('/users');

const pass = ref<string>(passgenerator());
const users = ref<IUser[]>([]);
const createDialog = ref(false);
const editDialog = ref(false);
const deleteDialog = ref<boolean>(false);
const userId = ref<number | null>(null);

const form = ref<IUser>({
    name: '',
    email: '',
    userRole: UserRole.ADMIN,
    password: pass.value,
    photo: [],
});

const resetForm = () => {
    form.value = {
        name: '',
        email: '',
        userRole: UserRole.ADMIN,
        password: passgenerator(),
        photo: [],
    };
    createDialog.value = false;
    editDialog.value = false;
};

const handleEdit = (id: number) => {
    const user = users.value.find((u) => u.id === id);
    if (user) {
        form.value = { 
            name: user.name,
            email: user.email,
            userRole: user.userRole,
            password: user.password,
            photo: [],
            id: user.id,
         };
        editDialog.value = true;
    }
};

const handleDeleteConfirm = (id: number) => {
    userId.value = id;
    deleteDialog.value = true;
};

const cancelDelete = () => {
    deleteDialog.value = false;
    userId.value = null;
};

const handleImageUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (!files || form.value.photo.length >= 1) return;

    const file = files[0];
    const preview = URL.createObjectURL(file);
    form.value.photo = [{ file, preview }];
};

const removeImage = (index: number) => {
    form.value.photo.splice(index, 1);
};

const buildFormData = (user: IUser) => {
    const formData = new FormData();
    formData.append('name', user.name);
    formData.append('userRole', user.userRole);
    formData.append('email', user.email);

    if (user.password) {
        formData.append('password', user.password);
    }
    
    if (user.photo && user.photo.length > 0) {
        formData.append('photo', user.photo[0].file);
    }

    return formData;
};

const createUser = async () => {
    const formData = buildFormData(form.value);

    try {
        const response = await userService.create(formData);
        if (response.status === 201) {
            users.value.push(response.data);
            resetForm();
        } else {
            console.error(response);
        }
    } catch (error) {
        console.error(error);
    }
};

const updateUser = async () => {
    if (!form.value.id) return;

    const formData = buildFormData(form.value);

    try {
        const response = await userService.update(form.value.id, formData);
        if (response.status === 200) {
            const index = users.value.findIndex((u) => u.id === form.value.id);
            if (index !== -1) users.value[index] = response.data;
            resetForm();
        } else {
            console.error(response);
        }
    } catch (error) {
        console.error(error);
    }
};


const confirmDelete = async () => {
  if (userId.value === null) return;

  try {
    const response = await userService.delete(userId.value);
    if (response.status === 200 || response.status === 204) {
      users.value = users.value.filter((u) => u.id !== userId.value);
      deleteDialog.value = false;
      userId.value = null;
    }
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
    try {
        const userResponse = await userService.getAll();
        if (userResponse.status === 200) {
            users.value = userResponse.data;
        }
    } catch (error) {
        console.error(error);
    }
});
</script>