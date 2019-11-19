import React from "react";
import classes from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {
  let messageElements = props.PostData.map(p => <Post message={p.message} id={p.id} />)
  let newPostElement = React.createRef()
  let addPost = () => {
    props.addPost()
  }
  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }


  return (
    <div className={classes.postBlock}>
      <h3>Мои посты</h3>
      <div className={classes.addtext}>
        <textarea
          ref={newPostElement}
          value={props.newPostText}
          onChange={onPostChange} />
      </div>
      <div className={classes.btnpost}>
        <button onClick={addPost}>Опубликовать</button>
      </div>
      <div className={classes.postBlock}>{messageElements}</div>
    </div>

  );
};

export default MyPost;
