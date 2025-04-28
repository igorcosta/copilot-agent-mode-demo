<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-6">About This Project</h1>
    <div class="bg-white rounded-lg shadow-md p-6">
      <p class="mb-4">
        This is a simple demo project built with Vue 3, TypeScript, and TailwindCSS.
        It demonstrates a basic structure for a Vue application that can be deployed to Azure.
      </p>
      <p class="mb-4">
        The project was created as a template for building modern web applications
        with a focus on developer experience and performance.
      </p>
      <h2 class="text-2xl font-semibold mt-6 mb-4">Tech Stack</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-green-50 p-4 rounded">
          <h3 class="font-bold">Vue 3</h3>
          <p>Modern, reactive UI framework</p>
        </div>
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="font-bold">TypeScript</h3>
          <p>Type safety and better developer experience</p>
        </div>
        <div class="bg-purple-50 p-4 rounded">
          <h3 class="font-bold">TailwindCSS</h3>
          <p>Utility-first CSS framework</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About'
});
</script>