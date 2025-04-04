<template>
    <div class="p-6 bg-white rounded-lg shadow-md">
        <div class="overflow-x-auto">
            <table class="w-full border-collapse">
                <thead>
                    <tr class="border-b">
                        <th class="text-left font-medium text-gray-600 p-3">
                            <input type="checkbox" class="accent-blue-600">
                        </th>
                        <th class="text-left font-medium text-gray-600 p-3">Id</th>
                        <th class="text-left font-medium text-gray-600 p-3">Título</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(i, index) in categories" :key="index" class="hover:bg-gray-100">
                        <td class="p-3">
                            <input type="checkbox" class="accent-blue-600">
                        </td>
                        <td class="p-3">{{ i.id }}</td>
                        <td class="p-3">{{ i.name }}</td>
                        <td class="p-3 flex justify-center space-x-3">
                            <button v-if="i.id" @click="handleEdit(i.id)"
                                class="bg-text-gray-500 hover:text-blue-600 shadow p-3">
                                ✏️
                            </button>
                            <button v-if="i.id" @click="handleDelete(i.id)"
                                class="text-gray-500 hover:text-red-600 shadow p-3">
                                🗑️
                            </button>
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