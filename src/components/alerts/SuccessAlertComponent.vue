<template>
    <div 
      v-if="isOpen" 
      class="fixed top-5 right-5 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md transform transition-transform duration-500 ease-out"
      :class="{'translate-x-0 opacity-100': isOpen, 'translate-x-full opacity-0': !isOpen}"
      role="alert"
    >
      <div class="flex">
        <div class="py-1">
          <svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
        </div>
        <div>
          <p class="font-bold">{{ title }}</p>
          <p class="text-sm">{{ description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { watch } from 'vue';
  
  const isOpen = defineModel({ type: Boolean, required: true });
  const props = defineProps({
    timeout: {
      type: Number,
      default: 5000
    },
    title: String,
    description: String
  });
  
  watch(isOpen, (newValue) => {
    if (newValue) {
      setTimeout(() => {
        isOpen.value = false;
      }, props.timeout);
    }
  });
  </script>
  