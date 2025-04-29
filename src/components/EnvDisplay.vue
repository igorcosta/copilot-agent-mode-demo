<template>
  <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
    <h2 class="text-xl font-semibold mb-3">Environment Configuration</h2>
    <p class="mb-2"><span class="font-medium">App Title:</span> {{ env.APP_TITLE }}</p>
    <p class="mb-2">
      <span class="font-medium">API URL:</span> 
      <span class="text-blue-600">{{ maskApiUrl }}</span>
    </p>
    <p class="mb-2">
      <span class="font-medium">API Key:</span> 
      <span class="text-blue-600">{{ maskApiKey }}</span>
    </p>
    <p class="mb-2">
      <span class="font-medium">New Feature Enabled:</span>
      <span :class="env.FEATURE_FLAG_ENABLE_NEW_FEATURE ? 'text-green-600' : 'text-red-600'">
        {{ env.FEATURE_FLAG_ENABLE_NEW_FEATURE ? 'Yes' : 'No' }}
      </span>
    </p>
    <p class="text-sm text-gray-500 mt-4">
      Environment: {{ environmentName }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import env, { isProduction, isDevelopment } from '@/config/env';

export default defineComponent({
  name: 'EnvDisplay',
  setup() {
    // Mask the API key for display purposes
    const maskApiKey = computed(() => {
      if (!env.API_KEY) return 'Not configured';
      return env.API_KEY.substring(0, 4) + '...' + env.API_KEY.substring(env.API_KEY.length - 4);
    });

    // Mask the API URL for display purposes
    const maskApiUrl = computed(() => {
      if (!env.API_URL) return 'Not configured';
      return env.API_URL;
    });

    // Get the current environment name
    const environmentName = computed(() => {
      if (isProduction) return 'Production';
      if (isDevelopment) return 'Development';
      return 'Unknown';
    });

    return {
      env,
      maskApiKey,
      maskApiUrl,
      environmentName
    };
  }
});
</script>