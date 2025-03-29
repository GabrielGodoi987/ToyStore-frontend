<template>
  <div class="flex items-center justify-center fixed inset-0 w-screen h-screen bg-gray-900">
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
      <img src="/public/LogoLogin.png" alt="" class="w-30 mb-6" />
      <h2 class="text-2xl font-semibold text-black mb-8">Entre com suas credenciais:</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <input 
            type="email" 
            v-model="email" 
            placeholder="Email"
            :class="{'border-red-500': emailError}"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
          <p v-if="emailError" class="text-red-500 text-sm mt-1">Por favor, preencha o email</p>
        </div>
        <div class="mb-4">
          <input 
            type="password" 
            v-model="password" 
            placeholder="Senha"
            :class="{'border-red-500': passwordError}"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
          <p v-if="passwordError" class="text-red-500 text-sm mt-1">Por favor, preencha a senha</p>
        </div>
        <button v-on:click=login()
          type="submit" 
          class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
          Log in
        </button>
      </form>
    </div>
  </div>

  <div v-if="showSuccessNotification" class="fixed bottom-4 right-4 transition duration-300 transform translate-x-0 translate-y-0">
      <div class="bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        Login Feito com sucesso!
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const emailError = ref(false);
const passwordError = ref(false);
const showSuccessNotification = ref(false);

const login = () => {
  emailError.value = false;
  passwordError.value = false;
  
  if(email.value === '') {
    emailError.value = true;
  }
  if(password.value === '') {
    passwordError.value = true;
  }
  
  if(emailError.value || passwordError.value) {
    return;
  }
  
  console.log('Login realizado com:', email.value);

  showSuccessNotification.value = true;
    setTimeout(() => {
    showSuccessNotification.value = false;
  }, 3000);
};
</script>

<style scoped>
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
}
button {
  border-radius: 28px;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #646cff;
}
button:hover {
  transition: 0.25s;
  background-color: #4f46e5;
  box-shadow: 0 0 2px #213547,0 0 5px #213547,0 0 10px #213547,0 0 20px #213547;
}
.border-red-500 {
  border-color: #ef4444;
}
</style>
  