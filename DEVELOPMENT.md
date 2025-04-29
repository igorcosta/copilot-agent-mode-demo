# Development Guide

This guide provides instructions for local development and deployment of the Vue TypeScript TailwindCSS Demo application.

## Local Development

### Prerequisites

- Node.js 16.0 or higher
- npm 7.0 or higher

### Setting Up the Development Environment

1. Clone the repository
   ```bash
   git clone https://github.com/igorcosta/copilot-agent-mode-demo.git
   cd copilot-agent-mode-demo
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file to add your own values for API keys and other sensitive information.

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

### Environment Variables

This project uses environment variables to manage sensitive information like API keys. In development:

1. Variables are loaded from `.env` file
2. All environment variables must be prefixed with `VITE_` to be accessible in client-side code
3. Access them in your code using the environment helper:

```typescript
import env from '@/config/env';

// Then use variables like:
console.log(env.API_KEY);
console.log(env.API_URL);
```

Required environment variables:
- `VITE_APP_TITLE`: Application title
- `VITE_API_KEY`: Your API key
- `VITE_API_URL`: API endpoint URL
- `VITE_FEATURE_FLAG_ENABLE_NEW_FEATURE`: Boolean feature flag

### Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm run type-check`: Run TypeScript type checking
- `npm run preview`: Preview the production build locally

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Header.vue    # Navigation header
│   ├── Footer.vue    # Page footer
│   └── EnvDisplay.vue # Environment variables display component
├── views/            # Page components
│   ├── Home.vue      # Landing page
│   └── About.vue     # About page
├── config/           # Configuration
│   └── env.ts        # Environment variables helper
├── router/           # Vue Router configuration
├── App.vue           # Root component
└── main.ts           # Entry point
```

## Building for Production

To create a production build:

```bash
npm run build
```

For production builds:
- Environment variables are loaded from `.env.production`
- GitHub Actions will inject secrets from repository settings

The build output will be in the `dist` directory.

## Deployment

### Manual Deployment to Azure

1. Build the application
   ```bash
   npm run build
   ```

2. Deploy using the provided deploy script
   ```bash
   ./deploy.sh
   ```

### GitHub Actions Deployment

The repository includes a GitHub Actions workflow that automatically deploys to Azure when changes are pushed to the main branch.

To set up automatic deployment:

1. Create an Azure Web App

2. Set up the following GitHub secrets:
   - `AZURE_WEBAPP_NAME`: Your Azure Web App name
   - `AZURE_WEBAPP_PUBLISH_PROFILE`: Your Azure publish profile
   - `API_KEY`: Your API key for production
   - `API_URL`: Your API URL for production
   - `FEATURE_FLAG_ENABLE_NEW_FEATURE`: Feature flag value for production

3. Push changes to the main branch to trigger deployment

## Troubleshooting

### Build Issues

If you encounter build issues:

1. Make sure you have the correct Node.js version
2. Try cleaning the npm cache: `npm cache clean --force`
3. Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
4. Verify all required environment variables are set

### Deployment Issues

If deployment to Azure fails:

1. Verify that your Azure Web App is correctly set up
2. Check that the GitHub secrets are correctly configured
3. Review the GitHub Actions logs for specific errors
4. Confirm that all required environment variables are set in GitHub secrets