#!/bin/bash

# ----------------------
# Azure Deployment Script
# ----------------------

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the app
echo "Building application..."
npm run build

# Copy web.config to the dist folder
echo "Copying web.config to dist folder..."
cp web.config dist/

echo "Deployment completed successfully!"