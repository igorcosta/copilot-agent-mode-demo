<template>
  <header class="bg-blue-600 text-white shadow">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">Vue TypeScript Demo</h1>
      <div class="space-x-4">
        <router-link to="/" class="hover:underline">Home</router-link>
        <router-link to="/about" class="hover:underline">About</router-link>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header'
});
</script>