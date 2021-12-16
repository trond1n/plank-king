import React from "react";
import { NavLink } from "react-router-dom";
import { CircleButton } from "../UI/circleButton/CircleButton";
import classes from "./Main.module.css";

export const Main = (props) => {
  return (
    <div className={classes.Main}>
      <NavLink to="/timer">
        <CircleButton buttonName="Go!" />
      </NavLink>
      <p>
        Хочешь узнать подробнее о планке?{" "}
        <NavLink to="/info">Почитай здесь</NavLink>
      </p>
    </div>
  );
};
