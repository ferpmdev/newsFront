## CRUD de Noticias Periodísticas con React, Redux Toolkit y Custom Hooks

### Descripción

Este proyecto implementa un CRUD (Create, Read, Update, Delete) completo para gestionar noticias periodísticas, utilizando principalmente las siguientes tecnologías:

- **React.js:** Framework de JavaScript para crear interfaces de usuario.
- **Redux Toolkit:** Librería que simplifica la gestión del estado en aplicaciones React.
- **Custom Hooks:** Funciones personalizadas para reutilizar lógica y extraer estado de componentes.

La aplicación permite a los usuarios:

- **Crear** nuevas noticias con título, descripción, fecha y categoría.
- **Leer** todas las noticias almacenadas y filtrarlas por categoría.
- **Actualizar** los datos de una noticia existente.
- **Eliminar** noticias que ya no sean relevantes.

### Estructura del Proyecto

- **api:** Configuración de la API para la gestión de datos de noticias.
- **components:** Contiene los componentes funcionales de la aplicación (formularios, listas, etc.).
- **features:** Organiza la lógica de cada funcionalidad (en este caso, las noticias) en slices independientes.
- **hooks:** Custom hooks para encapsular lógica y estado, mejorando la organización y reutilización del código.
- **login:** Contiene las pantallas y componentes para el inicio de sesión y autenticación de usuarios.
- **Newspaper:** Pantallas principales de la aplicación, que incluyen la visualización y gestión de noticias.
- **router:** Configuración de rutas de la aplicación para una navegación estructurada y coherente.
- **store:** Configuración de la lógica de estado global usando Redux Toolkit, incluyendo los slices y configuraciones principales.

### Tecnologías Utilizadas y Razones

- **React.js:** Por su eficiencia en la creación de interfaces de usuario declarativas y su gran ecosistema.
- **Redux Toolkit:** Simplifica la configuración y el uso de Redux, proporcionando herramientas como createSlice y createAsyncThunk.
- **Custom Hooks:** Permiten encapsular lógica y estado, mejorando la reutilización y la organización del código.

### Instalación y Ejecución

1. Clona el repositorio: `git clone https://github.com/ferpmdev/newsFront.git`
2. Ejecuta `cd newsFront`
3. Verifica que te encuentras sobre la rama master.
4. Crea en la raíz del proyecto un archivo llamado `.env` con lo siguiente: `VITE_API_URL='https://backend-del-news-production.up.railway.app/api'`
5. Instala las dependencias: `npm install`
6. Inicia el servidor de desarrollo: `npm run dev`
7. Deberas contar con usuario y contraseña para poder ingresar.