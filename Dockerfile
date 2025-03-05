# Usa la imagen oficial de Node.js para construir el proyecto
FROM node:18-alpine AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias y los instala
COPY package.json package-lock.json ./

# Instala dependencias del proyecto, incluyendo axios y zustand
RUN npm install axios zustand && npm install

# Instala las dependencias de desarrollo necesarias para TypeScript
RUN npm install -D @types/react @types/react-dom

# Copia el resto del código fuente y construye la aplicación
COPY . .
RUN npm run build

# Usa Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos construidos al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto 80 para acceder a la aplicación
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]
