const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state
        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            state.newMessageText = "";
            state.messageData.push({ id: 7, message: newMessage })
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextCreator = newMessageSend => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: newMessageSend
});

export default dialogsReducer