import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/KING.png";
import menu from "../../assets/menu.png";

export const Header = (props) => {
  return (
    <div className={classes.Header}>
      <img src={logo} alt="logo" />
      <img src={menu} alt="menu" />
    </div>
  );
};
