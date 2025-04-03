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
          class="w-full bg-white rounded-2xl shadow-xl p-4 border border-blue-300 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50" 
          name="Bonecos" 
          image="../src/assets/images/bonecos.webp" 
        />
        
        <CategoriaCard 
          class="w-full bg-white rounded-2xl shadow-xl p-4 border border-blue-300 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50" 
          name="Veículos" 
          image="../src/assets/images/veículos.jpg" 
        />
        
        <CategoriaCard 
          class="w-full bg-white rounded-2xl shadow-xl p-4 border border-blue-300 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50" 
          name="Brinquedos de Montar" 
          image="../src/assets/images/quebra.PNG" 
        />
        
        <CategoriaCard 
          class="w-full bg-white rounded-2xl shadow-xl p-4 border border-blue-300 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50" 
          name="Fantasias" 
          image="../src/assets/images/fantasias.PNG" 
        />
        
        <CategoriaCard 
          class="w-full bg-white rounded-2xl shadow-xl p-4 border border-blue-300 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50" 
          name="Coleção" 
          image="../src/assets/images/colecao.webp" 
        />
        
        <CategoriaCard 
          class="w-full bg-white rounded-2xl shadow-xl p-4 border border-blue-300 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50" 
          name="Pelúcias" 
          image="../src/assets/images/pelucias.PNG" 
        />
        
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import CategoriaCard from '../../components/CategoriaCard.vue';
import { CategoryService } from '../../services/CategoryService';
import type { ICategory } from '../../interfaces/ICategory';
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