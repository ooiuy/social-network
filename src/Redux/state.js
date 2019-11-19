import { rerenderEntireTree } from "../render"

let state = {
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

}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
    }
    state.profilePage.PostData.push(newPost)
    state.profilePage.newPostText =''
    rerenderEntireTree(state)
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export let addMessage = () => {
    let newMessage = {
        id: 7,
        message: state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messageData.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state)
}
export let updateNewMessageText = (newTextMessage) => {
    state.dialogsPage.newMessageText = newTextMessage
    rerenderEntireTree(state)
}


export default state