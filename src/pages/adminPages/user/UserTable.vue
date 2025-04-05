<template>
    <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        👤 Nome
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ✉️ E-mail
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        🏷️ Tipo
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        🟢 Status
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        📅 Cadastrado em
                    </th>
                    <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ⚙️ Ações
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="user in modelValue" :key="user.id">
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                <span class="text-gray-600 font-medium">{{ user.name.charAt(0) }}</span>
                            </div>
                            <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">{{ user.name }}</div>
                            </div>
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">{{ user.email }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span :class="{
                            'bg-purple-100 text-purple-800': user.role === 'admin',
                            'bg-blue-100 text-blue-800': user.role === 'editor',
                            'bg-green-100 text-green-800': user.role === 'user'
                        }" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                            {{ getRoleLabel(user.role) }}
                        </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span :class="{
                            'bg-green-100 text-green-800': user.status === 'active',
                            'bg-red-100 text-red-800': user.status === 'inactive',
                            'bg-yellow-100 text-yellow-800': user.status === 'pending'
                        }" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                            {{ getStatusLabel(user.status) }}
                        </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {{ formatDate(user.createdAt) }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button @click="$emit('edit', user)" class="text-blue-600 hover:text-blue-900 mr-4">✏️ Editar</button>
                        <button @click="$emit('delete', user)" class="text-red-600 hover:text-red-900">🗑️ Excluir</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
defineProps({
    modelValue: {
        type: Array,
        required: true
    }
});

defineEmits(['edit', 'delete']);

const getRoleLabel = (role) => {
    const roles = {
        'admin': 'Administrador',
        'editor': 'Editor',
        'user': 'Usuário'
    };
    return roles[role] || role;
};

const getStatusLabel = (status) => {
    const statuses = {
        'active': 'Ativo',
        'inactive': 'Inativo',
        'pending': 'Pendente'
    };
    return statuses[status] || status;
};

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
};
</script>