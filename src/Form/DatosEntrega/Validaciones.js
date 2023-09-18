export const validarDireccion = (direccion) => {
  const length = direccion.length;
  return length >= 5 && length <= 40 ? true : false;
};

export const validarCiudad = (ciudad) => {
  const length = ciudad.length;
  return length >= 2 && length <= 20 ? true : false;
};

export const validarEstado = (estado) => {
  const length = estado.length;
  return length >= 2 && length <= 15 ? true : false;
};
