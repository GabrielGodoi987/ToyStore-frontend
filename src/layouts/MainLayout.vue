<template>
    <div>
    <div>
        <RouterView />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';


const isDarkOrLight = ref<boolean>(false);
const currentTheme = ref<'dark' | 'light'>('dark');
const togleDarkLightMode = () => {
    isDarkOrLight.value = !isDarkOrLight.value;
    if (currentTheme.value == 'dark') {
        currentTheme.value = 'light'
    } else {
        currentTheme.value = 'dark';
    }
    document.documentElement.style.setProperty('--color-theme', currentTheme.value)
}

</script>

<style>
:root {
    color-scheme: var(--color-theme);
}
</style>