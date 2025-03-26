<template>
  <div class="h-full flex flex-col items-center">
    <h2 class="text-4xl font-bold mt-3 mb-6 text-center">Catálogo de Brinquedos</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
    
      <!-- Renderizando os cartões de categoria -->
      <CategoriaCard categoria="Bonecos" />
    </div>
  </div>
</template>

<script lang="ts">
import CategoriaCard from '../components/CategoriaCard.vue';

export default {
  name: 'CategoriaPage',
  components: { CategoriaCard },
  data() {
    return {
      categorias: [
        { nome: 'Bonecos', descricao: 'Diversos bonecos para brincar.', imagem: 'bonecos.webp' },
        { nome: 'Veículos', descricao: 'Carrinhos, caminhões, aviões e outros brinquedos de transporte.', imagem: 'veículos.jpg' },
        { nome: 'Coleção', descricao: 'Brinquedos colecionáveis como action figures, miniaturas e figuras de ação.', imagem: 'colecao.webp' },
        { nome: 'Quebra-Cabeça', descricao: 'Desafie sua mente com nossos quebra-cabeças.', imagem: 'quebra.PNG' },
        { nome: 'Fantasias', descricao: 'Vista-se como seu personagem favorito.', imagem: 'fantasias.PNG' },
        { nome: 'Pelúcias', descricao: 'Pelúcias macias e fofinhas.', imagem: 'pelucias.PNG' }
      ]
    };
  }
};
</script>