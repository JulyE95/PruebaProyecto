function validarRegistro() {
    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;
    const codigo = document.getElementById('codigo').value;
    const precio = document.getElementById('precio').value;
    
    if (nombre === '' || categoria === '' || codigo === '' || precio === '') {
      alert('Por favor, completa todos los campos.');
      return false;
    }
  
    const codigoValido = /[A-Za-z0-9]{8,}/.test(codigo);
    if (!codigoValido) {
      alert('El código del producto debe tener al menos 8 caracteres alfanuméricos.');
      window.location.href = 'indicaciones.html'; // Redirigir a la página de indicaciones
      return false;
    }
  
    // Aquí podrías agregar más validaciones según tus necesidades
  
    // Si pasa la validación, regresar true para enviar el formulario
    return true;
  }
  