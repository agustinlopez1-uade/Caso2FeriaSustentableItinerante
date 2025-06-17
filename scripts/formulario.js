// Escuchar el envío del formulario
document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();
 
  //Obtener los valores de los campos
  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const puesto = document.getElementById('puesto').value.trim();
 
  // Validar campos vacíos
  let mensaje = '';
  if (!nombre) mensaje += 'Nombre\n';
  if (!apellido) mensaje += 'Apellido\n';
  if (!puesto) mensaje += 'Puesto\n';
 
  // Mostrar alerta si falta completar algún campo
 
  if (mensaje) {
    Swal.fire({
      icon: 'warning',
      title: 'Campo(s) incompleto(s)',
      text: `Por favor, completá el/los siguiente(s) campo(s):\n${mensaje}`,
      confirmButtonColor: '#3085d6'
    });
    return;
  }
 
  //Mostrar mensaje de éxito
  Swal.fire({
    icon: 'success',
    title: '¡Gracias por tu contacto!',
    text: `¡Gracias por tu contacto ${nombre} ${apellido}. Tu mensaje ha sido enviado, en breve estaré respondiendo.`,
    confirmButtonColor: '#3085d6'
  });

  //Reiniciar formulario
  document.getElementById('formulario').reset();
});
 