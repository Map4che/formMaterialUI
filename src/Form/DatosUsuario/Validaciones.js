export const validarEmail = (email) => {
  const length = email.length;
  if (length >= 5 && length <= 50 && email.includes("@")) {
    return true;
  } else {
    return false;
  }
};

export const validarPassword = (password) => {
  const length = password.length;
  if (length >= 5 && length <= 20) {
    return true;
  } else {
    return false;
  }
};
