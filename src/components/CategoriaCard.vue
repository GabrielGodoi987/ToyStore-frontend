<template>
  <div @click="handleClick"
    class="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer hover:bg-gray-100 transition w-[280px] h-[340px] flex flex-col items-center justify-between">
    <!-- Imagem do boneco -->
    <img :src="image || 'https://cdn.quasar.dev/img/mountains.jpg'" alt=" Imagem da categoria"
      class="w-full h-[200px] object-cover rounded-md mb-4" />
    <!-- Nome da categoria -->
    <h3 class="text-xl font-semibold">{{ name }}</h3>
    <!-- Descrição da categoria 
    <p class="text-gray-600">Brinquedos colecionáveis e muito mais.</p>
    -->
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  id: Number,
  name: {
    type: String,
    required: true
  },
  image: String
});

const emit = defineEmits<{
  (e: 'navigate', id: any): void;
}>();

const handleClick = () => {
  emit('navigate', props.id);
};
</script>
