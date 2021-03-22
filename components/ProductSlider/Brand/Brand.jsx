import React from "react";
import styles from "./Brand.module.scss";

const Brand = ({ image, title }) => {
  return (
    <article className={styles.brand}>
      <img src={image} alt={title} title={title} />
    </article>
  );
};

export default Brand;
