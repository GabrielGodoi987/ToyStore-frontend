<template>
    <div class="flex min-h-screen bg-[#162456]">
        <!-- Menu Lateral -->
    <div class="w-60 bg-[#162456] text-white min-h-screen flex flex-col p-4">
    <!-- Logo -->
    <img src="../assets/logo.png" alt="ToyStore Logo" class="mb-8 h-30 w-auto mx-auto p-2" />
    
    <ul class="flex flex-col space-y-5 text-left">
        <li class="flex items-center space-x-6 p-3 transition-colors rounded text-left hover:bg-green-800 text-xl">
            <img src="../assets/images/House.svg" alt="Home" class="text-white w-8 h-8 inline-block mr-2 brightness-0 invert hover:text-green-200" />
            <router-link to="/" style="color: white;">Home</router-link>
        </li>

        <li class="flex items-center space-x-6 p-3 transition-colors rounded text-left hover:bg-green-800 text-xl">
            <img src="../assets/images/Catalogo.svg" alt="Catálogo" class="text-white w-8 h-8 inline-block mr-2 brightness-0 invert hover:text-green-200" />
            <router-link to="/catalog" style="color: white;">Catálogo</router-link>
        </li>

        <li class="flex items-center space-x-6 p-3 transition-colors rounded text-left hover:bg-green-800 text-xl">
            <img src="../assets/images/Group.svg" alt="Equipe" class="text-white w-8 h-8 inline-block mr-2 brightness-0 invert hover:text-green-200" />
            <router-link to="/team" style="color: white;">Equipe</router-link>
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

<script lang="ts" setup>

</script>
