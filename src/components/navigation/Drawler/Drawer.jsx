// @flow
import * as React from "react";
import { NavLink } from "react-router-dom";
import { Backdrop } from "../../Backdrop/Backdrop";
import classes from "./Drawer.module.css";

export const Drawer = (props) => {
  const links = [
    { to: "/timer", label: "Таймер", exact: true },
    { to: "/info", label: "О планке", exact: false },
    { to: "/results", label: "Результаты", exact: false },
  ];

  const cls = [classes.Drawer];
  if (!props.isOpen) {
    cls.push(classes.close);
  }

  return (
    <div>
      <nav className={cls.join(" ")}>
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={link.to}
                  exaxt={link.exact}
                  onClick={props.onClose}
                  style={({ isActive }) => ({
                    opacity: isActive ? ".7" : null,
                  })}
                >
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      {props.isOpen ? <Backdrop onClick={props.onClose} /> : null}
    </div>
  );
};
