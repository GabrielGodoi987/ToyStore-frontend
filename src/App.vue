<template>
  <div id="app">
    <Menu />
    <router-view />
  </div>
</template>

<script lang="ts">
import Menu from './components/Menu.vue';

export default {
  name: 'App',
  components: {
    Menu
  }
};
</script>

<style scoped>
/* Estilos globais */
</style>
