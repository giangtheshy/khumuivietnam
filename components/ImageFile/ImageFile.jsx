import React from "react";
import { RiIndeterminateCircleFill } from "react-icons/ri";
import styles from "./ImageFile.module.scss";
const ImageFile = ({ src, alt, value, handleRemoveImage }) => {
  return (
    <div className={styles.imgWrapper}>
      <img src={src} alt={alt} className={styles.img} />
      <button className={styles.btn} title="Bỏ chọn ảnh" onClick={() => handleRemoveImage(value)} type="button">
        <RiIndeterminateCircleFill className={styles.icon} />
      </button>
    </div>
  );
};

export default ImageFile;
