# ML Frontend

Test Práctico Frontend.

## Requerimientos

Para desarrollo, necesitarás las siguientes herramientas instaladas:

- [Node.js](https://nodejs.org/es/)

### Instalaciones recomendadas

- [Postman](https://www.postman.com/)

### Editor de texto

El editor usado para desarrollar éste proyecto es: [Visual Studio Code](https://code.visualstudio.com/).

### Plugins recomendados

- HTML CSS Support
- JS-CSS-HTML Formatter
- Prettier – Code Formatter
- JavaScript (ES6) code snippets
- EsLint

---

## Instalaciones

### Node

[Node](http://nodejs.org/) es realmente fácil de instalar e incluye [NPM](https://npmjs.org/).
Debes ser capaz de ejecutar el siguiente comando después de completada la instalación.

    $ node --version
    v12.16.1

    $ npm --version
    6.13.4

#### Instalación de Node en OS X

Necesitarás usar la terminal. En OS X, por defecto, puedes encontrar la terminal en:
`/Applications/Utilities/Terminal.app`.

Por favor instala [Homebrew](http://brew.sh/) si no se completa la instalación con el siguiente comando:

    ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

Si todo sale bien, deberías poder correr el siguiente comando:

    brew install node

#### Instalación de Node en Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Instalación de Node en Windows

Ingresa en [official Node.js website](http://nodejs.org/) & descarga el instalador.
También, debes asegurarte de tener `git` disponible en tu PATH, `npm` puede necesitarlo.

#### Actualiza las dependencias

Algunos paquetes pueden cambiar así que ejecuta `npm prune` & `npm install` de vez en cuando.

Una forma común de actualizar es haciendo:

    git pull
    npm prune
    npm install

Para ejecutar estos tres comandos al tiempo:

    npm run pull

---

## Instalación

Para instalar el proyecto, debes seguir los siguientes pasos:

    git clone https://github.com/Alula96/ML-frontend.git
    cd ML-frontend
    npm install

---

## Ejecuta el servidor

Para ejecutar el proyecto, debes escribir en consola:

    npm start

---

## Construye proyecto para producción

    npm run build

---

## Ejecución de pruebas

Para ejecutar las pruebas del proyecto, debes ejecutar en consola:

    jest

---

## Lenguajes y herramietnas

### JavaScript

- [ESLint](https://eslint.org/) para encontrar y corregir problemas en tu código de javascript.
- [React Hooks](https://es.reactjs.org/docs/hooks-intro.html) para manejar estados.
- [React](http://facebook.github.io/react) es usado para la UI.

### SCSS

- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) como modelo layout de preferencia.
- [BEM](http://getbem.com/introduction/) para nombrar las clases.
- [SASS](https://sass-lang.com/documentation) como preprocesador de css.

### Tools

- [Prettier](https://sass-lang.com/documentation) como code formatter.
- [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/) para construir los componentes.

**Note:** Siempre asegúrate de usar buenas prácticas.

---

## ¿Qué se encuentra dentro?

### Estructura de carpetas

Una mirada a los archivos y directorios de nivel superior que verá en este proyecto.

```
    .
    ├── node_modules/
    ├── src/
    |   ├── assets/
    |   ├── components/
    |   |   ├── atoms/
    |   |   ├── molecules/
    |   |   ├── organisms/
    |   |   └── templates/
    |   ├── pages/
    |   ├── services/
    |   ├── styles/
    |   ├── utils/
    |   ├── App.js
    |   ├── index.js
    |   └── serviceWorker.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md
```

1. **`/node_modules`**: Guarda los módulos de código de los que depende su proyecto (paquetes npm) que se instalan automáticamente.

2. **`/src`**: Este directorio contiene todo el código relacionado con lo que se podrá solicitar al back-end. `src` es una convención para "source code".

    1. **`/assets`**: Éste directorio contiene todos los recursos necesarios que serán usados en éste proyecto.

    2. **`/components`**: Éste directorio contiene todos los componentes necesarios, implementados de forma que se use el paradigma de atomic design.

    3. **`/pages`**: Páginas que serán renderizadas en el proyecto.

    4. **`/services`**: Guarda todos los servicios que se comunicarán con el api.

    5. **`/styles`**: Estilos SASS generales.

    6. **`/utils`**: Guarda funciones y clases que pueden ser usadas de forma transversal en el aplicativo.

    7. **`/App.js`**: Componente principal.

    8. **`/index.js`**: Punto de entrada JavaScript; Importa nuestro componente App.js y le dice a React dónde renderizarlo.

    9. **`/serviceWorker.js`**: Script que el navegador ejecuta en segundo plano, separado de una página web, lo que abre la puerta a funciones que no necesitan una página web o la interacción del usuario.

3. **`.gitignore`**: Este archivo le dice a git para qué archivos no debe rastrear / no mantener un historial de versiones.

4. **`package-lock.json`** (Ver `package.json` a continuación, primero). Este es un archivo generado automáticamente basado en las versiones exactas de sus dependencias npm que se instalaron para su proyecto. **(No cambiará este archivo directamente).**

5. **`package.json`**: Un archivo de manifiesto para proyectos de Node.js, que incluye cosas como metadatos (el nombre del proyecto, el autor, etc.). Este manifiesto es cómo npm sabe qué paquetes instalar para su proyecto.

6. **`README.md`**: Archivo de texto que contene información de referencia útil sobre el proyecto.

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
