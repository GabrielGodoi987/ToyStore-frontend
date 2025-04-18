<!-- components/CategoriaCard.vue -->
<template>
  <div 
    class="cursor-pointer p-4 border border-gray-200 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:-translate-y-1 hover:shadow-md"
    @click="navigateToCategory"
  >
    <div class="relative h-40 w-full overflow-hidden rounded-lg mb-3 bg-gray-100">
      <img 
        :src="image || '../assets/images/pelucias.PNG'" 
        :alt="'Imagem da categoria ' + name"
        class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
      <div class="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
    </div>
    
    <div class="text-center">
      <h3 class="text-lg font-semibold text-gray-800 mb-1">{{ name }}</h3>
      <p v-if="description" class="text-sm text-gray-500 line-clamp-2">{{ description }}</p>
    </div>
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