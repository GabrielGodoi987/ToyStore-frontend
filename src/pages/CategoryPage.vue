<template>
  <div class="h-full flex flex-col items-center">
    <h2 class="text-4xl font-bold mt-3 mb-6 text-center">Catálogo de Brinquedos</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
      <CategoriaCard v-for="(i, index) in categories" :key="index" :name="i.name" @navigate="navigateToCategory"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import CategoriaCard from '../components/CategoriaCard.vue';
import { CategoryService } from '../services/CategoryService';
import type { ICategory } from '../interfaces/ICategory';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const navigateToCategory = (categoryId: number) => {
  router.push({ name: 'category', params: { id: categoryId } });
};

const categoryService = new CategoryService("/categories");
const categories = ref<ICategory[]>([]);


onMounted(async () => {
  try {
    const response = await categoryService.getCategories();
    categories.value = response;
    console.log(categories.value)
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
  }
});
</script>