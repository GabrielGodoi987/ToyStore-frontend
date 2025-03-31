<template>
  <div class="product-card w-80 max-w-xs min-h-[350px]">
    <img :src="image" alt="Product image" class="w-full h-56 mb-6 object-cover" />
    <div class="flex flex-col items-center text-center">
      <h4 class="text-lg font-semibold">{{ name }}</h4>
      <p class="text-sm text-green-500 font-bold">{{ price }}</p> <!-- Preço verde e em negrito -->
    </div>

    <!-- Ícone de coração para favoritar -->
    <button 
      @click="toggleFavorito" 
      class="absolute top-2 right-2 text-red-500 text-xl focus:outline-none"
    >
      {{ favorito ? '❤️' : '🤍' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Props recebidos
defineProps({
  name: String,
  price: String,
  image: String
});

const favorito = ref(false);

const toggleFavorito = () => {
  favorito.value = !favorito.value;
};
</script>

<style scoped>
.product-card {
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  position: relative; /* Necessário para posicionar o ícone no canto */
}

.product-card img {
  object-fit: cover;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}
</style>
