import React from "react";
import styles from "./Image.module.scss";

const Image = ({ image, title, onClick }) => {
  return (
    <article className={styles.imageIcon} onClick={onClick}>
      <img src={image} alt={title} title={title} />
    </article>
  );
};

export default Image;
