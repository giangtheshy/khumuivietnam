import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { addToCart } from "../../../store/actions/cart.action";
import styles from "./Product.module.scss";
import { FaRegHeart, FaCartPlus } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import Stars from "../Stars/Stars";
import convert from "../../functions/convertLink";

const Product = ({ image, title, price, sold, _id, favorites, evaluate, inventory }) => {
  const router = useRouter();

  const dispatch = useDispatch();
  const [cookies, setCookies] = useCookies(["user"]);
  const handleAddToCart = () => {
    dispatch(addToCart({ title, price, images: [image], inventory, _id, quantity }, cookies.user));
  };
  return (
    <article className={styles.product}>
      <div className={styles.imgCenter}>
        <img src={image} alt={title} />
        <button className={styles.iconHeart}>
          <FaRegHeart />
        </button>
        <button className={styles.iconCart} onClick={handleAddToCart}>
          <FaCartPlus />
        </button>
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>
          <Link className={styles.link} href="/san-pham/[title]/[id]" as={`/san-pham/${convert(title)}/${_id}`}>
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
