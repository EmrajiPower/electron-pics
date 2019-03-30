function mostrarTablaProducto() {
  document.getElementById('tabla1').style.display = 'block'
  document.getElementById('tabla2').style.display = 'none'
  selectorEnVivo('btn1','click', function(evento) {
    buscarNombre_tabla1()
  });
}

function mostrarTablasCliente() {
  document.getElementById('tabla1').style.display = 'none'
  document.getElementById('tabla2').style.display = 'block'
  selectorEnVivo('btn1','click', function(evento) {
    buscarNombre_tabla2()
  });
}

function selectorEnVivo(selector, tipoDeEvento, callback, contexto) {
  (contexto || document).addEventListener(tipoDeEvento, function(evento) {
    var encontrado; // Este va a ser el elemto encontrado
    var elemento = event.target;
    // Atravieso el arbol del DOM antes de encontrar === selector
    while (elemento && !(encontrado = elemento.id === selector)) {
      elemento = elemento.parentElement;
    }
    // Si es verdad que encontrado es un selector, aplico el callback
    if (encontrado) {
      callback.call(elemento, event);
    }
  }, false);
}

function buscarNombre_tabla1() {
  var $rows = $('#tabla1 tr');
  $('#buscar').keyup(function() {
    var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',reg = RegExp(val, 'i'),text;
    $rows.show().filter(function() {
      text = $(this).text().replace(/\s+/g, ' ');
      return !reg.test(text);
    }).hide();
  });
}

function buscarNombre_tabla2() {
  var $rows = $('#tabla2 tr');
  $('#buscar').keyup(function() {
    var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
    reg = RegExp(val, 'i'),
    text;
    $rows.show().filter(function() {
      text = $(this).text().replace(/\s+/g, ' ');
      return !reg.test(text);
    }).hide();
  });
}
