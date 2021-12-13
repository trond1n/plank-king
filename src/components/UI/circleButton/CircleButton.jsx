import React from "react";
import classes from "./CircleButton.module.css";

export const CircleButton = (props) => {
  console.log(props.handle);
  return (
    <button onClick={props.handle} className={classes.CircleButton}>
      {props.buttonName}
    </button>
  );
};
