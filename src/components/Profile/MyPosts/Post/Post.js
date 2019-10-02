import React from 'react'
import classes from './Post.module.css'

const Post = () =>{
    return(
        <div className={classes.item}>You're Post
            <img src='https://s3-eu-west-1.amazonaws.com/holypopassets4/extensions/holypop/images/holyshit.png'/>
        </div>
    )
}
export default Post