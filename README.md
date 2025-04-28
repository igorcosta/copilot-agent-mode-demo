# Vue TypeScript TailwindCSS Demo

This is a simple Vue.js website built with TypeScript and TailwindCSS, designed for deployment on Azure.

## Features

- Vue 3 with Composition API
- TypeScript for type safety
- TailwindCSS for utility-first styling
- Vue Router for navigation
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

3. Run development server
   ```
   npm run dev
   ```

4. Build for production
   ```
   npm run build
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

2. Push to the main branch or manually trigger the workflow to deploy to Azure.

## Project Structure

- `src/components/` - Reusable Vue components
- `src/views/` - Page components
- `src/router/` - Vue Router configuration
- `public/` - Static assets

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
