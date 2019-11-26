import React from "react";
import MyPost from './MyPost'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../Redux/profileReducer'
import StoreContext from "../../../StoreContext";

const MyPostContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState()
        let addPost = () => {
          store.dispatch(addPostActionCreator())
        }
      
        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text)
          store.dispatch(action)
        }
        return < MyPost
          updateNewPostText={onPostChange}
          addPost={addPost}
          newPostText={state.profilePage.newPostText}
          postData={state.profilePage.postData} />
      }}
    </StoreContext.Consumer>)
}

export default MyPostContainer;
