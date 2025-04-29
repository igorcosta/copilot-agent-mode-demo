<template>
  <header class="bg-blue-600 text-white shadow">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">Vue TypeScript Demo</h1>
      
      <!-- Mobile menu button -->
      <button 
        @click="toggleMenu" 
        class="md:hidden focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      
      <!-- Desktop menu -->
      <div class="hidden md:flex space-x-4">
        <router-link to="/" class="hover:underline">Home</router-link>
        <router-link to="/about" class="hover:underline">About</router-link>
      </div>
    </nav>
    
    <!-- Mobile menu -->
    <div 
      v-if="isMenuOpen" 
      class="md:hidden container mx-auto px-4 py-2 pb-4 bg-blue-600"
    >
      <div class="flex flex-col space-y-2">
        <router-link @click="isMenuOpen = false" to="/" class="hover:bg-blue-700 py-2 px-4 rounded">Home</router-link>
        <router-link @click="isMenuOpen = false" to="/about" class="hover:bg-blue-700 py-2 px-4 rounded">About</router-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Header',
  setup() {
    const isMenuOpen = ref(false);
    
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };
    
    return {
      isMenuOpen,
      toggleMenu
    };
  }
});
</script>