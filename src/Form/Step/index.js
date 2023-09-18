import { TextField, Button, Box } from "@mui/material";
import { useState, useContext } from "react";
import { CounterContext } from "../../Context";
import useAuth from "../../Hooks/useAuth";

const Step = ({ data, step, pasos }) => {
  const { inputs, buttonText, onSubmit } = data;

  const counterData = useContext(CounterContext);

  const access = useAuth(counterData.user.jwt);
  console.log(access);

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
      onSubmit={(e) => onSubmit(e, step, pasos)}
    >
      <strong>El valor del contador es : {counterData.count}</strong>
      {inputs.map((input, i) => {
        const {
          label,
          type,
          value,
          valid,
          onChange,
          helperText,
          validator,
          pasos,
        } = input;
        return (
          <TextField
            key={i}
            label={label}
            variant="outlined"
            fullWidth
            margin="dense"
            type={type}
            error={valid === false}
            helperText={valid === false && { helperText }}
            value={value}
            onChange={(e) => onChange(e, i, step, validator)}
          />
        );
      })}

      <Button variant="contained" type="submit">
        {buttonText}
      </Button>
    </Box>
  );
};

export default Step;

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
