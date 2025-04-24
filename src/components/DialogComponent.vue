<template>
    <transition name="fade">
        <div v-if="modelValue" class="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
            <div class="bg-gray-900 w-full max-w-md p-6 rounded-xl shadow-xl relative border border-gray-700">
                <!-- Botão de Fechar -->
                <button 
                    @click="modelValue = false" 
                    class="absolute top-4 right-4 text-gray-400 hover:text-blue-400 transition-colors duration-200 p-1 rounded-full hover:bg-gray-800"
                    aria-label="Fechar modal"
                >
                    <span class="drop-shadow-[0_0_2px_rgba(96,165,250,0.8)]">✖</span>
                </button>

                <!-- Título do Modal -->
                <h2 class="text-2xl font-bold text-center mb-6 text-gray-100">{{ title }}</h2>

                <!-- Slot para Conteúdo -->
                <div class="max-h-[70vh] overflow-y-auto px-2 text-gray-300">
                    <slot name="content"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
defineOptions({
    name: 'DialogComponent'
});
defineProps({
    title: String
});
const modelValue = defineModel({ type: Boolean });
</script>

<style>
/* Animação Fade */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>