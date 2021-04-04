import React from "react";
import styles from "./ButtonTop.module.scss";
import { IoIosArrowUp } from "react-icons/io";

const ButtonTop = () => {
  return (
    <a href="#header" className={styles.btn_to_top}>
      <IoIosArrowUp className={styles.icon} />
    </a>
  );
};

export default ButtonTop;
