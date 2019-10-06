import React from 'react'
import classes from './Post.module.css'

const Post = (props) =>{
    
    return(
        <div className={classes.item}>{props.message}
        <div className={classes.addtext}>
            <textarea></textarea>
        </div>
        <div className={classes.btnpost}>
            <button>Опубликовать</button>
        </div>
        </div>
    )
}
export default Post