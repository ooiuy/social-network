import React from 'react';
import ProfileInfo from './ProfileInfo/ProfInfo'
import classes from "./Profile.module.css";
import MyPost from "./MyPosts/MyPost";


const Profile = () => {
  return (
    <div className={classes.content}>
      <ProfileInfo/>
    
     <MyPost/>
    </div>
  )
}
export default Profile