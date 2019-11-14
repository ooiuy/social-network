import React from "react";
import classes from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = () => {
  return (
    <div className={classes.postBlock}>
      POSTS123123
      <div className={classes.postBlock}>post1</div>
      <Post message="Salamandra" />
      <Post message="bratishka" />
      <Post message="Давай, не ленись,делай" />
    </div>
  );
};

export default MyPost;
