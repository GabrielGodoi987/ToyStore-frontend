<template>
  <div class="min-h-screen px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 bg-[#fff]">
    <header class="mb-8 sm:mb-10 md:mb-12 lg:mb-14">
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800">
        Catálogo de Brinquedos
      </h1>
    </header>

    <div class="max-w-7xl mx-auto px-2 sm:px-4">
      <div 
        class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-10 gap-y-8 sm:gap-x-12 sm:gap-y-10 md:gap-x-14 md:gap-y-12 lg:gap-x-16 lg:gap-y-14">
        
        <CategoriaCard
        v-for="category in categories"
        :key="category.id"
        :id="category.id"
        :image="category.image || ''" 
        :name="category.name"
        :description="category.description"
        />
        
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import CategoriaCard from '../../components/CategoriaCard.vue';

const categories = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8081/categories');
    categories.value = response.data.map(cat => ({
      id: cat.id,
      name: cat.name,
      description: cat.shortDescription || cat.description || '' // Trata campos diferentes
    }));
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});
</script>