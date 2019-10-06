import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogitem = props => {
  let path = "/dialog/1" + props.id;
  return (
    <div className={classes.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Messages = (props)=>{
    return(
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>
        <Dialogitem name="Maks gladkii" id="1" />
        <Dialogitem name="Andrey rogov" id="2" />
        <Dialogitem name="Mars Zagitov" id="3" />
        <Dialogitem name="Ruslan Zagitov" id="4" />
      </div>
      <div className={classes.messages}>
        <Messages message="ya durak"/>
      </div>
    </div>
  );
};
export default Dialogs;
