import React from "react";
import styles from "./InputRadio.module.scss";

const InputRadio = ({ onChange, value, label, placeholder, name, autoComplete }) => {
  return (
    <label className={styles.input__box}>
      {label}
      <input
        type="radio"
        onChange={onChange}
        value={value}
        className={styles.input__box_input}
        placeholder={placeholder}
        name={name}
        autoComplete={autoComplete}
      />
      <span className={styles.input__box_mark}></span>
    </label>
  );
};

export default InputRadio;
