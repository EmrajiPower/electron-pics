function mostrarTablaProducto() {
  document.getElementById('tabla1').style.display = 'block'
  document.getElementById('tabla2').style.display = 'none'
  document.getElementById('tabla3').style.display = 'none'
  buscarNombre()
}

function mostrarTablasCliente() {
  document.getElementById('tabla1').style.display = 'none'
  document.getElementById('tabla2').style.display = 'block'
  document.getElementById('tabla3').style.display = 'none'
  buscarNombre()
}

function mostrarTablasProveedor() {
  document.getElementById('tabla1').style.display = 'none'
  document.getElementById('tabla2').style.display = 'none'
  document.getElementById('tabla3').style.display = 'block'
  buscarNombre()
}

function buscarNombre() {
  var celdas = document.querySelectorAll("#tabla1 td")
  var buscar = document.getElementById("buscar")  

  buscar.addEventListener("keyup",function () {
    for (let i = 0; i < celdas.length; i++) {
      if (celdas[i].textContent.toLowerCase().indexOf(buscar.value.toLowerCase())===0) {
        celdas.forEach(function (nodo) {
          nodo.style.display = "none"
        })
        celdas[i].style.background = "#eee"
        celdas[i].style.display = "table-cell"
        break;
      }else{
        celdas[i].style.background = "white"
        celdas.forEach(function(nodo) {
          if (celdas[i]!==nodo) {
            nodo.style.display = "table-cell"
          }
        })
      }
    }
  })
}
