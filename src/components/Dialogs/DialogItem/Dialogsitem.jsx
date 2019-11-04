import React from "react";
import classes from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogitem = props => {
  let path = "/dialog/1" + props.id;
  return (
    <div className={classes.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};



export default Dialogitem;
