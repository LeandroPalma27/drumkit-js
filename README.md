# Webpack shell repository

Este repositorio sirve para poder manejar y gestionar de manera algo mas rapida la configuracion de un proyecto webpack basado en HTML-CSS-JS exclusivamente.

Pueden incluirse algunas librerias extras con npm, pero la base principalmente es solo para proyectos con tecnologias vanilla.

## Cosas que se pueden manejar con este shell:

- Archivos HTML ( index principal y los demas en la carpeta resources )
- Archivos CSS ( styles principal y algun otro css en la carpeta de css )
- Endpoint JS y archivos JS
- JS moderno
- Importaciones
- Recursos estaticos( imagenes, fuentes, txt, etc )
- Babel para hacer compatibles nuestras aplicaciones con ECS6 en navegadores antiguos ( incluye el archivo de configuracion ).
- Dos archivos de configuracion webpack ( para desarrollo y produccion ).


## Paquetes npm que suelo instalar como base para mis proyectos:

```json
"devDependencies": {
    "@babel/core": "^7.16.5",
    "@babel/preset-env": "^7.16.5",
    "babel-loader": "^8.2.3",
    "copy-webpack-plugin": "^10.2.0",
    "css-loader": "^6.5.1",
    "css-minimizer-webpack-plugin": "^3.3.1",
    "file-loader": "^6.2.0",
    "html-loader": "^3.0.1",
    "html-webpack-plugin": "^5.5.0",
    "mini-css-extract-plugin": "^2.4.5",
    "raw-loader": "^4.0.2",
    "style-loader": "^3.3.1",
    "terser-webpack-plugin": "^5.3.0",
    "webpack": "^5.65.0",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.7.1"
  }
```

### **O si no**:

Usar **"npm install"** en caso de querer instalar todos los paquetes sin quitar alguno.

## Ventajas de usar ese shell de configuracion

Con este shell podras no solo manejar webpack y todas las ventajas de javascript moderno, sino que tambien podras crear un build de produccion eficiente y minificado, para poder evitar problemas de lentitud. POdras evitar que las personas manipulen la aplicacion desde la consola usando javascript, ya que el patron modulo se implementa como base en el build de produccion y tambien en el de desarollo.

Hablando tecnicamente, podras manejar archivos css y javascript personalizados y de manera unica por cada template creado. Solamente deberas llamar a tu archivo js base del template en especifico con el mismo nombre que el template, y para poder cargar tu css especifico para ese HTML, deberas incluir su importacion en el js base el mismo. 

Algo asi:

```js
import '/css/index.css';
```

## ¿Como cargar los assets?

Tan solo hace falta incluir algun recurso dentro de la carpeta especifica.

## IMPORTANTE

Al momento de clonar este shell, revisar los archivos de configuracion antes de empezar a desarrollar, ya que la configuracion para generar los otros templates del proyecto (excluyendo el index y el template2 que es de ejemplo) estan desactivados.

En caso de querer incluir otros templates solo debes incluir el nombre como un string dentro del siguiente arreglo en el archivo webpack.config.js:

```js
let otherHtmlPageNames = ['template2']; // Linea 6.
```