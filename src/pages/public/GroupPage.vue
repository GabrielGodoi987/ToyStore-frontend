<template>
  <main class="w-4/5 bg-white p-10 text-gray-900 rounded-l-lg">
    <h2 class="text-3xl font-bold mb-6">Sobre a equipe</h2>
    <div class="grid grid-cols-3 gap-8">
      <div class="flex flex-col items-center">
        <div class="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
          <img src="/src/assets/images/UserAvatar.avif" alt="">
        </div>
        <p class="mt-3 text-lg font-medium">Rafael Mascarenhas</p>
      </div>

      <div class="flex flex-col items-center">
        <div class="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
          <img src="/src/assets/images/UserAvatar.avif" alt="">
        </div>
        <p class="mt-3 text-lg font-medium">Gabriel Godoi</p>
      </div>

      <div class="flex flex-col items-center">
        <div class="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
          <img src="/src/assets/images/UserAvatar.avif" alt="">
        </div>
        <p class="mt-3 text-lg font-medium">Eduarda</p>
      </div>

      <div class="flex flex-col items-center">
        <div class="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
          <img src="/src/assets/images/UserAvatar.avif" alt="">
        </div>
        <p class="mt-3 text-lg font-medium">Lindalva</p>
      </div>

      <div class="flex flex-col items-center">
        <div class="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
          <img src="/src/assets/images/UserAvatar.avif" alt="">
        </div>
        <p class="mt-3 text-lg font-medium">Vitor Tavares</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
defineOptions({
  name: "EquipePage"
});
</script>
