<template>
    <main class="max-w-6xl mx-auto px-4 py-8">
        <div class="flex justify-between items-center mb-8 border-b pb-4">
            <h1 class="text-3xl font-bold text-gray-800">Gerenciamento de Brinquedos</h1>
            <button @click="handleCreate" type="button"
                class="flex items-center gap-2 px-6 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                </svg>
                Adicionar Brinquedo
            </button>
        </div>
        
        <section class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <ToysTable v-model="toys" @edit="handleEdit" @delete="handleDelete" />
        </section>

        <!-- Modal de Criação -->
        <DialogComponent v-model="createDialog" title="Adicionar Brinquedo">
            <template #content>
                <form class="px-6 w-full" @submit.prevent="confirmCreate">
                    <div class="mb-5">
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nome do Brinquedo</label>
                        <input type="text" id="name" v-model="name"
                            class="px-4 py-3 mt-1 block w-full border-gray-300 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                            placeholder="Digite o nome do brinquedo">
                    </div>
                    <div class="grid grid-cols-2 gap-4 mb-5">
                        <div>
                            <label for="category" class="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
                            <select id="category" v-model="category"
                                class="px-4 py-3 mt-1 w-full rounded-lg border-gray-300 border focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                                <option value=""></option>
                                <option value="">Carrinhos</option>
                                <option value="">Bonecas</option>
                                <option value="">Quebra-cabeças</option>
                                <option value="">Brinquedos de Construção</option>
                                <option value="">Brinquedos de Pelúcia</option>
                                <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
                            </select>
                        </div>
                        <div>
                            <label for="price" class="block text-sm font-medium text-gray-700 mb-1">Preço</label>
                            <input type="text" id="price" v-model="price"
                                class="px-4 py-3 mt-1 w-full rounded-lg border-gray-300 border focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                placeholder="R$ 0,00" />
                        </div>
                    </div>
                    <div class="mb-5">
                        <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                        <textarea id="description" v-model="description" rows="3"
                            class="px-4 py-3 mt-1 w-full rounded-lg border-gray-300 border focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                            placeholder="Descreva o brinquedo"></textarea>
                    </div>
                    <div class="mt-8 flex justify-center gap-4">
                        <button type="button" @click="createDialog = false"
                            class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-200">
                            Cancelar
                        </button>
                        <button type="submit"
                            class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 shadow-md">
                            Adicionar Brinquedo
                        </button>
                    </div>
                </form>
            </template>
        </DialogComponent>

        <!-- Modal de Edição -->
        <DialogComponent v-model="editDialog" title="Editar Brinquedo">
            <template #content>
                <form class="px-6 w-full" @submit.prevent="confirmEdit">
                    <div class="mb-5">
                        <label for="id" class="block text-sm font-medium text-gray-700 mb-1">ID do Brinquedo</label>
                        <input type="text" id="id" v-model="toyId"
                            class="px-4 py-3 mt-1 block w-full border-gray-300 border rounded-lg shadow-sm bg-gray-100 cursor-not-allowed"
                            disabled readonly>
                    </div>
                    <div class="mb-5">
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nome do Brinquedo</label>
                        <input type="text" id="name" v-model="name"
                            class="px-4 py-3 mt-1 block w-full border-gray-300 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                    </div>
                    <div class="grid grid-cols-2 gap-4 mb-5">
                        <div>
                            <label for="category" class="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
                            <select id="category" v-model="category"
                                class="px-4 py-3 mt-1 w-full rounded-lg border-gray-300 border focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                                <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
                            </select>
                        </div>
                        <div>
                            <label for="price" class="block text-sm font-medium text-gray-700 mb-1">Preço</label>
                            <input type="text" id="price" v-model="price"
                                class="px-4 py-3 mt-1 w-full rounded-lg border-gray-300 border focus:ring-blue-500 focus:border-blue-500 transition duration-200" />
                        </div>
                    </div>
                    <div class="mb-5">
                        <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                        <textarea id="description" v-model="description" rows="3"
                            class="px-4 py-3 mt-1 w-full rounded-lg border-gray-300 border focus:ring-blue-500 focus:border-blue-500 transition duration-200"></textarea>
                    </div>
                    <div class="mt-8 flex justify-center gap-4">
                        <button type="button" @click="editDialog = false"
                            class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-200">
                            Cancelar
                        </button>
                        <button type="submit"
                            class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 shadow-md">
                            Salvar Alterações
                        </button>
                    </div>
                </form>
            </template>
        </DialogComponent>

        <!-- Modal de Exclusão -->
        <DialogComponent v-model="deleteDialog" title="Confirmar exclusão">
            <template #content>
                <div class="flex flex-col text-center p-6">
                    <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-medium text-gray-900 mb-2">Tem certeza que deseja excluir este brinquedo?</h3>
                    <p class="text-gray-500">A exclusão de <span class="font-bold text-gray-700">{{ name }}</span> é irreversível.</p>
                </div>
                <div v-if="toyId" class="flex justify-center gap-4 p-6 pt-0">
                    <button @click="deleteDialog = false"
                        class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-200">
                        Cancelar
                    </button>
                    <button @click="confirmDelete"
                        class="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200 shadow-md">
                        Confirmar Exclusão
                    </button>
                </div>
            </template>
        </DialogComponent>

        <!-- Alertas -->
        <SuccessAlertComponent v-model="isCreateAlert" title="Sucesso!" description="Brinquedo criado com sucesso!" :timeout="2000"/>
        <SuccessAlertComponent v-model="isEditAlert" title="Sucesso!" description="Brinquedo editado com sucesso!" :timeout="2000"/>
        <SuccessAlertComponent v-model="isDeleteAlert" title="Sucesso!" description="Brinquedo deletado com sucesso!" :timeout="2000"/>
    </main>
</template>

<script setup>
import { ref } from "vue";
import DialogComponent from "../../../components/DialogComponent.vue";
import ToysTable from "./ToysTable.vue"; 

const createDialog = ref(false);
const editDialog = ref(false);
const deleteDialog = ref(false);
const isCreateAlert = ref(false);
const isEditAlert = ref(false);
const isDeleteAlert = ref(false);

const toyId = ref('');
const name = ref('');
const category = ref('');
const price = ref('');

const handleCreate = () => {
    name.value = '';
    category.value = '';
    price.value = '';
    createDialog.value = true;
};

const handleEdit = (item) => {
    toyId.value = item.id;
    name.value = item.title;
    category.value = item.category;
    price.value = item.price;
    editDialog.value = true;
};

const handleDelete = (item) => {
    toyId.value = item.id;
    name.value = item.title;
    deleteDialog.value = true;
};

const confirmCreate = () => {
    // Lógica para criar brinquedo
    createDialog.value = false;
    isCreateAlert.value = true;
};

const confirmEdit = () => {
    // Lógica para editar brinquedo
    editDialog.value = false;
    isEditAlert.value = true;
};

const confirmDelete = () => {
    // Lógica para deletar brinquedo
    deleteDialog.value = false;
    isDeleteAlert.value = true;
};
</script>