<template>
    <main>
        <h1 class="text-xl font-bold mb-4">Gerenciamento de categorias</h1>
        <section>
            <!--Espaço da tabela-->
            <CategoryTable v-model="categories" @edit="handleEdit" @delete="handleDelete"></CategoryTable>
        </section>
        <!-- criação de categoria -->
        <section>
            <button @click="handleCreate" type="button"
                class="mt-10 p-4 w-[250px] rounded-3xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">
                Adicionar Categoria
            </button>
        </section>
    </main>

    <section>
        <DialogComponent v-model="createDialog" title="Criar categoria">
            <template #content>
                <form class="px-8 w-full" @submit.prevent="confirmCreate">
                    <div class="mb-4">
                        <label for="name" class="block text-gray-700">Nome da categoria</label>
                        <input type="text" id="name" v-model="name"
                            class="p-4 mt-1 block w-full border-slate-400 border rounded-md shadow-sm">
                    </div>
                    <div class="mb-4">
                        <label for="shortDescription" class="block text-gray-700">Descrição curta</label>
                        <input type="text" id="shortDescription" v-model="shortDescription"
                            class="p-4 mt-1 w-full rounded-md border-slate-400 border" />
                    </div>
                    <div class="text-center mt-12">
                        <button @click="confirmCreate" type="submit"
                            class="bg-blue-500 text-white py-4 rounded-2xl hover:bg-blue-600 w-[90%]">Adicionar
                            categoria</button>
                    </div>
                </form>
            </template>
        </DialogComponent>
    </section>

    <section>
        <DialogComponent v-model="editDialog" title="Editar categoria">
            <template #content>
                <form class="px-8 w-full" @submit.prevent="confirmEdit">
                    <div class="mb-4">
                        <label for="id" class="block text-gray-700">Id da categoria</label>
                        <input type="text" id="id" v-model="catId"
                            class="p-4 mt-1 block w-full border-slate-400 border rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
                            disabled readonly>
                    </div>
                    <div class="mb-4">
                        <label for="name" class="block text-gray-700">Nome da categoria</label>
                        <input type="text" id="name" v-model="name"
                            class="p-4 mt-1 block w-full border-slate-400 border rounded-md shadow-sm">
                    </div>
                    <div class="mb-4">
                        <label for="shortDescription" class="block text-gray-700">Descrição curta</label>
                        <input type="text" id="shortDescription" v-model="shortDescription"
                            class="p-4 mt-1 w-full rounded-md border-slate-400 border" />
                    </div>
                    <div class="text-center mt-12">
                        <button @click="confirmEdit" type="submit"
                            class="bg-blue-500 text-white py-4 rounded-2xl hover:bg-blue-600 w-[90%]">Salvar
                            edição</button>
                    </div>
                </form>
            </template>
        </DialogComponent>
    </section>

    <section>
        <DialogComponent v-model="deleteDialog" title="Confirmar deleção">
            <template #content>
                <div class="flex flex-col text-center p-6">
                    <p class="text-gray-700 text-lg font-semibold">Tem certeza que deseja excluir esta categoria?</p>
                    <p class="text-gray-500 mt-2">A exclusão de <span class="font-bold">{{ name }}</span> é
                        irreversível.</p>
                </div>
                <div v-if="catId" class="flex justify-center gap-4 p-4">
                    <button @click="confirmDelete"
                        class="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 shadow-md transition-all">Deletar</button>
                    <button @click="deleteDialog = false"
                        class="bg-secondary px-6 py-3 rounded-lg hover:bg-blue-700 shadow-md transition-all text-white">Cancelar</button>
                </div>
            </template>
        </DialogComponent>
    </section>



    <SuccessAlertComponent v-model="isCreateAlert" title="Sucesso!" description="Categoria criada com sucesso!" :timeout="2000"/>
    <SuccessAlertComponent v-model="isEditAlert" title="Sucesso!" description="Categoria editada com sucesso!" :timeout="2000"/>
    <SuccessAlertComponent v-model="isDeleteAlert" title="Sucesso!" description="Categoria deletada com sucesso!" :timeout="2000"/>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { CategoryService } from "../../../services/CategoryService";
import type { ICategory } from "../../../interfaces/ICategory";
import DialogComponent from "../../../components/DialogComponent.vue";
import CategoryTable from "./CategoryTable.vue";
import SuccessAlertComponent from "../../../components/alerts/SuccessAlertComponent.vue";

const categoryService = new CategoryService("/categories");
const categories = ref<ICategory[]>([]);

const createDialog = ref<boolean>(false);
const isCreateAlert = ref<boolean>(false);

const deleteDialog = ref<boolean>(false);
const isDeleteAlert = ref<boolean>(false);

const editDialog = ref<boolean>(false);
const isEditAlert = ref<boolean>(false);

const catId = ref<number>(0);
const name = ref<string>("");
const shortDescription = ref<string>("");


const handleCreate = () => {
    name.value = "";
    shortDescription.value = ""
    createDialog.value = !createDialog.value;
}

const handleEdit = (id: number) => {
    catId.value = id;
    const category = categories.value.find((category) => category.id === id);
    if (category) {
        name.value = category.name;
        shortDescription.value = category.shortDescription;
    }
    editDialog.value = !editDialog.value;
}

const handleDelete = (id: number) => {
    catId.value = id;
    const category = categories.value.find((category) => category.id === id);
    if (category) {
        name.value = category.name;
    }
    deleteDialog.value = !deleteDialog.value;
}


const confirmCreate = async () => {
    try {
        const response = await categoryService.addCategory({
            name: name.value,
            shortDescription: shortDescription.value,
            toys: null
        });
        if (response.status == 201) {
            categories.value.push(response.data);
            createDialog.value = false;
            isCreateAlert.value = true;
        }
        console.log(response);
    } catch (error) {
        console.error("Erro ao criar categoria:", error);
    }
}
const confirmDelete = async () => {
    try {
        const response = await categoryService.deleteCategory(catId.value);
        if (response.status == 204) {
            const index = categories.value.findIndex((category) => category.id !== catId.value);
            categories.value.splice(index, 1);
            deleteDialog.value = false;
            isDeleteAlert.value = true;
        }
    } catch (error) {
        console.error("Erro ao deletar categoria:", error);
    }
}
const confirmEdit = async () => {
    try {
        const response = await categoryService.updateCategory(catId.value, {
            name: name.value,
            shortDescription: shortDescription.value,
            toys: null
        });
        if (response.status == 200) {
            const index = categories.value.findIndex((category) => category.id === catId.value);
            if (index !== -1) {
                categories.value[index] = response.data;
            }
            editDialog.value = false;
            isEditAlert.value = true;
        }

        return response;
    } catch (error) {

    }
}


onMounted(async () => {
    try {
        const response = await categoryService.getCategories();
        categories.value = response;
    } catch (error) {
        console.error("Erro ao buscar categorias:", error);
    }
})
</script>