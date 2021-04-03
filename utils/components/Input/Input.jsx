import React from "react";
import styles from "./Input.module.scss";

const Input = ({ onChange, value, type, label, placeholder, name ,autoComplete}) => {
  return (
    <label className={styles.input__box}>
      <span className={styles.input__box_label}>
        {label}
        <sup className="clr-main">*</sup>
      </span>
      <input
        type={type}
        onChange={onChange}
        value={value}
        className={styles.input__box_input}
        placeholder={placeholder}
        name={name}
        autoComplete={autoComplete}
      />
    </label>
  );
};

export default Input;
