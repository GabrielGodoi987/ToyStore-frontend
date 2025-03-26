<template>
  <div 
    @click="irParaCategoria" 
    class="bg-gray-50 p-4 rounded-lg shadow-md text-center cursor-pointer hover:bg-gray-200 transition w-[280px] h-[340px] flex flex-col items-center justify-between"> 
    <!-- Ajustado para dimensões fixas e o flex ajustado -->
    <img :src="getImagemSrc(categoria.imagem)" alt="Imagem da categoria" class="w-full h-[200px] object-cover rounded-md mb-4">
    <h3 class="text-xl font-semibold">{{ categoria.nome }}</h3>
    <p class="text-gray-600">{{ categoria.descricao }}</p>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';

export default {
  props: {
    categoria: Object
  },
  setup(props) {
    const router = useRouter();

    const irParaCategoria = () => {
      const categoriaFormatada = props.categoria.nome.toLowerCase().replace(/\s+/g, "-"); // Transforma "Quebra Cabeça" em "quebra-cabeca"
      router.push(`/categorias/${categoriaFormatada}`);
    };

    return { irParaCategoria };
  },
  methods: {
    getImagemSrc(imagem: string) {
      return new URL(`../assets/images/${imagem}`, import.meta.url).href;
    }
  }
};
</script>
