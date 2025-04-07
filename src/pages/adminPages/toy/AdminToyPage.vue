<template>
  <h1 class="text-2xl font-bold mb-4">Gerenciamento de Brinquedos</h1>
  <div class="p-6 bg-white rounded-lg shadow-md">
    <ToyTable v-model="toys" />
  </div>

  <!-- botão para criação de Brinquedo -->
  <section>
    <button type="button" @click="showDialog = true"
      class="mt-10 p-4 w-[250px] rounded-3xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">
      Adicionar Brinquedo
    </button>
  </section>

  <section>
    <DialogComponent v-model="showDialog" title="Adicionar novo brinquedo" @close="showDialog = false">
      <template #content>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label class="block mb-1 font-medium">Nome</label>
            <input type="text" v-model="form.name" class="w-full p-2 border rounded" required />
          </div>

          <div>
            <label class="block mb-1 font-medium">Descrição</label>
            <textarea v-model="form.description" rows="3" class="w-full p-2 border rounded" required></textarea>
          </div>

          <div>
            <label class="block mb-1 font-medium">Preço</label>
            <input type="number" v-model="form.price" step="0.01" class="w-full p-2 border rounded" required />
          </div>

          <div>
            <label for="categories" class="block mb-1 font-medium">Categoria</label>
            <select v-model="form.categoryId" id="categories" class="w-full p-2 border rounded" required>
              <option selected>Escolha uma categoria</option>
              <option v-for="(i, index) in categories" :key="index" :value="i.id">{{ i.name }}</option>
            </select>
          </div>

          <div>
            <label class="block mb-1 font-medium">Imagens (máx. 4)</label>
            <input type="file" accept="image/*"
              class="bg-secondary mx-5 mt-2 mb-2 text-center p-4 rounded-2xl text-white focus:bg-blue-700 cursor-pointer" @change="handleImageUpload"
              :disabled="form.images.length >= 4" />
            <p class="text-sm text-gray-500 mt-1">Você pode enviar até 4 imagens.</p>
            <div class="flex gap-2 mt-2 flex-wrap">
              <div v-for="(img, index) in form.images" :key="index" class="relative w-20 h-20">
                <img :src="img.preview" class="w-full h-full object-cover rounded" />
                <button type="button"
                  class="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                  @click="removeImage(index)">
                  ✕
                </button>
              </div>
            </div>
          </div>

          <button type="submit" class="mt-4 p-2 px-6 bg-secondary hover:bg-blue-700 text-white rounded-xl">
            Salvar Brinquedo
          </button>
        </form>
      </template>
    </DialogComponent>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ToyTable from "./ToyTable.vue";
import DialogComponent from "../../../components/DialogComponent.vue";
import { ToysService } from "../../../services/ToyService";
import type { IToy } from "../../../interfaces/IToy";
import type { ICategory } from "../../../interfaces/ICategory";
import { CategoryService } from "../../../services/CategoryService";

const toysService = new ToysService("/toys");
const categoryService = new CategoryService("/categories");
const toys = ref<IToy[]>([]);
const categories = ref<ICategory[]>([]);
const showDialog = ref<boolean>(false);

const form = ref<IToy>({
  name: "",
  description: "",
  price: 0,
  categoryId: 0,
  images: [],
});

const handleImageUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const files = target.files;
  if (!files || form.value.images.length >= 4) return;

  for (let i = 0; i < files.length && form.value.images.length < 4; i++) {
    const file = files[i];
    const preview = URL.createObjectURL(file);
    form.value.images.push({ file, preview });
  }
};

const removeImage = (index: number) => {
  form.value.images.splice(index, 1);
};

const submitForm = async () => {
  const formData = new FormData();
  formData.append("name", form.value.name);
  formData.append("description", form.value.description);
  formData.append("price", String(form.value.price));
  formData.append("categoryId", String(form.value.categoryId));

  form.value.images.forEach((img) => {
    formData.append("files", img.file);
  });

  try {
    const response = await toysService.create(formData);
    if (response.status === 201) {
      alert("Brinquedo adicionado com sucesso!");
      toys.value.push(response.data);
      showDialog.value = false;
      form.value = {
        name: "",
        description: "",
        price: 0,
        categoryId: 0,
        images: [],
      };
    } else {
      console.error("Erro ao adicionar brinquedo:", response);
    }
  } catch (error) {
    console.error("Erro no envio:", error);
  }
};

onMounted(async () => {
  try {
    const toysResponse = await toysService.getAll();
    const categoryResponse = await categoryService.getCategories();
    if (toysResponse.status === 200) {
      toys.value = toysResponse.data;
      categories.value = categoryResponse.data;
      console.log(categories.value)
      console.log(toys.value)
    } else {
      console.error("Erro ao buscar os brinquedos:", toysResponse.status);
      console.log("Erro ao buscar as categorias:", categories.value);
    }
  } catch (error) {
    console.error("Erro ao carregar brinquedos:", error);
  }
});
</script>