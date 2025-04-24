<template>
    <div class="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                🆔 ID
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                🏷️ Categoria
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                📝 Descrição
              </th>
              <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                🛠️ Ações
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(category, index) in modelValue" :key="index" class="hover:bg-gray-50 transition duration-150">
              <td class="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                {{ category.id }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ category.name }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ category.shortDescription || 'Nenhuma descrição' }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                <div class="flex justify-center space-x-4">
                  <button @click="$emit('edit', category.id)" 
                          class="text-gray-500 hover:text-blue-600 p-1 rounded-md hover:bg-blue-50 transition duration-200"
                          title="Editar">
                    ✏️
                  </button>
                  <button @click="$emit('delete', category.id)"
                          class="text-gray-500 hover:text-red-600 p-1 rounded-md hover:bg-red-50 transition duration-200"
                          title="Excluir">
                    🗑️
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { ICategory } from '../../../interfaces/ICategory';
  
  defineProps<{
    modelValue: ICategory[]
  }>();
  
  defineEmits<{
    (e: 'delete', id: number): void;
    (e: 'edit', id: number): void;
  }>();
  </script>