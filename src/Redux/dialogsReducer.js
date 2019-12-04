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

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            }
        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: "",
                messageData: [...state.messageData, { id: 7, message: newMessage }]
            }
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