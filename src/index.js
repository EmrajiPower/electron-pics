'use strict'
// Instanciando los objetos app y BrowserWindows
import {app,BrowserWindow} from 'electron'
import devtools from './devtools'

if(process.env.NODE_ENV == 'development'){
  devtools();
}

console.log(app);

// Ejecutando ordenes cuando la aplicación esté lista
app.on('ready',() => {
  // creando ventana
  let win = new BrowserWindow({
    width: 1000,
    heigh: 1000,
    title: 'Primera App 😎',
    show: false
  })

  win.once('ready-to-show',() => {
    win.show() //Muestra la ventana actual
  })

  win.loadURL(`file://${__dirname}/renderer/index.html`)

  // Detectando el cierre de la ventana para cerra la aplicación
  win.on('closed',() => {
    win = null
    app.quit()
  })
})

app.on('before-quit',() => {
  console.log('Saliendo')
})
