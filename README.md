# electron-pics
Es un Gestor de Imágenes con electron js.


# Inicializar código

Implementamos el *“use strict”* de Js e instanciamos el objeto app, el cual contiene el ciclo de vida del proyecto y nos permite controlar y responder a todos los eventos de la aplicación, como las acciones de cerrar, obtener foco, ocultar, etc.
Vamos a **package.json** y actualizamos *“nombreApp”:”electron x”*, y donde está la x agregamos el archivo principal (index.js).

# Crear ventana

Para abrir electron en una ventana, debo crear una variable que requiera al objeto **app** y **BrowserWindow**.

# Eventos

A la hora de ejecutarlos: on, lo hacemos múltiples veces, once una sola vez.
Los eventos pueden escucharse a través de la implementación de app y su clase on: *app.on()*.
Podemos cargar páginas externas con *nombre_de_la_variable_en_ la_que_se_guarda_BrowserWindow.loadURL(‘’)*. Hay que tener en cuenta que para traer una dirección de mi directorio debo usar *file://__dirname/index.html*. Pero para hacer una buena validación para cuando, por ejemplo, por la red la página va a cargar lento usamos **ready-to-show**, el cual crea una ventana invisible que carga el contenido antes de mostrar la aplicación, también tenemos que tener en **BrowserWindows** la propiedad **show:false**.
show() muestra la ventana actual.

# Cerrar ventana

Para cerrar el proceso, usamos **app.quit()**, adicionalmente hacemos **null** el valor de **BrowserWindow()** para que no quede en memoria el objeto.

# Configurar Desarrollo Front-end

Inicialmente tenemos un **electron plano**, pero debemos reemplazarlos un **electron compilado** (Para que nuestro proyecto no se confunda). Para que el proyecto pueda soportar diferentes tecnologías que no están soportadas nativamente en HTML y que el código se pueda compilar se usa un proyecto de Electron en **Git hub** llamado **electron-compile**. Esta configuración trae nuevas características como Sintaxis ES6, Transpilar con Babel, Import en lugar de required, etc.


Para ello debemos seguir los siguientes pasos:
*$ npm install electron-prebuilt-compile --save-dev*, dónde *--save-dev* significa que lo guardamos como una dependencia de desarrollo.
También necesitamos electron-compile sin compilar:
*$ npm install --save electron-compile*. Para este caso instalamos una dependencia de ejecución.
Debemos poner cómo dependencia estándar electron-compile, pero debemos quitar la dependencia de electron que está instalada.
*$ npm r electron --save && npm install --save electron-compile*.
Ahora toca eliminar electron plano, ya que el compilado es un reemplazo, así no se confunde el proyecto:
*$ npm remove electron --save*
El archivo de package.json se actualiza con ambos, y debemos actualizar la ruta del Script que ejecuta electron, para que ejecute cosas de dependencias de ejecución. Cambian cosas como: import {app,BrowserWindow} from “electron”.

En caso de añadir una herramienta de desarrollo, como por ejemplo, que me permita una carga automática de nuestra aplicación, haríamos algo así:

Actualizamos el **package.json**, con una herramienta que se llama **cross-env** (Sólo windows), que permite que las variables de entorno que coloquemos en este Json sean iguales para **windows**, **linux** y **Mac**.
*$ npm install cross-env --save*

Un archivo devtools.js:

*import  { enableLiveReload } from “electron-compile”*
En este caso ya no tendríamos una dependencia de desarrollo sino de ejecución.

*module.exports = function devtools () {
    enableLiveReload()
}*
Creamos el objeto de la herramienta live reload.

Actualizando el Index.js:

*import { devtools } from “./devtools”*
traemos la dependencia de ejecución.

*if (process.env.NODE_ENV == ‘development’){
    devtools()
}*
detectamos el proceso y lo que tiene NODE_ENV es una variable de entorno.

Preparamos Archivo Json con las 2 variables de entorno:
*“nombreApp” : ”cross-env NODE_ENV=development electron src/index.js”;*
