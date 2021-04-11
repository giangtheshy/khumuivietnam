import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../store/actions/cart.action";
import { updateFavorites } from "../../../store/actions/user.action";
import styles from "./Product.module.scss";
import { FaRegHeart, FaCartPlus } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import Stars from "../Stars/Stars";
import convert from "../../functions/convertLink";
import Loading from "../Loading/Loading";

const Product = ({ image, title, price, sold, _id, favorites, evaluate, inventory }) => {
  const [loadingCart, setLoadingCart] = useState(false);
  const [loadingHeart, setLoadingHeart] = useState(false);
  const user = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (user.user) {
      dispatch(addToCart({ title, price, images: [image], inventory, _id, quantity: 1 }, user.token, setLoadingCart));
    } else {
      alert("Phải đăng nhập để dùng chức năng này");
    }
  };
  const handleUpdateFavorites = () => {
    if (user.user) {
      dispatch(updateFavorites(_id, user.token, setLoadingHeart));
    } else {
      alert("Phải đăng nhập để dùng chức năng này");
    }
  };
  return (
    <article className={styles.product}>
      <div className={styles.imgCenter}>
        <img src={image.replace("/image/upload/", "/image/upload/c_scale,h_254,w_300/")} alt={title} />
        <button
          className={`${styles.iconHeart} ${
            user.user?.favorites?.find((fav) => fav === _id) ? styles.active : styles.unActive
          }`}
          onClick={handleUpdateFavorites}
        >
          {loadingHeart ? <Loading /> : <FaRegHeart />}
        </button>
        <button className={styles.iconCart} onClick={handleAddToCart}>
          {loadingCart ? <Loading /> : <FaCartPlus />}
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
