import React from "react";
import classes from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {

  let messageElements = props.PostData.map(p => <Post message={p.message} id={p.id} />) 
  return (
    <div className={classes.postBlock}>
      <h3>moi posti</h3>
      <div className={classes.postBlock}>{messageElements}</div>
    </div>
  );
};

export default MyPost;
