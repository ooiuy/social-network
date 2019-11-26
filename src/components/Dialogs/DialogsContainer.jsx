import React from "react";
import { updateNewMessageTextCreator, sendMessageCreator } from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";



const DialogsContainer = () => {

   return <StoreContext.Consumer>
    {(store) => {
       let state = store.getState().dialogsPage

       let onSendMessageClick = () => {
         store.dispatch(sendMessageCreator())
       }
       let onNewMessageChange = (newMessageSend) => {
         store.dispatch(updateNewMessageTextCreator(newMessageSend))
       }
      return <Dialogs
        updateNewMessageText={onNewMessageChange}
        sendMessage={onSendMessageClick}
        dialogsPage={state} />
    }
    }
  </StoreContext.Consumer>

}


export default DialogsContainer;
