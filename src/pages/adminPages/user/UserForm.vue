<template>
    <form @submit.prevent="$emit('submit')">
      <div>
        <label class="block mb-1 font-medium">Envie apenas uma imagem</label>
        <input
          type="file"
          accept="image/*"
          class="bg-secondary mx-5 mt-2 mb-2 text-center p-4 rounded-2xl text-white focus:bg-blue-700 cursor-pointer"
          @change="$emit('file-change', $event)"
          :disabled="form.photo.length >= 1"
        />
        <p class="text-sm text-gray-500 mt-1">Envie apenas uma imagem para o usuário</p>
        <div class="flex gap-2 mt-2 flex-wrap">
          <div v-for="(img, index) in form.photo" :key="index" class="relative w-20 h-20">
            <img :src="img.preview" class="w-full h-full object-cover rounded" />
            <button
              type="button"
              class="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
              @click="$emit('remove-image', index)"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
  
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
        <input
          v-model="form.name"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Nome do usuário"
          required
        />
      </div>
  
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Tipo de Usuário:</label>
        <select
          v-model="form.userRole"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="ADMIN">Administrador</option>
          <option value="CLIENT">Cliente</option>
        </select>
      </div>
  
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        <input
          v-model="form.email"
          type="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Email do usuário"
          required
        />
      </div>
  
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Senha:</label>
        <input
          v-model="form.password"
          type="text"
          :disabled="disabledPassword"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-100 focus:outline-none focus:shadow-outline"
          :class="{ 'cursor-not-allowed': disabledPassword }"
          placeholder="Senha do usuário"
          required
        />
        <button
          v-if="!disabledPassword"
          type="button"
          @click="$emit('generate-password')"
          class="mt-2 text-sm text-blue-600 hover:text-blue-800"
        >
          Gerar nova senha
        </button>
      </div>
  
      <button
        type="submit"
        class="mt-4 p-2 w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold"
      >
        {{ disabledPassword ? 'Criar Usuário' : 'Atualizar Usuário' }}
      </button>
    </form>
  </template>
  
  <script setup lang="ts">
import type { IUser } from '../../../interfaces/IUser';

  defineProps<{
    disabledPassword: boolean;
  }>();

  const form = defineModel<IUser>({required: true, default: () => ({
    name: '',
    userRole: 'CLIENT',
    email: '',
    password: '',
    file: [],
  })});
  
  defineEmits(['submit', 'file-change', 'remove-image', 'generate-password']);
  </script>
  