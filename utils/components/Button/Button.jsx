import React from "react";
import styles from "./Button.module.scss";

const Button = ({ label, type, onClick }) => {
  return (
    <button type={type} className={styles.button} data-hover={label} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
