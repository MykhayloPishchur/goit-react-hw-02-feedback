import React from "react";
import styles from "./feedbackbuttons.module.css";

const FeedbackButtons = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map((item) => (
        <button
          className={styles.buttons}
          type="button"
          name={item}
          onClick={onLeaveFeedback}
          key={item}
        >
          {item}
        </button>
      ))}
    </>
  );
};

export default FeedbackButtons;
