# Utilisation d'une image de base Alpine avec Node.js pour une image plus légère
FROM node:lts-alpine AS dev

# Répertoire de travail dans le conteneur
WORKDIR /app

# Copier uniquement les fichiers package.json et package-lock.json au début
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port utilisé par Vite
EXPOSE 5173

# Démarrer l'application
CMD ["npm", "run", "dev"]