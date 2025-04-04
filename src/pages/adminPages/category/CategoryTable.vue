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
                <tr v-for="(item, index) in items" :key="index" class="hover:bg-gray-50 transition duration-150">
                    <td class="px-6 py-4 whitespace-nowrap">
                        <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {{ item.title }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {{ item.category }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        R$ {{ item.price.toFixed(2).replace('.', ',') }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <div class="flex justify-center space-x-4">
                            <button class="text-gray-500 hover:text-blue-600 p-1 rounded-md hover:bg-blue-50 transition duration-200"
                                    title="Editar">
                                ✏️
                            </button>
                            <button class="text-gray-500 hover:text-red-600 p-1 rounded-md hover:bg-red-50 transition duration-200"
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

<script lang="ts" setup>
import type { ICategory } from '../../../interfaces/ICategory';
const categories = defineModel({type: Array<ICategory>, required: true});

const emit = defineEmits<{
    (e: 'delete', id: number): void;
    (e: 'edit', id: number): void;
}>();

const handleDelete = (id: any) => {
   emit('delete', id)
}

const handleEdit = (id: any) => {
    emit('edit', id)
}
</script>