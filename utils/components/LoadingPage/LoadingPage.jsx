import React from "react";
import styles from "./LoadingPage.module.scss";
import Meta from "components/Meta";

const LoadingPage = () => {
  return (
    <div className={styles.loading_page}>
      <Meta title="Đang tải dữ liệu trang..." description="Page is loading..." ico="/loading.ico" />
      <div className={styles.container}>
        <p className={styles.item}>l</p>
        <p className={styles.item}>o</p>
        <p className={styles.item}>a</p>
        <p className={styles.item}>d</p>
        <p className={styles.item}>i</p>
        <p className={styles.item}>n</p>
        <p className={styles.item}>g</p>
      </div>
    </div>
  );
};

export default LoadingPage;
