import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
};



export default store;
