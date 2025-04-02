<template>
    <transition name="fade">
        <div v-if="modelValue" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div class="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
                <!-- Botão de Fechar -->
                <button @click="closeDialog" class="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
                    ✖
                </button>

                <!-- Título do Modal -->
                <h2 class="text-xl font-semibold text-center mb-4">{{ title }}</h2>

                <!-- Slot para Conteúdo -->
                <slot name="content"></slot>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
defineProps({
    title: String
});

const modelValue = defineModel({ type: Boolean });
</script>

<style>
/* Animação Fade */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>