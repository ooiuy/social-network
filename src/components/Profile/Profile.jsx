import React from 'react';
import ProfileInfo from './ProfileInfo/ProfInfo'
import classes from "./Profile.module.css";
import MyPost from "./MyPosts/MyPost";


const Profile = (props) => {

  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPost PostData={props.profilePage.PostData}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}/>
    </div>
  )
}
export default Profile
