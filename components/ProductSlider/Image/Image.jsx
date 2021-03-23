import React from "react";
import styles from './Image.module.scss';

const Image = ({image,title}) => {
  return <article className={styles.imageIcon}>
  <img src={image} alt={title} title={title} />
</article>;
};

export default Image;
