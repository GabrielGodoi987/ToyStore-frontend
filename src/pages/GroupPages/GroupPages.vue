<template>
  <div class="flex fixed inset-0 w-screen h-screen bg-gray-900 text-white">
    <aside class="w-1/5 bg-gray-900 p-6 flex flex-col gap-4">
      <img src="" alt="Logo Disney">
      <nav class="flex flex-col gap-2">
        
        <div class="p-3 transition-colors rounded text-left hover:bg-green-800 ">
        <button class="hover:text-green-200"><img src="/src/assets/images/House.svg" alt="" class="text-white w-6 h-6 inline-block mr-2 brightness-0 invert hover:text-green-200"> Home</button>
      </div>

      <div class="p-3 transition-colors rounded text-left hover:bg-green-800 ">
        <button class="hover:text-green-200"><img src="/src/assets/images/Catalogo.svg" alt="" class="text-white w-6 h-6 inline-block mr-2 brightness-0 invert hover:text-green-200"> Catálogo</button>
      </div>

      <div class="p-3 transition-colors rounded text-left hover:bg-green-800 ">
        <button class="hover:text-green-200"><img src="/src/assets/images/Admin.svg" alt="" class="text-white w-6 h-6 inline-block mr-2 brightness-0 invert hover:text-green-200"> Administração</button>
      </div>

      <div class="p-3 transition-colors rounded text-left hover:bg-green-800 ">
        <button class="hover:text-green-200"><img src="/src/assets/images/Group.svg" alt="" class="text-white w-6 h-6 inline-block mr-2 brightness-0 invert hover:text-green-200"> Equipe</button>
      </div>

      </nav>
    </aside>
    
    <!-- Main Content -->
    <main class="w-4/5 bg-white p-10 text-gray-900 rounded-l-lg">
      <h2 class="text-3xl font-bold mb-6">Sobre a equipe</h2>
      <div class="grid grid-cols-3 gap-8">
        <div v-for="index in 6" :key="index" class="flex flex-col items-center">
          <div class="w-35 h-35 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <img src="/src/assets/images/UserAvatar.avif" alt="">
          </div>
          <p class="mt-3 text-lg font-medium">Membro</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "EquipePage"
};
</script>

<style scoped>
button {
  transition: background 0.3s;
}
</style>