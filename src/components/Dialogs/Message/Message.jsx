import React from "react";
import classes from "./../Dialogs.module.css";


const Messages = (props) => {
  
  let sendMessage = React.createRef()
  let addMessage = () => {
    //props.addMessage()
  }
  let onMessageChange = () => {
    let text = sendMessage.current.value
    //props.updateNewMessageText(text)
  }
  return <div className={classes.message}>
    <div>
      {props.message}
    </div>
    <div>
      <textarea 
      ref={sendMessage}
      value={props.newMessageText}
      onChange={onMessageChange} />
    </div>
    <div>
      <button onClick={addMessage}>Отправить сообщение</button>
    </div>
  </div>;
};


export default Messages;
