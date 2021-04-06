import React from "react";
import Link from "next/link";
import styles from "./ItemCart.module.scss";
import { FaTrash } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { GrSubtract } from "react-icons/gr";
import convert from "../../utils/functions/convertLink";
import { removeFromCart, incrementCart, decrementCart } from "../../store/actions/cart.action";
import { useDispatch } from "react-redux";

const ItemCart = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <article className={styles.itemCenter}>
      <div className={styles.top}>
        <div className={styles.img}>
          <img src={product.images[0]} alt={product.title} />
        </div>
        <div className={styles.control}>
          <div className={styles.control__left}>
            <Link href={`/san-pham/${convert(product.title)}/${product.productID}`} className={styles.title}>
              {product.title}
            </Link>
            <p className={styles.price}>
              <span className={styles.text}>Giá : </span>{" "}
              {product.price.toLocaleString("en-US", {
                style: "currency",
                currency: "VND",
              })}
            </p>
          </div>
          <div className={styles.control__right}>
            <div className={styles.control__right_btnCenter}>
              <button
                className={`${styles.btn}`}
                onClick={() => product.quantity > 1 && dispatch(decrementCart(product._id))}
              >
                <GrSubtract className={styles.icon} />
              </button>
              <span className={` ${styles.center}`}>{product.quantity}</span>
              <button
                className={`${styles.btn} `}
                onClick={() => product.quantity < product.inventory && dispatch(incrementCart(product._id))}
              >
                <AiOutlinePlus className={styles.icon} />
              </button>
            </div>
            <button className={styles.btnRemove} onClick={() => dispatch(removeFromCart(product._id))}>
              <FaTrash className={styles.icon} />
              Xóa
            </button>
          </div>
        </div>
      </div>
      <div className={styles.bot}>
        Khuyễn mãi : <span className="bold">Đang cập nhật</span>
      </div>
    </article>
  );
};

export default ItemCart;
