<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-900">
      <div class="bg-white p-8 rounded-lg shadow-lg w-96">
        <img src="/public/LogoLogin.png" alt="" class="w-30 mb-6" />
        <h2 class="text-2xl font-semibold text-black mb-8">Entre com suas credenciais:</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <input 
              type="email" 
              v-model="email" 
              placeholder="Email"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div class="mb-4">
            <input 
              type="password" 
              v-model="password" 
              placeholder="Senha"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <button 
            type="submit" 
            class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Log in
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  
  const login = () => {
    console.log("Email:", email.value, "Senha:", password.value);
  };
  </script>
  
  <style scoped>
  :root {
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    background-color: oklch(0.21 0.04 266.0 1);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
  border-radius: 28px;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #646cff;
  transition: border-color 0.25s;
}


button:hover {
  transition: 0.25s;
  background-color: #4f46e5;
  box-shadow: 0 0 2px #213547,0 0 5px #213547,0 0 10px #213547,0 0 20px #213547;
}
  </style>
  
  