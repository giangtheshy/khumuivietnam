import React from "react";
import styles from "./Image.module.scss";

const Image = ({ image, title, onClick }) => {
  return (
    <article className={styles.imageIcon} onClick={onClick}>
      <img src={image.replace("/image/upload/", "/image/upload/c_scale,h_80,w_140/")} alt={title} title={title} />
    </article>
  );
};

export default Image;
