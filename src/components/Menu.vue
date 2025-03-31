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
      <ul class="flex flex-col space-y-4 text-left">
        <li class="flex items-center space-x-4">
          <i class="fas fa-home text-white ml-4"></i> <!-- Ícone Home do FontAwesome -->
          <router-link to="/" style="color: white;" class="hover:bg-gray-700 p-2 rounded block text-xl">Home</router-link>
        </li>

        <li class="flex items-center space-x-4">
          <i class="fas fa-th-list text-white ml-4"></i> <!-- Ícone Catálogo do FontAwesome -->
          <router-link to="/categorias" style="color: white;" class="hover:bg-gray-700 p-2 rounded block text-xl">Catálogo</router-link>
        </li>

        <li class="flex items-center space-x-4">
          <i class="fas fa-cogs text-white ml-4"></i> <!-- Ícone Administração do FontAwesome -->
          <router-link to="/administracao" style="color: white;" class="hover:bg-gray-700 p-2 rounded block text-xl">Administração</router-link>
        </li>

        <li class="flex items-center space-x-4">
          <i class="fas fa-users text-white ml-4"></i> <!-- Ícone Equipe do FontAwesome -->
          <router-link to="/equipe" style="color: white;" class="hover:bg-gray-700 p-2 rounded block text-xl">Equipe</router-link>
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





