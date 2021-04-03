import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Product.module.scss";
import { FaRegHeart, FaCartPlus } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import Stars from "../Stars/Stars";

const Product = ({ image, title, price, sold, _id, favorites, evaluate }) => {
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
              .replace(/đ/g, "d")
              .replace(/Đ/g, "D")
              .toLowerCase()}/${_id}`}
          >
            {title}
          </Link>
        </h3>
        <div className={styles.detailsBottom}>
          <div className={styles.detailsBottomLeft}>
            <p className={`${styles.price} bold`}>
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "VND",
              })}
            </p>
            <Stars stars={evaluate} />
          </div>
          <div className={styles.detailsBottomRight}>
            <p className={styles.fav}>
              <BsHeartFill className={styles.iconFav} /> {favorites?.length || 0}
            </p>
            <p className={styles.sold}>Đã bán: {sold}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Product;
