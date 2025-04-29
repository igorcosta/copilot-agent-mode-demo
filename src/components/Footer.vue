<template>
  <footer class="bg-gray-800 text-white py-6">
    <div class="container mx-auto px-4 text-center">
      <p>&copy; {{ currentYear }} Vue TypeScript Demo. All rights reserved.</p>
      <p class="text-sm mt-2">Built with Vue 3, TypeScript, and TailwindCSS</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Footer',
  setup() {
    const currentYear = computed(() => new Date().getFullYear());
    
    return {
      currentYear
    };
  }
});
</script>