<!-- components/CategoriaCard.vue -->
<template>
  <div class="categoria-card" @click="navigateToCategory">
    <img :src="image || '../assets/images/pelucias.PNG'" alt="CategoriaImage" class="w-full h-32 object-cover rounded-lg mb-4" />
    <h3>{{ name }}</h3>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  id: {
    type: [Number, String],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  }
});

const router = useRouter();

const navigateToCategory = () => {
  console.log('Navegando para categoria ID:', props.id);
  
  router.push({
    path: `/explore/categorias/${props.id}`,
    query: { 
      categoryName: props.name 
    }
  }).catch(err => {
    console.error('Erro na navegação:', err);
  });
};
</script>

<style scoped>
.categoria-card {
  cursor: pointer;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.categoria-card:hover {
  background-color: #f5f5f5;
  transform: translateY(-2px);
}
</style>