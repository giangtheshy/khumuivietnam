import React from "react";
import styles from "./File.module.scss";
import { RiImageAddFill } from "react-icons/ri";

const File = ({ onChange, value, name, id }) => {
  return (
    <label className={styles.file__box} htmlFor={id}>
      <span className={styles.file__box_icon}>
        <RiImageAddFill className={styles.icon} />
      </span>
      <input type="file" onChange={onChange} value={value} className={styles.file__box_file} name={name} id={id} />
    </label>
  );
};

export default File;
