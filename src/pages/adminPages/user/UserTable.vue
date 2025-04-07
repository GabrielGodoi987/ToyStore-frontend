<template>
    <div class="overflow-x-auto">
        <table class="w-full border-collapse" v-if="users.length > 0">
            <thead>
                <tr class="border-b">
                    <th class="text-left font-medium text-gray-600 p-3">
                        <input type="checkbox" class="accent-blue-600">
                    </th>
                    <th class="text-left font-medium text-gray-600 p-3">ID</th>
                    <th class="text-left font-medium text-gray-600 p-3">Nome</th>
                    <th class="text-left font-medium text-gray-600 p-3">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in users" :key="index" class="border-b hover:bg-gray-100">
                    <td class="p-3">
                        <input type="checkbox" class="accent-blue-600">
                    </td>
                    <td class="p-3">{{ item.id }}</td>
                    <td class="p-3">{{ item.name }}</td>
                    <td class="p-3">{{ item.email }}</td>
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
        <div v-else class="flex justify-center items-center h-64">
            <p class="text-gray-500">Nenhum usuário encontrado.</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { IUser } from '../../../interfaces/IUser';

const users = defineModel({ type: Array<IUser>, required: true })
</script>