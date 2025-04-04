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
                📝 Título
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                🏷️ Categoria
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                💰 Preço
              </th>
              <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                🛠️ Ações
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(items, index) in modelValue" :key="index" class="hover:bg-gray-50 transition duration-150">
              <td class="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                {{ item.title }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ items.category }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                R$ {{ items.price.toFixed(2).replace('.', ',') }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                <div class="flex justify-center space-x-4">
                  <button @click="$emit('edit', item)" 
                          class="text-gray-500 hover:text-blue-600 p-1 rounded-md hover:bg-blue-50 transition duration-200"
                          title="Editar">
                    ✏️
                  </button>
                  <button @click="$emit('delete', item)" 
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
  
  <script setup>
import { ref } from 'vue';

const items = ref([
    { id: 1, title: "Boneco Woody Toy Story", category: "Pixar Toys", price: "R$ 110,99" },
    { id: 2, title: "Boneco Buzz Lightyear", category: "Pixar Toys", price: "R$ 129,99" },
    { id: 3, title: "Carrinho de Controle Remoto", category: "Carrinhos", price: "R$ 89,90" },
    { id: 4, title: "Boneca Barbie", category: "Bonecos", price: "R$ 79,50" },
    { id: 5, title: "Lego City", category: "Brinquedos Educativos", price: "R$ 199,90" },
    { id: 6, title: "Quebra-Cabeça 1000 peças", category: "Brinquedos Educativos", price: "R$ 59,90" },
    { id: 7, title: "Boneco Homem-Aranha", category: "Action Figures", price: "R$ 69,90" },
    { id: 8, title: "Boneco Batman", category: "Action Figures", price: "R$ 75,50" }
]);

  defineProps({
    modelValue: {
      type: Array,
      required: true
    }
  });
  
  defineEmits(['edit', 'delete']);
  </script>