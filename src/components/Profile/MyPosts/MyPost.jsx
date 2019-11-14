import React from "react";
import classes from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = () => {

  let PostData = [
    {id: 1, message: 'Salamandra'},
    {id: 2, message: 'Bratishka ejje'},
    {id: 3, message: 'Давай, не ленись, делай'}
  ]
  let messageElements = PostData.map(m =>{
    return <Post message={m.message} id={m.id} />
  }) 
  return (
    <div className={classes.postBlock}>
      POSTS
      <div className={classes.postBlock}>{messageElements}</div>
    </div>
  );
};

export default MyPost;
