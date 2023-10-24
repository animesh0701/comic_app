import React, { useState } from "react";
import { ReactNode } from "react";
import styles from "./ExpandableText.module.css";

interface Props {
  children: ReactNode;
}

const ExpandableText = ({ children }: Props) => {
  const [size, setSize] = useState("small");
  const [buttonText, setButtonText] = useState("More");

  const clickHandler = () => {
    setSize(size === "large" ? "small" : "large");
    setButtonText(buttonText === "More" ? "Less" : "More");
  };

  return (
    <div>
      {size === "small" ? (
        <div className={styles["textContainer-" + size]}>{children}...</div>
      ) : (
        <div>{children}</div>
      )}
      <button onClick={clickHandler}>{buttonText}</button>
    </div>
  );
};

export default ExpandableText;
