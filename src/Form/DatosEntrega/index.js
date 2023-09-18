import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarDireccion, validarCiudad, validarEstado } from "./Validaciones";

const DatosEntrega = ({ updateStep }) => {
  const [address, setAddress] = useState({ value: "", valid: null });
  const [city, setCity] = useState({ value: "", valid: null });
  const [state, setState] = useState({ value: "", valid: null });

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
        if (address.valid && city.valid && state.valid) {
          updateStep(3);
        } else {
          console.log("Incorreto");
        }
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={address.value}
        onChange={(e) => {
          const direccion = e.target.value;
          const valido = validarDireccion(direccion);
          setAddress({ value: direccion, valid: valido });
        }}
        error={address.valid === false}
        helperText={
          address.valid === false &&
          "Debe tener minimo 2 caracteres y maximo 15"
        }
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={city.value}
        onChange={(e) => {
          const ciudad = e.target.value;
          const valido = validarCiudad(ciudad);
          setCity({ value: ciudad, valid: valido });
        }}
        error={city.valid === false}
        helperText={
          city.valid === false && "Debe tener minimo 2 caracteres y maximo 15"
        }
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={state.value}
        onChange={(e) => {
          const estado = e.target.value;
          const valido = validarEstado(estado);
          setState({ value: estado, valid: valido });
        }}
        error={state.valid === false}
        helperText={
          state.valid === false &&
          "Debe tener al menos 2 caracteres y maximo 15"
        }
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
