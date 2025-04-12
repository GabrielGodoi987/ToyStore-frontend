<!-- pages/public/ToysPage.vue -->
<template>
  <div class="toys-page">
    <button @click="goBack" class="back-button" aria-label="Voltar para a página anterior">
      ← Voltar
    </button>

    <h1 class="category-title">
      Brinquedos da Categoria: <span class="category-name">{{ categoryName }}</span>
    </h1>

    <div v-if="loading" class="loading">
      Carregando brinquedos...
    </div>

    <div v-else-if="error" class="error">
      {{ error }}
    </div>

    <div v-else>
      <div v-if="toys.length === 0" class="no-toys">
        Nenhum brinquedo encontrado nesta categoria.
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

.back-button {
  background: none;
  border: none;
  color: #42b983;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 1rem;
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