<template>
  <div>
    <header class="relative bg-[url('/src/assets/imageToyStory.png')] bg-cover bg-center text-white p-3 flex flex-col items-start text-left w-full h-90">
  <div class="flex items-center w-full mt-[-10px] ml-10">
    <!-- Logo -->
    <img src="../assets/logo.png" alt="Disney Logo" class="w-20 h-auto mr-20" />

    <!-- Links -->
    <ul class="flex space-x-6 text-lg">
      <li><a href="#" class="relative hover:text-yellow-400 cursor-pointer !text-white after:content-[''] after:block after:w-full after:h-[4px] after:bg-white after:scale-x-0 after:absolute after:bottom-[-16px] after:left-0 hover:after:scale-x-100 focus:after:scale-x-100 transition-transform">Home</a></li>
      <li><a href="#" class="relative hover:text-yellow-400 cursor-pointer !text-white after:content-[''] after:block after:w-full after:h-[4px] after:bg-white after:scale-x-0 after:absolute after:bottom-[-16px] after:left-0 hover:after:scale-x-100 focus:after:scale-x-100 transition-transform">Catálogo</a></li>
      <li><a href="#" class="relative hover:text-yellow-400 cursor-pointer !text-white after:content-[''] after:block after:w-full after:h-[4px] after:bg-white after:scale-x-0 after:absolute after:bottom-[-16px] after:left-0 hover:after:scale-x-100 focus:after:scale-x-100 transition-transform">Administração</a></li>
      <li><a href="#" class="relative hover:text-yellow-400 cursor-pointer !text-white after:content-[''] after:block after:w-full after:h-[4px] after:bg-white after:scale-x-0 after:absolute after:bottom-[-16px] after:left-0 hover:after:scale-x-100 focus:after:scale-x-100 transition-transform">Equipe</a></li>
    </ul>

  </div>

  <!-- Movendo PIXAR e os textos para baixo -->
  <div class="mt-20 ml-10"> 
    <h2 class="text-3xl font-bold mb-4">PIXAR</h2> <!-- Afastado da frase -->
    <p class="mb-6">Ao infinito e além! Explore os brinquedos da Pixar, roupas, itens colecionáveis e mais</p> <!-- Afastado do botão -->
    <button class="mt-4 text-black py-2 px-4 rounded" style="background-color: #F0B100;">
  Explorar mais
</button>

  </div>
</header>


    <!-- Produtos em Destaque -->
    <section class="p-10">
      <h2 class="text-3xl font-bold mb-6 text-left">Produtos em destaque</h2>
      <div class="grid grid-cols-4 gap-6">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :name="product.name"
          :price="product.price"
          :image="product.image"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ProductCard from "../components/ProductCard.vue";

// Importando imagens corretamente
import imageToyStory from '../assets/imageToyStory.png';
import logo from '../assets/logo.png';

// Dados fictícios dos produtos
const products = [
  { id: 1, name: 'Brinquedo Woody', price: 'R$ 89,99', image: '/src/assets/woody.avif' },
  { id: 2, name: 'Brinquedo Buzz Lightyear', price: 'R$ 99,99', image: '/src/assets/buzz.webp' },
  { id: 3, name: 'Brinquedo Jessie', price: 'R$ 79,99', image: '/src/assets/jessie.jpg' },
  { id: 4, name: 'Brinquedo Dinossauro Rex', price: 'R$ 69,99', image: '/src/assets/rex.jpg' }
];
</script>

<style scoped>
nav ul li {
  cursor: pointer;
}

nav ul li:hover {
  color: yellow;
}
</style>
