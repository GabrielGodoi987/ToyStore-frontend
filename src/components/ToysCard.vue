<template>
    <div class="toy-card">
      <h3>{{ toy.name }}</h3>
      <p>R$ {{ toy.price }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    toy: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .toy-card {
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
  }
  </style>