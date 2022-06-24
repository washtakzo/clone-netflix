import React from "react";
import styles from "./AuthHeaderBox.module.css";

const AuthHeaderBox = (props: any) => {
  const myClass = styles.box + " " + props.className;
  return <div className={myClass}>{props.children}</div>;
};

export default AuthHeaderBox;
