import React from "react";
import { VscError } from "react-icons/vsc";

import { BsCheckCircle } from "react-icons/bs";
import { ImWarning } from "react-icons/im";
import styles from "./Alert.module.scss";

const Alert = ({ type, show, message, setShow }) => {
  return (
    <div className={`${styles.alert_box} ${show ? styles.show : ""} ${styles[type]}`}>
      <div className={styles.icons}>
        {type === "success" ? (
          <span className={styles.icons__success}>
            <BsCheckCircle className={styles.icon} />
          </span>
        ) : type === "error" ? (
          <span className={styles.icons__error}>
            <VscError className={styles.icon} />
          </span>
        ) : (
          <span className={styles.icons__warning}>
            <ImWarning className={styles.icon} />
          </span>
        )}
      </div>
      <h3 className={styles.type}>{type}</h3>
      <div className={styles.content}>{message}</div>
      <button className={styles.btn} onClick={() => setShow({ message: "", type: "" })}>
        Đóng
      </button>
    </div>
  );
};

export default Alert;
