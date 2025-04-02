<template>
  <div 
    @click="handleClick"
    class="bg-white p-2 sm:p-3 rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition 
           w-[140px] xs:w-[160px] sm:w-[180px] md:w-[200px] 
           h-[200px] sm:h-[220px] md:h-[240px]
           flex flex-col items-center mx-auto"
  >
    <div class="w-[100px] xs:w-[110px] sm:w-[120px] h-[100px] xs:h-[110px] sm:h-[120px] mb-2 sm:mb-3">
      <img 
        :src="image || 'https://cdn.quasar.dev/img/mountains.jpg'" 
        alt="Imagem da categoria"
        class="w-full h-full object-cover rounded-full sm:rounded-lg"
      />
    </div>

    <h3 class="text-sm xs:text-base sm:text-lg font-semibold text-gray-800 text-center line-clamp-2 px-1">
      {{ name }}
    </h3>
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
