const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";


let initialState = {
    dialogsData: [
        { id: 1, name: "Mars" },
        { id: 2, name: "Maks" },
        { id: 3, name: "Ruslan" },
        { id: 4, name: "Artem" },
        { id: 5, name: "Andrey" },
        { id: 6, name: "Vlad-avtomat" }
    ],
    messageData: [
        { id: 1, message: "krasav4ik" },
        { id: 2, message: "loh" },
        { id: 3, message: "vodila" },
        { id: 4, message: "povar" },
        { id: 5, message: "kartavii" },
        { id: 6, message: "ubica" }
    ],
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {
    
    
    let stateCopy = {...state}
   
    
    
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy.newMessageText = action.newMessage;
            return stateCopy
        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            stateCopy.newMessageText = "";
            stateCopy.messageData.push({ id: 7, message: newMessage })
            return stateCopy
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