import React from "react";
import { Link } from "react-router-dom";
import music from "../assets/gameover.mp3";
import { makeStyles } from "@material-ui/core";
import gameover from "../assets/gameover.png";
import { KeyboardBackspace } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "block",
  },
  titulo: {
    textAlign: "center",
  },
  containerImg: {
    display: "flex",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
  },
  img: {
    backgroundImage: `url(${gameover})`,
    backgroundSize: "cover",
    width: "300px",
    height: "300px",
    marginTop: "130px",
    animation: `$giro 900ms linear infinite`,
  },
  a: {
    // boxShadow: "20px 20px 50px red",
    color: "black",
    textDecoration: "none",
    fontSize: "40px",
    fontFamily: "Caveat, cursive",
    "&:hover": { color: "white" },
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  },
  icon: {
    fontSize: "25px",
  },
  "@keyframes giro": {
    "0%": {
      transform: "translate(0px)",
    },
    "100%": {
      transform: " translateY(50px)",
    },
  },
}));

const GameOver = () => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.container}>
        {/* <h1 className={classes.titulo}>¡¡¡GAME OVER!!!</h1> */}
        <div className={classes.containerImg}>
          <div className={classes.img}></div>
        </div>
        {/* <h2>puntos: {this.props.puntuacion}</h2> */}
        <div className={classes.buttonContainer}>
          <Link to="/" className={classes.a}>
            <KeyboardBackspace className={classes.icon} />
            VOLVER
          </Link>
        </div>
      </div>
      <audio src={music} autoPlay></audio>
    </>
  );
};

export default GameOver;
