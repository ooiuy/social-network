import { updateNewMessageTextCreator, sendMessageCreator } from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (newMessageSend) => {dispatch (updateNewMessageTextCreator(newMessageSend))},
    sendMessage: () => {dispatch (sendMessageCreator())}
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
