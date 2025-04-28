<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-6">Welcome to the Vue TypeScript Demo</h1>
    <div class="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 class="text-2xl font-semibold mb-4">Features</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Vue 3 with Composition API</li>
        <li>TypeScript integration</li>
        <li>TailwindCSS for styling</li>
        <li>Vue Router for navigation</li>
      </ul>
    </div>
    <div class="bg-blue-50 rounded-lg p-6">
      <h2 class="text-2xl font-semibold mb-4">Getting Started</h2>
      <p class="mb-4">
        This project is ready for deployment on Azure. Check the README for detailed instructions.
      </p>
      <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Learn More
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
});
</script>