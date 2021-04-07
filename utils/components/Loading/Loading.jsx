import React from "react";
import styles from "./Loading.module.scss";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Loading = () => {
  return (
    <>
      <AiOutlineLoading3Quarters className={styles.iconLoading} />
    </>
  );
};

export default Loading;
