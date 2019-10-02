import React from 'react'
import classes from './Profile.module.css'
import MyPost from './MyPosts/MyPost';

const Profile = () => {
    return (<div className={classes.content}>
      <div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWx-hhuejL92JpnKedsNKvC7uxuvoF2xSC87XWW3LxW1a5LlC"/>
      <MyPost/>
    </div>
  </div>)
}
export default Profile