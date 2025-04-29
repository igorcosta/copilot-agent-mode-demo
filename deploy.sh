#!/bin/bash

# ----------------------
# Azure Deployment Script
# ----------------------

# Install dependencies
echo "Installing dependencies..."
npm install

# Check for environment variables and use defaults if not set
if [ -z "$VITE_API_KEY" ]; then
  echo "Warning: VITE_API_KEY environment variable not set. Using placeholder value."
  export VITE_API_KEY="placeholder_api_key"
fi

if [ -z "$VITE_API_URL" ]; then
  echo "Warning: VITE_API_URL environment variable not set. Using placeholder value."
  export VITE_API_URL="https://placeholder-api.example.com"
fi

if [ -z "$VITE_FEATURE_FLAG_ENABLE_NEW_FEATURE" ]; then
  echo "Warning: VITE_FEATURE_FLAG_ENABLE_NEW_FEATURE environment variable not set. Setting to false."
  export VITE_FEATURE_FLAG_ENABLE_NEW_FEATURE="false"
fi

# Build the app
echo "Building application..."
npm run build

# Copy web.config to the dist folder
echo "Copying web.config to dist folder..."
cp web.config dist/

echo "Deployment completed successfully!"