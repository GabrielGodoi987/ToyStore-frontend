<template>
    <div class="overflow-x-auto">
        <table class="w-full border-collapse">
            <thead>
                <tr class="border-b">
                    <th class="text-left font-medium text-gray-600 p-3">
                        <input type="checkbox" class="accent-blue-600">
                    </th>
                    <th class="text-left font-medium text-gray-600 p-3">Título</th>
                    <th class="text-left font-medium text-gray-600 p-3">Categoria</th>
                    <th class="text-left font-medium text-gray-600 p-3">Preço</th>
                    <th class="text-center font-medium text-gray-600 p-3">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in toys" :key="index" class="border-b hover:bg-gray-100">
                    <td class="p-3">
                        <input type="checkbox" class="accent-blue-600">
                    </td>
                    <td class="p-3">{{ item.name }}</td>
                    <td class="p-3">{{ item.categoryId }}</td>
                    <td class="p-3">{{ item.price }}</td>
                    <td class="p-3 flex justify-center space-x-3">
                        <button class="bg-text-gray-500 hover:text-blue-600">
                            ✏️
                        </button>
                        <button class="text-gray-500 hover:text-red-600">
                            🗑️
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup lang="ts">
import type { IToy } from '../../../interfaces/IToy';

const toys = defineModel<IToy[]>({ type: Array<IToy>, required: true })
</script>