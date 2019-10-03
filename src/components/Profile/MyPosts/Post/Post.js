import React from 'react'
import classes from './Post.module.css'

const Post = (props) =>{
    
    return(
        <div className={classes.item}>{props.message}
            <img src='https://s3-eu-west-1.amazonaws.com/holypopassets4/extensions/holypop/images/holyshit.png'/>
        </div>
    )
}
export default Post