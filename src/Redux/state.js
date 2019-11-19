import { rerenderEntireTree } from "../render"

let state = {
    profilePage: {
        PostData: [
            { id: 1, message: 'Salamandra' },
            { id: 2, message: 'Bratishka ejje' },
            { id: 3, message: 'Давай, не ленись, делай111' }
        ],

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
        ]
    },

}

export let addPost = (postMessage) =>{
    let newPost = {
        id:5,
        message: postMessage,
    }
    state.profilePage.PostData.push(newPost)
    rerenderEntireTree(state)
}


export default state