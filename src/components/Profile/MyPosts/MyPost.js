import React from 'react'
import classes from './MyPost.module.css'

const MyPost = ()=>{
    return(
        <div className={classes.item}> POSTS
        <div className={classes.item}>post1</div>
        <div className={classes.item}>post2</div>
        <div className=''>post3</div>
        </div>
    )
}
export default MyPost