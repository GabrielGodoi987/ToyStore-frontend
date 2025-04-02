<template>
    <h1 class="text-2xl font-bold mb-4">Gerenciamento de Brinquedos</h1>
    <div class="p-6 bg-white rounded-lg shadow-md">
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
                    <tr v-for="(item, index) in items" :key="index" class="border-b hover:bg-gray-100">
                        <td class="p-3">
                            <input type="checkbox" class="accent-blue-600">
                        </td>
                        <td class="p-3">{{ item.title }}</td>
                        <td class="p-3">{{ item.category }}</td>
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

        <!-- Paginação -->
        <div class="flex justify-between items-center mt-4">
            <button class="px-3 py-1 border rounded-lg bg-gray-200 hover:bg-gray-300">
                ←
            </button>
            <span class="text-gray-600">1</span>
            <button class="px-3 py-1 border rounded-lg bg-gray-200 hover:bg-gray-300">
                →
            </button>
        </div>
    </div>

    <!-- botão para criação de Brinquedo -->
    <section>
        <button type="button"
            class="mt-10 p-4 w-[250px] rounded-3xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">
            Adicionar Brinquedo
        </button>
    </section>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    { title: "Boneco Woody Toy...", category: "Pixar Toys", price: "R$ 110,99" },
    { title: "Boneco Woody Toy...", category: "Pixar Toys", price: "R$ 110,99" },
    { title: "Boneco Woody Toy...", category: "Pixar Toys", price: "R$ 110,99" },
    { title: "Boneco Woody Toy...", category: "Pixar Toys", price: "R$ 110,99" },
    { title: "Boneco Woody Toy...", category: "Pixar Toys", price: "R$ 110,99" },
    { title: "Boneco Woody Toy...", category: "Pixar Toys", price: "R$ 110,99" },
    { title: "Boneco Woody Toy...", category: "Pixar Toys", price: "R$ 110,99" },
    { title: "Boneco Woody Toy...", category: "Pixar Toys", price: "R$ 110,99" }
]);
</script>