import React from "react";
import styles from "./StoryCard.module.css";

const StoryCard = (props: any) => {
  const style = styles.storycard + " " + props.className;
  return <div className={style}>{props.children}</div>;
};

export default StoryCard;
