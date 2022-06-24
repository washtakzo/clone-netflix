import React from "react";
import styles from "./SecondaryStoryCard.module.css";
import StoryCard from "../UI/story-card/StoryCard";

const SecondaryStoryCard = (props: any) => {
  return (
    <StoryCard className={styles.secondarystory}>
      <h1>{props.h1}</h1>
      <p>{props.p}</p>
      <div>{props.children}</div>
    </StoryCard>
  );
};

export default SecondaryStoryCard;
