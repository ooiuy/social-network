import React from "react";
import classes from "./../Dialogs.module.css";


const Messages = props => {
  let sendMessage = React.createRef()

  let addMessage = (() => {
    let text = sendMessage.current.value
    alert(text)
  })

  return <div className={classes.message}>
    <div>{props.message}</div>
    <div><textarea ref={sendMessage}></textarea></div>
    <div>
      <button onClick={addMessage}>Отправить сообщение</button>
    </div>
  </div>;
};


export default Messages;
