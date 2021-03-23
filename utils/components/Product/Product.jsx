import React from "react";
import { useRouter } from "next/router";
import styles from "./Product.module.scss";
import { FaRegHeart, FaCartPlus } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Product = ({ photoURL, title, price, sold, _id }) => {
  const router = useRouter();
  return (
    <article className={styles.product}>
      <div className={styles.imgCenter}>
        <img src={photoURL} alt={title} />
        <button className={styles.iconHeart}>
          <FaRegHeart />
        </button>
        <button className={styles.iconCart}>
          <FaCartPlus />
        </button>
        <button
          className={styles.iconFind}
          onClick={() =>
            router.push(
              `/san-pham/${title
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/\s+/g, "-")
                .toLowerCase()}/${_id}`
            )
          }
        >
          <FiSearch />
        </button>
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.detailsBottom}>
          <p className={`${styles.price} bold`}>
            {price}
            <sup className={styles.textUpper}>đ</sup>
          </p>
          <p className={styles.sold}>Đã bán: {sold}</p>
        </div>
      </div>
    </article>
  );
};

export default Product;
