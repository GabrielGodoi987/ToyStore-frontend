<template>
    <main class="max-w-6xl mx-auto px-4 py-8">
        <div class="flex justify-between items-center mb-8 border-b pb-4">
            <h1 class="text-3xl font-bold text-gray-800">Gerenciamento de Usuários</h1>
            <button @click="handleCreate" type="button"
                class="flex items-center gap-2 px-6 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                </svg>
                Adicionar Usuário
            </button>
        </div>
        
        <section class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <UsersTable v-model="users" @edit="handleEdit" @delete="handleDelete" />
        </section>

        <!-- Modal de Criação -->
        <DialogComponent v-model="createDialog" title="Adicionar Usuário">
            <template #content>
                <form class="px-6 w-full" @submit.prevent="confirmCreate">
                    <div class="grid grid-cols-2 gap-4 mb-5">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                            <input type="text" id="name" v-model="newUser.name"
                                class="px-4 py-3 mt-1 block w-full border-gray-300 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                placeholder="Digite o nome completo">
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                            <input type="email" id="email" v-model="newUser.email"
                                class="px-4 py-3 mt-1 block w-full border-gray-300 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                placeholder="Digite o e-mail">
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mb-5">
                        <div>
                            <label for="role" class="block text-sm font-medium text-gray-700 mb-1">Tipo de Usuário</label>
                            <select id="role" v-model="newUser.role"
                                class="px-4 py-3 mt-1 w-full rounded-lg border-gray-300 border focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                                <option value="user">Usuário</option>
                                <option value="admin">Administrador</option>
                                <option value="editor">Editor</option>
                            </select>
                        </div>
                        <div>
                            <label for="status" class="block text-sm font-medium text-gray-700 mb-1">Status</label>
                            <select id="status" v-model="newUser.status"
                                class="px-4 py-3 mt-1 w-full rounded-lg border-gray-300 border focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                                <option value="active">Ativo</option>
                                <option value="inactive">Inativo</option>
                                <option value="pending">Pendente</option>
                            </select>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mb-5">
                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                            <input type="password" id="password" v-model="newUser.password"
                                class="px-4 py-3 mt-1 block w-full border-gray-300 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                placeholder="Digite a senha">
                        </div>
                        <div>
                            <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">Confirmar Senha</label>
                            <input type="password" id="confirmPassword" v-model="newUser.confirmPassword"
                                class="px-4 py-3 mt-1 block w-full border-gray-300 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                placeholder="Confirme a senha">
                        </div>
                    </div>
                    <div class="mt-8 flex justify-center gap-4">
                        <button type="button" @click="createDialog = false"
                            class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-200">
                            Cancelar
                        </button>
                        <button type="submit"
                            class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 shadow-md">
                            Adicionar Usuário
                        </button>
                    </div>
                </form>
            </template>
        </DialogComponent>

        <!-- Modal de Edição -->
        <DialogComponent v-model="editDialog" title="Editar Usuário">
            <template #content>
                <form class="px-6 w-full" @submit.prevent="confirmEdit">
                    <div class="grid grid-cols-2 gap-4 mb-5">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                            <input type="text" id="name" v-model="currentUser.name"
                                class="px-4 py-3 mt-1 block w-full border-gray-300 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                            <input type="email" id="email" v-model="currentUser.email"
                                class="px-4 py-3 mt-1 block w-full border-gray-300 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mb-5">
                        <div>
                            <label for="role" class="block text-sm font-medium text-gray-700 mb-1">Tipo de Usuário</label>
                            <select id="role" v-model="currentUser.role"
                                class="px-4 py-3 mt-1 w-full rounded-lg border-gray-300 border focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                                <option value="user">Usuário</option>
                                <option value="admin">Administrador</option>
                                <option value="editor">Editor</option>
                            </select>
                        </div>
                        <div>
                            <label for="status" class="block text-sm font-medium text-gray-700 mb-1">Status</label>
                            <select id="status" v-model="currentUser.status"
                                class="px-4 py-3 mt-1 w-full rounded-lg border-gray-300 border focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                                <option value="active">Ativo</option>
                                <option value="inactive">Inativo</option>
                                <option value="pending">Pendente</option>
                            </select>
                        </div>
                    </div>
                    <div class="mt-8 flex justify-center gap-4">
                        <button type="button" @click="editDialog = false"
                            class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-200">
                            Cancelar
                        </button>
                        <button type="submit"
                            class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 shadow-md">
                            Salvar Alterações
                        </button>
                    </div>
                </form>
            </template>
        </DialogComponent>

        <!-- Modal de Exclusão -->
        <DialogComponent v-model="deleteDialog" title="Confirmar exclusão">
            <template #content>
                <div class="flex flex-col text-center p-6">
                    <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-medium text-gray-900 mb-2">Tem certeza que deseja excluir este usuário?</h3>
                    <p class="text-gray-500">A exclusão de <span class="font-bold text-gray-700">{{ currentUser.name }}</span> é irreversível.</p>
                </div>
                <div class="flex justify-center gap-4 p-6 pt-0">
                    <button @click="deleteDialog = false"
                        class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-200">
                        Cancelar
                    </button>
                    <button @click="confirmDelete"
                        class="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200 shadow-md">
                        Confirmar Exclusão
                    </button>
                </div>
            </template>
        </DialogComponent>

        <!-- Alertas -->
        <SuccessAlertComponent v-model="isCreateAlert" title="Sucesso!" description="Usuário criado com sucesso!" :timeout="2000"/>
        <SuccessAlertComponent v-model="isEditAlert" title="Sucesso!" description="Usuário editado com sucesso!" :timeout="2000"/>
        <SuccessAlertComponent v-model="isDeleteAlert" title="Sucesso!" description="Usuário deletado com sucesso!" :timeout="2000"/>
    </main>
</template>

<script setup>
import { ref } from "vue";
import DialogComponent from "../../../components/DialogComponent.vue";
import UsersTable from "./UserTable.vue";
import SuccessAlertComponent from "../../../components/alerts/SuccessAlertComponent.vue";

const users = ref([
  {
    id: 1,
    name: 'João Silva',
    email: 'joao@example.com',
    role: 'admin',
    status: 'active',
    createdAt: '2023-01-15'
  },
  {
    id: 2,
    name: 'Maria Santos',
    email: 'maria@example.com',
    role: 'editor',
    status: 'active',
    createdAt: '2023-02-20'
  },
  {
    id: 3,
    name: 'Pedro Oliveira',
    email: 'pedro@example.com',
    role: 'user',
    status: 'active',
    createdAt: '2023-03-10'
  },
  {
    id: 4,
    name: 'Ana Costa',
    email: 'ana@example.com',
    role: 'user',
    status: 'inactive',
    createdAt: '2023-04-05'
  },
  {
    id: 5,
    name: 'Carlos Mendes',
    email: 'carlos@example.com',
    role: 'editor',
    status: 'pending',
    createdAt: '2023-05-12'
  }
]);

const createDialog = ref(false);
const editDialog = ref(false);
const deleteDialog = ref(false);
const isCreateAlert = ref(false);
const isEditAlert = ref(false);
const isDeleteAlert = ref(false);

const newUser = ref({
  name: '',
  email: '',
  role: 'user',
  status: 'active',
  password: '',
  confirmPassword: ''
});

const currentUser = ref({
  id: null,
  name: '',
  email: '',
  role: '',
  status: '',
  createdAt: ''
});

const handleCreate = () => {
  newUser.value = { 
    name: '', 
    email: '', 
    role: 'user', 
    status: 'active', 
    password: '', 
    confirmPassword: '' 
  };
  createDialog.value = true;
};

const handleEdit = (user) => {
  currentUser.value = { ...user };
  editDialog.value = true;
};

const handleDelete = (user) => {
  currentUser.value = { ...user };
  deleteDialog.value = true;
};

const confirmCreate = () => {
  const newId = users.value.length > 0 ? Math.max(...users.value.map(u => u.id)) + 1 : 1;
  users.value.push({ 
    id: newId,
    name: newUser.value.name,
    email: newUser.value.email,
    role: newUser.value.role,
    status: newUser.value.status,
    createdAt: new Date().toISOString().split('T')[0]
  });
  createDialog.value = false;
  isCreateAlert.value = true;
};

const confirmEdit = () => {
  const index = users.value.findIndex(u => u.id === currentUser.value.id);
  if (index !== -1) {
    users.value[index] = { ...currentUser.value };
  }
  editDialog.value = false;
  isEditAlert.value = true;
};

const confirmDelete = () => {
  users.value = users.value.filter(u => u.id !== currentUser.value.id);
  deleteDialog.value = false;
  isDeleteAlert.value = true;
};