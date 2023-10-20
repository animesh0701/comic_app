import React, { useState } from "react";
import styles from "./Button1.module.css";

interface Props {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button1 = ({ children, onClick, color = "primary" }: Props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <button
      type="button"
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button1;
