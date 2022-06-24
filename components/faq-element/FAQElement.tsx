import React from "react";
import styles from "./FAQElement.module.css";
import StoryCard from "../UI/story-card/StoryCard";

const FAQElement = (props: any) => {
  const [buttonStyle, setButtonStyle] = React.useState("");

  const clickHandler = () => {
    setButtonStyle((prev) => {
      if (prev === "" || prev === styles["closing-rotation"]) {
        return styles["opening-rotation"];
      }
      if (prev === styles["opening-rotation"]) {
        return styles["closing-rotation"];
      }
      return "";
    });
  };

  return (
    <StoryCard className={styles.faqelement}>
      <button onClick={clickHandler}>
        <h3>{props.title}</h3>
        <svg viewBox="0 0 26 26" focusable="true" className={buttonStyle}>
          <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
        </svg>
      </button>
      {buttonStyle === styles["opening-rotation"] && (
        <div className={styles["text-container"]}>
          <p id={styles["faq-answer"]}>{props.text}</p>
        </div>
      )}
    </StoryCard>
  );
};

export default FAQElement;
