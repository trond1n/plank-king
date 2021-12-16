import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/KING.png";
// import menu from "../../assets/menu.png";
import { MenuToggle } from "../navigation/MenuToggle/MenuToggle";
import { useState } from "react/cjs/react.development";
import { Drawer } from "../navigation/Drawler/Drawer";
import { NavLink } from "react-router-dom";

export const Header = (props) => {
  const [menuStatus, setMenuStatus] = useState(false);
  const toggleMenuHandler = () => {
    setMenuStatus(!menuStatus);
  };
  return (
    <div className={classes.Header}>
      <NavLink to='/'>
        <img src={logo} alt="logo" />
      </NavLink>
      <Drawer isOpen={menuStatus} onClose={toggleMenuHandler} />

      <MenuToggle onToggle={toggleMenuHandler} isOpen={menuStatus} />
    </div>
  );
};
