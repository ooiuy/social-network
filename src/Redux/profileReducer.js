const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";


let initialState = {
    PostData: [
        { id: 1, message: "Salamandra" },
        { id: 2, message: "Bratishka ejje" },
        { id: 3, message: "Давай, не ленись, делай111" }
    ],
    newPostText: "add post"
}

const profileReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText
            };
            let stateCopy = { ...state }
            state.PostData = [...state.PostData];
            stateCopy.PostData.push(newPost)
            stateCopy.newPostText = "";
            return stateCopy
        }

        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = { ...state }
            stateCopy.newPostText = action.newText;
            return stateCopy
        }
        default:
            return state
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = text => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});
export default profileReducer