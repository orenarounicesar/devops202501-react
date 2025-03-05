1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>

2. Construir la imagen Docker
   docker build -t mi-proyecto .

3. Ejecutar el contenedor
   docker run -d -p 8080:80 --name contenedor-vite mi-proyecto

4. Acceder a la Aplicación
http://localhost:8080    
