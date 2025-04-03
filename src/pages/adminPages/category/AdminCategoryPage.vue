<template>
    <main :class="openDialog || openUpdateDialog ? 'blur-sm' : ''">
        <h1 class="text-xl font-bold mb-4">Gerenciamento de categorias</h1>
        <section>
            <!--Espaço da tabela-->
            <CategoryTable v-model="categories" ></CategoryTable>
        </section>
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

        <!-- criação de categoria -->
        <section>
            <button @click="openDialog = !openDialog" type="button"
                class="mt-10 p-4 w-[250px] rounded-3xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">
                Adicionar Categoria
            </button>
        </section>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { CategoryService } from "../../../services/CategoryService";
import type { ICategory } from "../../../interfaces/ICategory";
import DialogComponent from "../../../components/DialogComponent.vue";
import CategoryTable from "./CategoryTable.vue";

const categoryService = new CategoryService("/categories");
const categories = ref<ICategory[]>([]);

const openDialog = ref<boolean>(false);
const openUpdateDialog = ref<boolean>(false);
const openDeleteDialog = ref<boolean>(false);


const catId = ref<number>();
const name = ref<string>("");


onMounted(async () => {
    try {
        const response = await categoryService.getCategories();
        categories.value = response;
    } catch (error) {
        console.error("Erro ao buscar categorias:", error);
    }
})
</script>