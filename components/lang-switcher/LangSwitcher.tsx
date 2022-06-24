import React from "react";
import styles from "./LangSwitcher.module.css";
import AuthHeaderBox from "../UI/auth-header-box/AuthHeaderBox";

const LangSwitcher = (props: any) => {
  const style = styles.customselect + " " + props.className;
  console.log(style);

  return (
    <AuthHeaderBox className={style}>
      <div>
        <select className={styles.select}>
          <option value="fr">Français</option>
          <option value="en">English</option>
        </select>
        <span className={styles.customarrow}></span>
      </div>
    </AuthHeaderBox>
  );
};

export default LangSwitcher;
