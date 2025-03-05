Clonar el repositorio git clone (https://github.com/orenarounicesar/devops202501-react.git) 
cd carpeta del proyecto que se clono

Construir la imagen Docker docker build -t mi-proyecto .

Ejecutar el contenedor docker run -d -p 8080:80 --name contenedor-vite mi-proyecto

Acceder a la Aplicación http://localhost:8080