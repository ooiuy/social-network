import React from "react";
import classes from "./Dialogs.module.css";
import Messages from './Message/Message'
import Dialogitem from './DialogItem/Dialogsitem'



const Dialogs = (props) => {
  let messagesElements = props.dialogsPage.messageData.map(m => <Messages message={m.message} id={m.id} />);
  let dialogsElements = props.dialogsPage.dialogsData.map(d => <Dialogitem name={d.name} id={d.id} />);

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
