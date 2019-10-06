import React from "react";
import classes from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>
        <div className={classes.dialog}>Maks Gladkii</div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Ya tupoi loh</div>
      </div>
    </div>
  );
};
export default Dialogs;
