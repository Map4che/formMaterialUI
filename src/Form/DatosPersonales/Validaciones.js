export const validarNombre = (nombre) => {
  const length = nombre.length;
  return length >= 2 && length <= 30 ? true : false;
  /*
  if (length >= 2 && length <= 30) {
    return true;
  } else {
    return false;
  }
  */
};

export const validarApellidos = (apellidos) => {
  const length = apellidos.length;
  return length >= 2 && length <= 40 ? true : false;
  /*
  if (length >= 3 && length <= 30) {
    return true;
  } else {
    return false;
  }
  */
};

export const validarTelefono = (telefono) => {
  const length = telefono.length;
  return length >= 7 && length <= 15 ? true : false;
  /*
  if (length >= 3 && length <= 30) {
    return true;
  } else {
    return false;
  }
  */
};
