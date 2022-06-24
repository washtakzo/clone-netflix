import React from "react";
import styles from "./MainStoryCard.module.css";
import StoryCard from "../UI/story-card/StoryCard";
import ActionButton from "../action-button/ActionButton";

const MainStoryCard = (props: any) => {
  return (
    <StoryCard className={styles["no-background"]}>
      <div className={styles.mainstory}>
        <h1>{props.h1}</h1>
        <h2>{props.h2}</h2>
        <p>{props.p}</p>
        <input type="email" placeholder="Adresse e-mail" />
        <ActionButton text="Commencer" />
      </div>
    </StoryCard>
  );
};

export default MainStoryCard;
