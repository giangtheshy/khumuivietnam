import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Product.module.scss";
import { FaRegHeart, FaCartPlus } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Product = ({ image, title, price, sold, _id }) => {
  const router = useRouter();
  return (
    <article className={styles.product}>
      <div className={styles.imgCenter}>
        <img src={image} alt={title} />
        <button className={styles.iconHeart}>
          <FaRegHeart />
        </button>
        <button className={styles.iconCart}>
          <FaCartPlus />
        </button>
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>
          <Link
            className={styles.link}
            href="/san-pham/[title]/[id]"
            as={`/san-pham/${title
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/\s+/g, "-")
              .toLowerCase()}/${_id}`}
          >
            {title}
          </Link>
        </h3>
        <div className={styles.detailsBottom}>
          <p className={`${styles.price} bold`}>
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "VND",
            })}
          </p>
          <p className={styles.sold}>Đã bán: {sold}</p>
        </div>
      </div>
    </article>
  );
};

export default Product;
