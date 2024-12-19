# API REST para la Prueba Tecnica
Este proyecto es una API REST desarrollada en Node.js para consultar Rick & Morty API para la entrevista tecnica -Prueba tecnica de AURONIX. La API consultar los personajes que se encuentran vivos junto con datos filtrados: "id, nombre, estado y genero". 🎉

## ✨ Autores

- César González López ([DracoGilga](https://github.com/DracoGilga))

## 👩‍💻👨‍💻 Contribuidores

<a href="https://github.com/DracoGilga/PruebaTecnicaAuronix/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=DracoGilga/PruebaTecnicaAuronix" />
</a>

## 🛠️ Requisitos

- **Node.js** versión 22 o superior.

## 🚀 Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/DracoGilga/PruebaTecnicaAuronix
   ```

2. Entra en el directorio del proyecto:

   ```bash
   cd PruebaTecnicaAuronix
   ```

3. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

## ⚠️ Variables de Entorno

**Es importante configurar las variables de entorno para que la API funcione correctamente.**

1. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

   ```bash
   PORT = "ingrese aqui el puerto"
   CLIENT_HOST = 'https://rickandmortyapi.com/api/'
   ```

   - `CLIENT_HOST` Es el URL donde se encuentra la api de rickandmorty el cual va a ser consultado

## 🖥️ Uso

1. Inicia el servidor en modo producción:

   ```bash
   npm start
   ```
2. La API estará disponible en `http://localhost:{PORT}/character}`.

Por default el puerto es el 3000 a excepcion que se cambie el numero de puerto en las variables de entorno.