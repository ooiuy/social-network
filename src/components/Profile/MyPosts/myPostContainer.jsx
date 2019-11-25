import React from "react";
import MyPost from './MyPost'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../Redux/profileReducer'

const MyPostContainer = (props) => {
  let state = props.store.getState()

  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text)
    props.store.dispatch(action)
  }
  return (<MyPost 
    updateNewPostText={onPostChange} 
    addPost={addPost} 
    newPostText={state.profilePage.newPostText}
    post={state.profilePage.postData} />)
}

export default MyPostContainer;
