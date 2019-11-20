let store = {
    _state: {
        profilePage: {
            PostData: [
                { id: 1, message: 'Salamandra' },
                { id: 2, message: 'Bratishka ejje' },
                { id: 3, message: 'Давай, не ленись, делай111' }
            ],
            newPostText: 'add post'
    
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
            newMessageText: 'add message'
        },
    
    },
    getState(){
        return this._state
    },
    _callSubscriber(){
        console.log('State changed')
    },
     addPost()  {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
        }
        this._state.profilePage.PostData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText  (newText) {
        this._state.profilePage.newPostText = newText
       this._callSubscriber(this._state)
    },
   addMessage() {
        let newMessage = {
            id: 7,
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messageData.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
    },
    updateNewMessageText (newTextMessage) {
        this._state.dialogsPage.newMessageText = newTextMessage
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer //observer
    }
}

export default store