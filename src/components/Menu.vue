<template>
  <div class="flex min-h-screen bg-[#162456]">
    <!-- Menu Lateral -->
    <div class="w-60 bg-[#162456] text-white min-h-screen flex flex-col p-4">
      <!-- Logo -->
      <img
        src="../assets/logo.png"
        alt="ToyStore Logo"
        class="mb-8 h-30 w-auto mx-auto p-2"
      />
      <ul class="flex flex-col space-y-5 text-left">

          <li class="flex items-center space-x-6 p-3 transition-colors rounded text-left hover:bg-green-800 text-xl " v-for="(i, index) in PublicmenuConfig" :key="index">
              <img :src="i.icon" alt="" class="w-8 h-8"/>
              <router-link :to="i.link" style="color: white;"
                  >{{i.label}}
              </router-link>
          </li>
      </ul>
    </div>

    <!-- Área de Conteúdo -->
    <div class="flex-1 p-10 flex flex-col min-h-screen">
      <div class="bg-white p-8 rounded-2xl shadow-lg flex-1">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { PublicmenuConfig } from '../config/publicMenuConfig.js';
</script>



