import React from "react";
import styles from "./InputRadio.module.scss";

const InputRadio = ({ onChange, value, name, checked }) => {
  return (
    <label className={styles.input__box}>
      <span className={styles.input__box_label}>{value}</span>
      <input
        type="radio"
        onChange={onChange}
        value={value}
        className={styles.input__box_input}
        name={name}
        checked={checked}
      />
      <span className={styles.input__box_mark}></span>
    </label>
  );
};

export default InputRadio;
