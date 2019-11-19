import React from 'react'
import classes from './Post.module.css'

const Post = (props) =>{

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }
    return(
        <div className={classes.item}>{props.message}
        <div className={classes.addtext}>
            <textarea ref={newPostElement}></textarea>
        </div>
        <div className={classes.btnpost}>
            <button onClick={addPost}>Опубликовать</button>
        </div>
        </div>
    )
}







export default Post