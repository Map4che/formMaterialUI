import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import { validarEmail, validarPassword } from "./DatosUsuario/Validaciones";
import Step from "./Step";
import {
  validarNombre,
  validarApellidos,
  validarTelefono,
} from "./DatosPersonales/Validaciones";
import {
  validarEstado,
  validarCiudad,
  validarDireccion,
} from "./DatosEntrega/Validaciones";

const Form = () => {
  const [step, setStep] = useState(0);
  const [pasos, setPasos] = useState({});

  useEffect(() => {
    setPasos(stepFlow);
  }, []);

  /****Llamar un api!!!!!!!!!! 
  useEffect(async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await data.json();
      console.log(posts);
    } catch (error) {
      console.log(error);
    }
  });
  */

  const updateStep = (step) => {
    setStep(step);
  };

  const steps = {
    0: <DatosUsuario updateStep={updateStep} />,
    1: <DatosPersonales updateStep={updateStep} />,
    2: <DatosEntrega updateStep={updateStep} />,
    3: <Complete />,
  };

  /*

  *
  **** Otra forma de hacerlo podria ser: 
  
  const selectStep = () => {
    switch (step) {
      case 0:
        return <DatosUsuario />;
        break;
      case 1:
        return <DatosPersonales />;
        break;
      case 2:
        return <DatosEntrega />;
        break;
      default:
        return <Complete />;
    }
    };*/

  const onSubmit = (e, step, pasos) => {
    e.preventDefault();
    let newStep = step + 1;
    setStep(newStep);
    if (newStep === 3) {
      console.log("Enviar datos al Backend", pasos);
    }
  };

  const handleChange = (element, position, currentStep, validator, pasos) => {
    const value = element.target.value;
    const valid = validator(value);
    const cp = { ...pasos };
    cp[currentStep].inputs[position].value = value;
    cp[currentStep].inputs[position].valid = valid;

    setPasos(cp);
  };

  const stepFlow = {
    0: {
      inputs: [
        {
          label: "Correo electronico",
          type: "email",
          value: "",
          valir: null,
          onChange: handleChange,
          helperText: "Ingresar un correo valido",
          validator: validarEmail,
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valir: null,
          onChange: handleChange,
          helperText:
            "Digite una contraseña correcta. Minimo 5 caracteres y maximo 20",
          validator: validarPassword,
        },
      ],
      buttonText: "Siguiente",
      onSubmit,
    },
    1: {
      inputs: [
        {
          label: "Nombre",
          type: "text",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa al menos 2 caracteres y máximo 30 caracteres.",
          validator: validarNombre,
        },
        {
          label: "Apellidos",
          type: "text",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa al menos 2 caracteres y máximo 50 caracteres.",
          validator: validarApellidos,
        },
        {
          label: "Número telefonico",
          type: "number",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa al menos 8 digitos y máximo 14 digitos.",
          validator: validarTelefono,
        },
      ],
      buttonText: "Siguiente",
      onSubmit,
    },
    2: {
      inputs: [
        {
          label: "Direccion",
          type: "text",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa al menos 4 caracteres.",
          validator: validarDireccion,
        },
        {
          label: "Ciudad",
          type: "text",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa al menos 4 caracteres.",
          validator: validarCiudad,
        },
        {
          label: "Estado/Provincia",
          type: "text",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa al menos 4 caracteres.",
          validator: validarEstado,
        },
      ],
      buttonText: "Crear cuenta",
      onSubmit,
    },
  };

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step} />}
        {/*Primera forma*/}
        {steps[step]}

        {/*<DatosUsuario />
        <DatosPersonales />
        <DatosEntrega /> Segunda forma*/}
        {/*<Step data={pasos[step]} step={step} pasos={pasos} />*/}
      </FormSpace>
    </Box>
  );
};

export default Form;
