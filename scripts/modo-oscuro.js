// Al cargar la página, aplicar el modo guardado
if (localStorage.getItem('modoOscuro') === 'true') {
  document.body.classList.add('modo-oscuro');
  document.querySelector('.toggle-checkbox').checked = true;

  document.querySelectorAll('.fondo-verde').forEach(function (el) {
    el.classList.add('modo-oscuro');
  });
}

// Al cambiar el checkbox, actualizar modo y guardar estado
document.querySelector('.toggle-checkbox').addEventListener('change', function () {
  const activado = this.checked;

  // Aplicar clases
  document.body.classList.toggle('modo-oscuro', activado);
  document.querySelectorAll('.fondo-verde').forEach(function (el) {
    el.classList.toggle('modo-oscuro', activado);
  });

  // Guardar en localStorage
  localStorage.setItem('modoOscuro', activado);
});
