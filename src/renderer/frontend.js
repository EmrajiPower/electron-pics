function mostrarTablaProducto() {
  document.getElementById('tabla1').style.display = 'block'
  document.getElementById('tabla2').style.display = 'none'
  document.getElementById('tabla3').style.display = 'none'
}

function mostrarTablasCliente() {
  document.getElementById('tabla1').style.display = 'none'
  document.getElementById('tabla2').style.display = 'block'
  document.getElementById('tabla3').style.display = 'none'
}

function mostrarTablasProveedor() {
  document.getElementById('tabla1').style.display = 'none'
  document.getElementById('tabla2').style.display = 'none'
  document.getElementById('tabla3').style.display = 'block'
}
