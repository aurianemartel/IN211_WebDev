#!/bin/bash

set -e  # Stop on error

if ! command -v vercel &> /dev/null; then
  echo "❌ Vercel CLI non installé. Utilisez 'npm install -g vercel'"
  exit 1
fi

# 1. Build du front
echo "🔧 Build du frontend..."
cd frontend
npm install
echo "VITE_BACKEND_URL=https://in211-auriane.vercel.app/api" > .env.production
npm run build
cd ..

# 2. Copier les fichiers buildés dans le dossier public du backend
echo "📦 Copie des fichiers dans le backend/public..."
rm -rf backend/public/*
cp -r frontend/build/* backend/public/
rm -rf frontend/build

# 3. Déploiement sur Vercel
echo "🚀 Déploiement sur Vercel..."
vercel deploy --prod
