import React from 'react'
import classes from './MyPost.module.css'
import Post from './Post/Post';

const MyPost = ()=>{
    return(
        <div className={classes.item}> POSTS
        <div className={classes.item}>post1</div>
        <div className={classes.item}>post2</div>
        <div className=''>post3</div>
        <Post message='Salamandra'/>
        <Post message='bratishka'/>
        </div>
    )
}
export default MyPost