import MyPost from './MyPost'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../Redux/profileReducer'
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    PostData: state.profilePage.PostData,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text)
      dispatch(action)
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;
