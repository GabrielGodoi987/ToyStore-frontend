<template>
  <div class="max-w-xs rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
    <!-- Imagem do brinquedo -->
    <div class="h-48 w-full overflow-hidden">
      <img 
        :src="toy.imageUrl" 
        :alt="'Imagem de ' + toy.name"
        class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    
    <!-- Informações do brinquedo -->
    <div class="px-4 py-3 text-center">
      <h3 class="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">{{ toy.name }}</h3>
      <p class="text-lg font-bold text-emerald-600">R$ {{ toy.price.toFixed(2) }}</p>
      
      <!-- Botão opcional -->
      <button class="mt-3 mb-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-200">
        Comprar
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  toy: {
    type: Object,
    required: true,
    validator: (value) => {
      return (
        'name' in value &&
        'price' in value &&
        'imageUrl' in value
      )
    }
  }
});
</script>