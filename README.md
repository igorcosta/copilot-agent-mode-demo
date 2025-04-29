# Vue TypeScript TailwindCSS Demo

This is a simple Vue.js website built with TypeScript and TailwindCSS, designed for deployment on Azure.

## Features

- Vue 3 with Composition API
- TypeScript for type safety
- TailwindCSS for utility-first styling
- Vue Router for navigation
- Environment variables support for sensitive data
- Azure deployment configuration
- GitHub Actions for continuous deployment

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository
   ```
   git clone https://github.com/igorcosta/copilot-agent-mode-demo.git
   cd copilot-agent-mode-demo
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Set up environment variables
   ```
   cp .env.example .env
   ```
   Then edit the `.env` file with your own values.

4. Run development server
   ```
   npm run dev
   ```

5. Build for production
   ```
   npm run build
   ```

## Environment Variables

This project uses Vite's built-in environment variables system. All environment variables must be prefixed with `VITE_` to be exposed to the client-side code.

### Available Environment Variables

- `VITE_APP_TITLE`: The application title
- `VITE_API_KEY`: Your API key (never commit real keys to source control)
- `VITE_API_URL`: Your API URL
- `VITE_FEATURE_FLAG_ENABLE_NEW_FEATURE`: Feature flag (boolean)

### Environment Files

- `.env`: Default environment variables for development
- `.env.production`: Environment variables for production builds
- `.env.example`: Example environment file (safe to commit, without real keys)

### Using Environment Variables in Code

Access environment variables through the config helper:

```typescript
import env from '@/config/env';

// Use environment variables
const apiKey = env.API_KEY;
const apiUrl = env.API_URL;
```

## Azure Deployment

### Manual Deployment

1. Build the project
   ```
   npm run build
   ```

2. Deploy the `dist` folder to Azure Web App using Azure CLI
   ```
   az webapp deployment source config-zip --src dist.zip --resource-group <resource-group-name> --name <app-name>
   ```

### Automatic Deployment via GitHub Actions

1. Set up the following secrets in your GitHub repository:
   - `AZURE_WEBAPP_NAME`: Your Azure Web App name
   - `AZURE_WEBAPP_PUBLISH_PROFILE`: Your Azure publish profile
   - `API_KEY`: Your API key for production
   - `API_URL`: Your API URL for production
   - `FEATURE_FLAG_ENABLE_NEW_FEATURE`: Feature flag value for production

2. Push to the main branch or manually trigger the workflow to deploy to Azure.

## Project Structure

- `src/components/` - Reusable Vue components
- `src/views/` - Page components
- `src/router/` - Vue Router configuration
- `src/config/` - Configuration files including environment variables
- `public/` - Static assets

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
