<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-semibold mb-4">Birds List</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div 
        v-for="bird in birds" 
        :key="bird.id"
        class="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-lg border border-green-200 hover:shadow-lg transition-shadow"
      >
        <h3 class="font-bold text-lg text-green-800">{{ bird.name }}</h3>
        <p class="text-sm text-gray-600 italic mb-2">{{ bird.scientificName }}</p>
        <p class="text-sm text-gray-700">{{ bird.description }}</p>
        <div class="mt-2">
          <span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
            {{ bird.habitat }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Bird {
  id: number;
  name: string;
  scientificName: string;
  description: string;
  habitat: string;
}

export default defineComponent({
  name: 'BirdsList',
  setup() {
    const birds = ref<Bird[]>([
      {
        id: 1,
        name: 'Tui',
        scientificName: 'Prosthemadera novaeseelandiae',
        description: 'A distinctive New Zealand bird with metallic green-black feathers and white throat tufts. Known for their beautiful songs and acrobatic flight.',
        habitat: 'Native forests'
      },
      {
        id: 2,
        name: 'Kiwi',
        scientificName: 'Apteryx spp.',
        description: 'Flightless nocturnal birds endemic to New Zealand. National symbol of the country with long beaks for foraging.',
        habitat: 'Forest floor'
      },
      {
        id: 3,
        name: 'Kereru',
        scientificName: 'Hemiphaga novaeseelandiae',
        description: 'New Zealand\'s only native pigeon, known for its iridescent green and bronze feathers and loud wing beats.',
        habitat: 'Native forests'
      },
      {
        id: 4,
        name: 'Fantail',
        scientificName: 'Rhipidura fulginosa',
        description: 'Small insectivorous bird known for its distinctive fan-shaped tail and friendly, curious nature around humans.',
        habitat: 'Forests and gardens'
      }
    ]);

    return {
      birds
    };
  }
});
</script>