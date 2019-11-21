const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let store = {
  _state: {
    profilePage: {
      PostData: [
        { id: 1, message: "Salamandra" },
        { id: 2, message: "Bratishka ejje" },
        { id: 3, message: "Давай, не ленись, делай111" }
      ],
      newPostText: "add post"
    },
    dialogsPage: {
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
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //observer
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText
      };
      this._state.profilePage.PostData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newMessage;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = this._state.dialogsPage.newMessageText;
      this._state.dialogsPage.newMessageText = "";
      this._state.dialogsPage.messageData.push({
        id: 7,
        message: newMessage
      });
    }
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextCreator = newMessageSend => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: newMessageSend
});

export default store;
