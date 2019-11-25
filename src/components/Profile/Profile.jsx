import React from 'react';
import ProfileInfo from './ProfileInfo/ProfInfo'
import classes from "./Profile.module.css";
import MyPost from "./MyPosts/MyPost";
import MyPostContainer from './MyPosts/myPostContainer';


const Profile = (props) => {

  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPostContainer store={props.store} />
    </div>
  )
}
export default Profile
