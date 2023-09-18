import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { validarEmail, validarPassword } from "./Validaciones";

const DatosUsuario = ({ updateStep }) => {
  const [email, setEmail] = useState({ value: "", valid: null });
  const [password, setPassword] = useState({ value: "", valid: null });

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
        if (email.valid && password.valid) {
          updateStep(1);
        } else {
          console.log("Te quedas");
        }
      }}
    >
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={email.valid === false}
        helperText={
          email.valid === false && "Ingresa un correo electrónico válido"
        }
        value={email.value}
        onChange={(e) => {
          const email = e.target.value;
          const valido = validarEmail(email);
          setEmail({ value: email, valid: valido });
        }}
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        error={password.valid === false}
        helperText={
          password.valid === false &&
          "Digite una contraseña correcta. Minimo 5 caracteres y maximo 20"
        }
        value={password.value}
        onChange={(e) => {
          const password = e.target.value;
          setPassword({ value: password, valid: validarPassword(password) });
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosUsuario;

/*
*
*
* Forma de hacerlo utilizando class components
class DatosUsuario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        value: "",
        valid: true,
      },
      password: {
        value: "",
        valid: true,
      },
    };
  }
  render() {
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
          console.log(this.state);
        }}
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          error={false}
          helperText={false && "Ingresa un correo electrónico válido"}
          value={this.state.email.value}
          onChange={(e) => {
            this.setState({ email: { value: e.target.value } });
          }}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
          value={this.state.password.value}
          onChange={(e) => {
            this.setState({ password: { value: e.target.value } });
          }}
        />
        <Button variant="contained" type="submit">
          Siguiente
        </Button>
      </Box>
    );
  }
}

export default DatosUsuario;

*/
