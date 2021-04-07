import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, label, type, onClick }) => {
  return (
    <button type={type} className={styles.button} data-hover={label} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
