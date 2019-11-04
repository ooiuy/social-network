import React from "react";
import classes from "./Dialogs.module.css";
import Messages from './Message/Message'
import Dialogitem from './DialogItem/Dialogsitem'

let dialogData = [
  { id: 1, name: "Mars" },
  { id: 2, name: "Maks" },
  { id: 3, name: "Ruslan" },
  { id: 4, name: "Artem" },
  { id: 5, name: "Andrey" },
  { id: 6, name: "Vlad-avtomat" }
];
let messageData = [
  { id: 1, message: "krasav4ik" },
  { id: 2, message: "loh" },
  { id: 3, message: "vodila" },
  { id: 4, message: "povar" },
  { id: 5, message: "kartavii" },
  { id: 6, message: "ubia" }
];

let messagesElements = messageData.map(m => {
  return <Messages message={m.message} id={m.id} />;
});

let dialogsElements = dialogData.map(d => {
  return <Dialogitem name={d.name} id={d.id} />;
});

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
