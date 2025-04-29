/**
 * Type-safe environment variables configuration
 * 
 * This module provides a central place to access environment variables
 * with proper typing and default values.
 * 
 * All environment variables should be prefixed with VITE_ to be
 * exposed to the client-side code by Vite.
 */

interface EnvironmentVariables {
  // App settings
  APP_TITLE: string;
  
  // API settings
  API_KEY: string;
  API_URL: string;
  
  // Feature flags
  FEATURE_FLAG_ENABLE_NEW_FEATURE: boolean;
}

/**
 * Get environment variable with proper type conversion
 */
function getEnvVariable(key: string, defaultValue: string = ''): string {
  return import.meta.env[`VITE_${key}`] || defaultValue;
}

/**
 * Get boolean environment variable
 */
function getBooleanEnvVariable(key: string, defaultValue: boolean = false): boolean {
  const value = getEnvVariable(key, String(defaultValue));
  return value.toLowerCase() === 'true';
}

/**
 * Environment variables with proper typing
 */
export const env: EnvironmentVariables = {
  // App settings
  APP_TITLE: getEnvVariable('APP_TITLE', 'Vue TypeScript Demo'),
  
  // API settings
  API_KEY: getEnvVariable('API_KEY', ''),
  API_URL: getEnvVariable('API_URL', ''),
  
  // Feature flags
  FEATURE_FLAG_ENABLE_NEW_FEATURE: getBooleanEnvVariable('FEATURE_FLAG_ENABLE_NEW_FEATURE', false),
};

/**
 * Check if we are in a production environment
 */
export const isProduction = import.meta.env.MODE === 'production';

/**
 * Check if we are in a development environment
 */
export const isDevelopment = import.meta.env.MODE === 'development';

export default env;