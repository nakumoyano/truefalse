import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { KeyboardBackspace } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    marginTop: "20px",
    fontFamily: "Caveat, cursive",
  },
  true: {
    fontFamily: "Caveat, cursive",
    margin: "8px",
  },
  containerDescription: {
    justifyContent: "center",
    textAlign: "center",
    margin: "auto",
    padding: "auto",
    display: "flex",
  },
  descripcion: {
    color: "white",
    fontFamily: "Nunito Sans, sans-serif;",
    fontSize: "20px",
    width: "50%",
    marginTop: "15px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "15px",
    },
  },
  titulo: {
    margin: "15px",
    // fontFamily: "Anton, sans-serif",
    fontFamily: "Courgette, cursive",
    // fontFamily: "Shadows Into Light, cursive",
  },
  text: {
    fontSize: "22px",
    marginTop: "15px",
    fontFamily: "Roboto, sans-serif",
    width: "80%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  nota: {
    marginTop: "50px",
    fontSize: "18px",
    color: "red",
    fontFamily: "Roboto, sans-serif",
  },
  containerLink: {
    marginTop: "40px",
  },
  icon: {
    fontSize: "20px",
    marginRight: "5px",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  },
  a: {
    // boxShadow: "20px 20px 50px red",
    color: "black",
    textDecoration: "none",
    fontSize: "25px",
    fontFamily: "Caveat, cursive",
    "&:hover": { color: "white" },
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
      marginBottom: "10px",
    },
  },
}));

const Intrucciones = () => {
  const classes = useStyle();

  return (
    <div className={classes.instrucciones}>
      <Typography variant="h2" className={classes.title}>
        TRUE OR FALSE
      </Typography>
      <Container className={classes.containerDescription}>
        <Box className={classes.descripcion}>
          <b className={classes.true}>"TRUE OR FALSE" </b> es un juego sencillo
          y dinámico pensado con el fin de llevarte entretenimiento y a la vez
          brindarte conocimiento sobre algunos datos de cultura general.
        </Box>
      </Container>
      <Typography variant="h4" color="primary">
        <Box className={classes.titulo}>MODO DE JUEGO</Box>
      </Typography>
      <Container className={classes.containerText}>
        <Box className={classes.text}>
          1) El juego iniciará una vez que presiones el botón jugar, se
          presentaran una serie de preguntas a las cuales deberás responder con
          verdadero o falso según creas correcto.
        </Box>
        <Box className={classes.text}>
          2) Tenes 4 vidas y 20 segundos por pregunta , es decir, si respondes 4
          preguntas mal o te tardas más de 20 segundos por pregunta, el juego se
          acabará.
        </Box>
        <Box className={classes.text}>
          3) Si perdes, en la pantalla de Game Over tendrás la posibilidad de
          presionar el botón volver para reiniciar el juego.
        </Box>
        <Box className={classes.nota}>
          NOTA: Cabe aclarar que el juego cuenta con una cantidad de 50
          preguntas, por lo cual, es posible que te toque la misma pregunta más
          de una vez.
        </Box>
      </Container>
      <Container className={classes.containerLink}>
        <Link to="/" className={classes.a}>
          <KeyboardBackspace className={classes.icon} />
          VOLVER
        </Link>
      </Container>
    </div>
  );
};

export default Intrucciones;
