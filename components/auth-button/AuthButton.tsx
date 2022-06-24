import React from "react";
import styles from "./AuthButton.module.css";
import AuthHeaderBox from "../UI/auth-header-box/AuthHeaderBox";

const AuthButton = () => {
  return (
    <AuthHeaderBox>
      <button className={styles.button}>S'identifier</button>
    </AuthHeaderBox>
  );
};

export default AuthButton;
