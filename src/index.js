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
    width: 1800,
    heigh: 1400,
    // resizable: false,
    title: 'Inventario Dulcería Tica',
    show: false
  })

  win.once('ready-to-show',() => {
    win.show() //Muestra la ventana actual    
  })

  //Lo visual
  win.loadURL(`file://${__dirname}/renderer/index.html`)

  //Devtools
  win.toggleDevTools();

  // Detectando el cierre de la ventana para cerra la aplicación
  win.on('closed',() => {
    win = null
    app.quit()
  })
})

app.on('before-quit',() => {
  console.log('Saliendo')
})
