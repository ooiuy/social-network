import React from "react";
import classes from "./../Dialogs.module.css";


const Messages = (props) => {

  return <div className={classes.message}>
    <div>
      {props.message}
    </div>
  </div>;
};


export default Messages;
