import React from "react";
import { CircleButton } from "../UI/circleButton/CircleButton";
import classes from "./Main.module.css";

export const Main = (props) => {
  return (
    <div className={classes.Main}>
      <CircleButton buttonName="Поехали!" />
      <p>Хочешь узнать подробнее о планке?  <a href="/info">Почитай здесь</a></p>
    </div>
  );
};
