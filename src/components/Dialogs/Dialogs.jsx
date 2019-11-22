import React from "react";
import classes from "./Dialogs.module.css";
import Messages from './Message/Message'
import Dialogitem from './DialogItem/Dialogsitem'
import { updateNewMessageTextCreator, sendMessageCreator } from "../../Redux/state";



const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage

  let messagesElements = state.messageData.map(m => <Messages message={m.message} id={m.id} />);
  let dialogsElements = state.dialogsData.map(d => <Dialogitem name={d.name} id={d.id} />);
  let newMessageText = state.newMessageText
  
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }
  let onNewMessageChange = (e) => {
    let newMessageSend= e.target.value
    props.store.dispatch(updateNewMessageTextCreator(newMessageSend))

  }
  
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>{dialogsElements}</div>
      <div className={classes.messages}><div>{messagesElements}</div></div>
      <div>
        <div>
          <textarea 
          placeholder="Введите сообщение"
          value={newMessageText}
          onChange={onNewMessageChange} />
        </div>
        <div>
          <button onClick={onSendMessageClick}>Отправить</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
