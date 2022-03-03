import React, { useState, useEffect } from "react";
import { Preguntas } from "../Helpers/db";
import { Card, CardMedia, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  countContainer: {
    display: "block",
    marginLeft: "5px",
    marginTop: "5px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-around",
      display: "flex",
    },
  },
  buttonContainer: {
    display: "block",
    marginTop: "15px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginRight: "18px",
    },
  },
  preguntaContainer: {
    textAlign: "center",
    marginTop: "20px",
  },
  h2: {
    color: "white",
    marginBottom: "15px",
    fontFamily: "Nunito Sans, sans-serif",
  },
  h3: {
    color: "white",
    fontFamily: "Montserrat, sans-serif",
  },
  boton1: {
    margin: "10px",
    cursor: "pointer",
    width: "20%",
    height: "45px",
    backgroundColor: "black",
    color: "white",
    fontSize: "18px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },

    "&:hover": {
      color: "green",
    },
    borderRadius: "25px",
  },
  boton2: {
    margin: "10px",
    cursor: "pointer",
    width: "20%",
    height: "45px",
    backgroundColor: "black",
    color: "white",
    fontSize: "18px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    "&:hover": {
      color: "red",
    },
    borderRadius: "25px",
  },
  pregunta: {},
  imgContainer: {
    margin: "auto",
    display: "block",
    width: "310px",
    padding: "auto",
  },
  card: {
    borderRadius: "10px",
  },
  media: {
    width: "310px",
    height: "250px",
  },
}));

const Playing = () => {
  const classes = useStyle();

  const [time, setTime] = useState(20);
  const [aleatorio, setAleatorio] = useState(Math.round(Math.random() * 30));
  const [vidas, setVidas] = useState(3);
  const [puntuacion, setPuntuacion] = useState(0);
  const [gameOver, setGameOver] = useState(null);

  useEffect(() => {
    let cuentaAtras = setInterval(() => {
      time > 0
        ? setTime(time - 1)
        : setGameOver((window.location.href = "/gameover"));
    }, 1000);

    return () => clearInterval(cuentaAtras);
  }, [time, puntuacion]);
  console.log(gameOver);

  const bien = () => {
    speechSynthesis.speak(
      new SpeechSynthesisUtterance("¡¡¡RESPUESTA CORRECTA!!!")
    );
    setAleatorio(Math.round(Math.random() * 30));
    setPuntuacion(puntuacion + 1);
    setTime(20);
  };

  const mal = () => {
    speechSynthesis.speak(
      new SpeechSynthesisUtterance("¡¡¡RESPUESTA INCORRECTA!!!")
    );
    setAleatorio(Math.round(Math.random() * 30));
    setVidas(
      vidas > 0 ? vidas - 1 : setGameOver((window.location.href = "/gameover"))
    );
    setTime(20);
  };

  return (
    <>
      {Preguntas.map((preguntando) =>
        preguntando.id === aleatorio ? (
          <>
            <div className={classes.countContainer}>
              <h2 className={classes.h2}>Time: {time}</h2>
              <h2 className={classes.h2}>Points: {puntuacion}</h2>
              <h2 className={classes.h2}>Life: {vidas}</h2>
            </div>

            <div className={classes.imgContainer}>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  height="140"
                  image={preguntando.fotografia}
                  alt="img"
                  className={classes.media}
                />
              </Card>
            </div>

            <div className={classes.preguntaContainer}>
              <h3 className={classes.h3}>{preguntando.pregunta}</h3>
            </div>

            <div className={classes.buttonContainer}>
              <button
                className={classes.boton1}
                onClick={() =>
                  preguntando.respuesta1 === preguntando.solucion
                    ? bien()
                    : mal()
                }
              >
                {[preguntando.respuesta1]}
              </button>
              <button
                className={classes.boton2}
                onClick={() =>
                  preguntando.respuesta2 === preguntando.solucion
                    ? bien()
                    : mal()
                }
              >
                {[preguntando.respuesta2]}
              </button>
            </div>
          </>
        ) : null
      )}
    </>
  );
};

export default Playing;
