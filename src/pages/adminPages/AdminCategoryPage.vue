<template>
    <main :class="openDialog || openUpdateDialog ? 'blur-sm' : ''">
        <h1 class="text-xl font-bold mb-4">Gerenciamento de categorias</h1>
        <div class="p-6 bg-white rounded-lg shadow-md">

            <div class="overflow-x-auto">
                <table class="w-full border-collapse">
                    <thead>
                        <tr class="border-b">
                            <th class="text-left font-medium text-gray-600 p-3">
                                <input type="checkbox" class="accent-blue-600">
                            </th>
                            <th class="text-left font-medium text-gray-600 p-3">Id</th>
                            <th class="text-left font-medium text-gray-600 p-3">Título</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(i, index) in categories" :key="index" class="border-b hover:bg-gray-100">
                            <td class="p-3">
                                <input type="checkbox" class="accent-blue-600">
                            </td>
                            <td class="p-3">{{ i.id }}</td>
                            <td class="p-3">{{ i.name }}</td>
                            <td class="p-3 flex justify-center space-x-3">
                                <button v-if="i.id" @click="updateDialog(i.id)"
                                    class="bg-text-gray-500 hover:text-blue-600 shadow p-3">
                                    ✏️
                                </button>
                                <button v-if="i.id" @click="deleteDialog(i.id)"
                                    class="text-gray-500 hover:text-red-600 shadow p-3">
                                    🗑️
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Paginação -->
            <section class="flex justify-end items-center mt-4">
                <div class="flex justify-between items-center space-x-2">
                    <button class="px-3 py-1 shadow rounded-lg bg-white hover:bg-gray-300 text-center">
                        ←
                    </button>
                    <span class="text-gray-600">1</span>
                    <button class="px-3 py-1 shadow rounded-lg bg-white hover:bg-gray-300 text-center">
                        →
                    </button>
                </div>
            </section>
        </div>

        <!-- criação de categoria -->
        <section>
            <button @click="openDialog = !openDialog" type="button"
                class="mt-10 p-4 w-[250px] rounded-3xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">
                Adicionar Categoria
            </button>
        </section>
    </main>

    <!--Adicionar uma nova categoria-->
    <section>
        <DialogComponent title="Adicionar nova categoria" v-model="openDialog">
            <template #content>
                <form class="p-5" @submit.prevent="create">
                    <div class="mb-4">
                        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nome da categoria</label>
                        <input v-model="name" type="text" id="name" placeholder="Digite o nome da categoria"
                            class="shadow appearance-none border-slate-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <button @click="create" type="submit"
                        class="rounded-2xl w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline">
                        Adicionar
                    </button>
                </form>
            </template>
        </DialogComponent>
    </section>

    <!--Atualizar categoria-->
    <section>
        <DialogComponent title="Atualizar categoria" v-model="openUpdateDialog">
            <template #content>
                <form class="p-5" v-if="catId" @submit.prevent="updateCategory(catId)">
                    <div class="mb-4">
                        <label for="catId" class="block text-gray-700 text-sm font-bold mb-2">ID da categoria</label>
                        <input v-model="catId" type="text" id="catId" disabled placeholder="ID gerado automaticamente"
                            class="shadow appearance-none border-slate-400 bg-gray-200 rounded w-full py-2 px-3 text-gray-500 cursor-not-allowed leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <div class="mb-4">
                        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nome da categoria</label>
                        <input v-model="name" type="text" id="name" placeholder="Digite o nome da categoria"
                            class="shadow appearance-none border-slate-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <button @click="create" type="submit"
                        class="rounded-2xl w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline">
                        Adicionar
                    </button>
                </form>
            </template>

        </DialogComponent>
    </section>

    <!--confirmar deleção de categoria-->
    <section v-if="catId">
        <DialogComponent v-model="openDeleteDialog" :title="`Tem certeza que deseja deletar a categoria? ${name}`">
            <template #content>
                <div class="flex justify-around items-center p-2 w-full">
                    <button @click="openDeleteDialog = false"
                        class="rounded-2xl w-[80%] bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline">Cancelar</button>
                    <button @click="deleteCategory(catId)"
                        class="rounded-2xl w-[80%] bg-negative text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline">Deletar</button>
                </div>
            </template>
        </DialogComponent>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { CategoryService } from "../../services/CategoryService";
import type { ICategory } from "../../interfaces/ICategory";
import DialogComponent from "../../components/DialogComponent.vue";

const categoryService = new CategoryService("/categories");
const categories = ref<ICategory[]>([]);

const openDialog = ref<boolean>(false);
const openUpdateDialog = ref<boolean>(false);
const openDeleteDialog = ref<boolean>(false);


const catId = ref<number>();
const name = ref<string>("");



const updateDialog = (id: number) => {
    openUpdateDialog.value = !openUpdateDialog.value;
    catId.value = id;
    const category = categories.value.find((cat) => cat.id === catId.value);
    if (category) {
        name.value = category.name;
    } else {
        console.error("Categoria não encontrada");
    }
}

const deleteDialog = (id: number) => {
    openDeleteDialog.value = !openDeleteDialog.value;
    catId.value = id;
    const category = categories.value.find((cat) => cat.id === catId.value);
    if (category) {
        name.value = category.name;
    } else {
        console.error("Categoria não encontrada");
    }
}

const create = async () => {
    try {
        const response = await categoryService.addCategory({ id: null, name: name.value, toys: [] });
        categories.value.unshift(response.data);
        if (response.status == 201) {
            openDialog.value = false;
        }
        console.log(response);
        return response;
    } catch (error) {
        console.error("Erro ao criar categoria:", error);
    }
};


const updateCategory = async (id: number) => {
    try {
        const response = await categoryService.updateCategory(id, { id: null, name: name.value, toys: [] });
        const index = categories.value.findIndex((cat) => cat.id === id);
        categories.value.slice(1, index);
        if (response.status == 200) {
            openUpdateDialog.value = false;
        }
        return response;
    } catch (error) {
        console.error("Erro ao atualizar categoria:", error);
    }
};

const deleteCategory = async (id: number) => {
    try {
        const response = await categoryService.deleteCategory(id);
        if (response.status == 200) {
            openDeleteDialog.value = false;
        }
        console.log(response);
        return response;
    } catch (error) {
        console.error("Erro ao deletar categoria:", error);
    }
};

const deleteManyCategories = async (ids: number[]) => {
    try {
        const response = await categoryService.deleteManyCategories(ids);
        return response;
    } catch (error) {
        console.error("Erro ao deletar categorias:", error);
    }
};

onMounted(async () => {
    try {
        const response = await categoryService.getCategories();
        categories.value = response;
    } catch (error) {
        console.error("Erro ao buscar categorias:", error);
    }
})
</script>