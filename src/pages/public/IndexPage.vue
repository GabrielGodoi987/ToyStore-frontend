<template>
  <div>
    <header
      class="relative bg-[url('/src/assets/imageToyStory.png')] bg-cover bg-center text-white p-3 flex flex-col items-start text-left w-full h-90">
      <div class="flex items-center w-full mt-[-10px] ml-10">
        <!-- Logo -->
        <img src="../assets/logo.png" alt="Disney Logo" class="w-20 h-auto mr-20" />

        <!-- Links -->
        <ul class="flex space-x-6 text-lg">
          <li v-for="(i, index) in PublicmenuConfig" :key="index">
            <a :href="i.link"
              class="relative hover:text-yellow-400 cursor-pointer !text-white after:content-[''] after:block after:w-full after:h-[4px] after:bg-white after:scale-x-0 after:absolute after:bottom-[-16px] after:left-0 hover:after:scale-x-100 focus:after:scale-x-100 transition-transform">
              {{ i.label }}
            </a>
          </li>
        </ul>

      </div>

      <!-- Movendo PIXAR e os textos para baixo -->
      <div class="mt-20 ml-10">
        <h2 class="text-3xl font-bold mb-4">PIXAR</h2> <!-- Afastado da frase -->
        <p class="mb-6">Ao infinito e além! Explore os brinquedos da Pixar, roupas, itens colecionáveis e mais</p>
        <!-- Afastado do botão -->
        <button class="mt-4 text-black py-2 px-4 rounded" style="background-color:#F0B100;">
          Explorar mais
        </button>

      </div>
    </header>
    <!-- Produtos em Destaque -->
    <section class="p-10">
      <h2 class="text-3xl font-bold mb-6 text-left">Produtos em destaque</h2>
      <div class="grid grid-cols-4 gap-6">
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
//import ProductCard from "../components/ProductCard.vue";
import { PublicmenuConfig } from "../../layouts/MenuConfig/publicConfig.config";
</script>
