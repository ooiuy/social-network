import React from "react";
import { updateNewMessageTextCreator, sendMessageCreator } from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage
 
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }
  let onNewMessageChange = (newMessageSend) => {
   props.store.dispatch(updateNewMessageTextCreator(newMessageSend))

  }
  
  return <Dialogs 
  updateNewMessageText={onNewMessageChange} 
  sendMessage={onSendMessageClick} 
  dialogsPage={state}/>
}

export default DialogsContainer;
