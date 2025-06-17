document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.toggle-checkbox');
  if (!toggle) return;

  // Al cargar la página, aplicar el modo guardado
  if (localStorage.getItem('modoOscuro') === 'true') {
    document.body.classList.add('modo-oscuro');
    toggle.checked = true;

    document.querySelectorAll('.fondo-verde').forEach(function (el) {
      el.classList.add('modo-oscuro');
    });
    document.querySelectorAll('.card-actividad').forEach(function (el) {
      el.classList.add('modo-oscuro');
    });
    document.querySelectorAll('.footer').forEach(function (el) {
      el.classList.add('modo-oscuro');
    });
  }

  // Al cambiar el checkbox, actualizar modo y guardar estado
  toggle.addEventListener('change', function () {
    const activado = this.checked;

    document.body.classList.toggle('modo-oscuro', activado);
    document.querySelectorAll('.fondo-verde').forEach(function (el) {
      el.classList.toggle('modo-oscuro', activado);
    });
    document.querySelectorAll('.card-actividad').forEach(function (el) {
      el.classList.toggle('modo-oscuro', activado);
    });
    document.querySelectorAll('.footer').forEach(function (el) {
      el.classList.toggle('modo-oscuro', activado);
    });

    localStorage.setItem('modoOscuro', activado);
  });
});