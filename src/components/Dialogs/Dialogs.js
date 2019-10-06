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

let dialogData = [
  {id:1, name: 'Mars'},
  {id:2, name: 'Maks'},
  {id:3, name: 'Ruslan'},
  {id:4, name: 'Artem'},
  {id:5, name: 'Andrey'},
  {id:6, name: 'Vlad-avtomat'}
]
let messageData = [
  {id:1, message: 'krasav4ik'},
  {id:2,  message: 'loh'},
  {id:3,  message: 'vodila'},
  {id:4,  message: 'povar'},
  {id:5,  message: 'kartavii'},
  {id:6,  message: 'ubia'}
]

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>
        <Dialogitem name={dialogData[0].name} id={dialogData[0].id} />
        <Dialogitem name={dialogData[1].name} id={dialogData[1].id} />
        <Dialogitem name={dialogData[2].name} id={dialogData[2].id} />
        <Dialogitem name={dialogData[3].name} id={dialogData[3].id} />
        <Dialogitem name={dialogData[4].name} id={dialogData[4].id} />
        <Dialogitem name={dialogData[5].name} id={dialogData[5].id} />
      </div>
      <div className={classes.messages}>
        <Messages message={messageData[0].message} id={dialogData[0].id} />
      </div>
    </div>
  );
};
export default Dialogs;
