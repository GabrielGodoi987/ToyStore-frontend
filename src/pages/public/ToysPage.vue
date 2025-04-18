<!-- pages/public/ToysPage.vue -->
<template>
  <div class="toys-page">
    <!-- Botão de voltar condicional -->
    <button 
      v-if="toys.length > 0"
      @click="goBack"
      class="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-70 mb-6"
      aria-label="Voltar para a página anterior"
    >
      <span class="text-xl transition-transform duration-200 group-hover:-translate-x-1">←</span>
      <span class="font-medium">Voltar</span>
    </button>

    <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800">
      Brinquedos da Categoria: <span class="category-name">{{ categoryName }}</span>
    </h1>

    <div v-if="loading" class="loading">
      Carregando brinquedos...
    </div>

    <div v-else-if="error" class="error">
      {{ error }}
    </div>

    <div v-else>
      <div v-if="toys.length === 0" class="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 text-center">
        <span class="text-4xl mb-3">😕</span>
        <h3 class="text-xl font-bold text-gray-700 mb-2">Nenhum brinquedo encontrado</h3>
        <p class="text-gray-500 max-w-md">Parece que esta categoria está vazia no momento. Que tal explorar outras categorias?</p>
        <button class="mt-4 px-5 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors flex items-center gap-2 cursor-pointer" @click="goBack">
          Explorar categorias
          <span>🔍</span>
        </button>
      </div>

      <div v-else class="toys-grid">
        <ToyCard 
          v-for="toy in toys" 
          :key="toy.id"
          :toy="toy"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import ToyCard from '../../components/ToysCard.vue';

const route = useRoute();
const router = useRouter();
const toys = ref([]);
const categoryName = ref('');
const loading = ref(true);
const error = ref(null);

const API_URL = import.meta.env.VITE_API_URL;

const loadToys = async () => {
  try {
    loading.value = true;
    error.value = null;

    const categoryId = route.params.categoryId;

    // Buscar categoria com os brinquedos inclusos
    const categoryRes = await axios.get(`${API_URL}/categories/${categoryId}`);
    const category = categoryRes.data;

    categoryName.value = category.name;
    toys.value = category.toysModel || []; // Pega os brinquedos da categoria

  } catch (err) {
    error.value = err.response?.data?.message || 'Erro ao carregar brinquedos';
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const goBack = () => {
  router.go(-1);
};

onMounted(() => {
  loadToys();
});
</script>

<style scoped>
.toys-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.toys-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.loading, .error {
  text-align: center;
  padding: 20px;
  color: #666;
}
</style>