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

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

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
│   └── Footer.vue    # Page footer
├── views/            # Page components
│   ├── Home.vue      # Landing page
│   └── About.vue     # About page
├── router/           # Vue Router configuration
├── App.vue           # Root component
└── main.ts           # Entry point
```

## Building for Production

To create a production build:

```bash
npm run build
```

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

3. Push changes to the main branch to trigger deployment

## Troubleshooting

### Build Issues

If you encounter build issues:

1. Make sure you have the correct Node.js version
2. Try cleaning the npm cache: `npm cache clean --force`
3. Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Deployment Issues

If deployment to Azure fails:

1. Verify that your Azure Web App is correctly set up
2. Check that the GitHub secrets are correctly configured
3. Review the GitHub Actions logs for specific errors