import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import {
  validarNombre,
  validarApellidos,
  validarTelefono,
} from "./Validaciones";

const DatosPersonales = ({ updateStep }) => {
  const [name, setName] = useState({
    value: "",
    valid: null,
  });

  const [lastname, setLastname] = useState({
    value: "",
    valid: null,
  });

  const [phone, setPhone] = useState({
    value: "",
    valid: null,
  });

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (name.valid && lastname.valid && phone.valid) {
          updateStep(2);
        } else {
          console.log("Datos incorrectos");
        }
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={name.value}
        onChange={(e) => {
          const nombre = e.target.value;
          const valido = validarNombre(nombre);
          setName({ value: nombre, valid: valido });
        }}
        error={name.valid === false}
        helperText={
          name.valid === false &&
          "El nombre debe contener al menos 2 caracteres y maximo 30"
        }
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={lastname.value}
        onChange={(e) => {
          const apellido = e.target.value;
          const valido = validarApellidos(apellido);
          setLastname({ value: apellido, valid: valido });
        }}
        error={lastname.valid === false}
        helperText={
          lastname.valid === false &&
          "Debe tener al menos 2 caracteres y maximo 40"
        }
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={phone.value}
        onChange={(e) => {
          const telefono = e.target.value;
          const valido = validarTelefono(telefono);
          setPhone({ value: telefono, valid: valido });
        }}
        error={phone.valid === false}
        helperText={
          phone.valid === false && "Debe ser un número de telefono valido"
        }
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
