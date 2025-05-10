#!/bin/bash

set -e  # Stop on error

# 1. Build du front
echo "🔧 Build du frontend..."
cd frontend
npm install
npm run build
cd ..

# 2. Copier les fichiers buildés dans le dossier public du backend
echo "📦 Copie des fichiers dans le backend/public..."
rm -rf backend/public/*
cp -r frontend/build/* backend/public/
echo "VITE_BACKEND_URL=https://in211-auriane.vercel.app" > backend/public/.env.production

# 3. Déploiement sur Vercel
echo "🚀 Déploiement sur Vercel..."
vercel --prod
