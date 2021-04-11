import React, { useState, useCallback } from "react";
import Link from "next/link";
import styles from "./ItemCart.module.scss";
import { FaTrash } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { GrSubtract } from "react-icons/gr";
import convert from "../../utils/functions/convertLink";
import { removeFromCart, incrementCart, decrementCart } from "../../store/actions/cart.action";
import { useDispatch } from "react-redux";
import Loading from "../../utils/components/Loading/Loading";

const ItemCart = ({ product }) => {
  const [loading, setLoading] = useState({ loadingRemove: false, loadingInc: false, loadingDec: false });
  const dispatch = useDispatch();
  const setLoadingRemove = useCallback((value) => {
    setLoading({ ...loading, loadingRemove: value });
  }, []);
  const setLoadingInc = useCallback((value) => {
    setLoading({ ...loading, loadingInc: value });
  }, []);
  const setLoadingDec = useCallback((value) => {
    setLoading({ ...loading, loadingDec: value });
  }, []);
  return (
    <article className={styles.itemCenter}>
      <div className={styles.top}>
        <div className={styles.img}>
          <img
            src={product.images[0].replace("/image/upload/", "/image/upload/c_scale,h_254,w_300/")}
            alt={product.title}
          />
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
                onClick={() => product.quantity > 1 && dispatch(decrementCart(product._id, setLoadingDec))}
              >
                {loading.loadingDec ? <Loading /> : <GrSubtract className={styles.icon} />}
              </button>
              <span className={` ${styles.center}`}>{product.quantity}</span>
              <button
                className={`${styles.btn} `}
                onClick={() =>
                  product.quantity < product.inventory && dispatch(incrementCart(product._id, setLoadingInc))
                }
              >
                {loading.loadingInc ? <Loading /> : <AiOutlinePlus className={styles.icon} />}
              </button>
            </div>
            <button
              className={styles.btnRemove}
              onClick={() => dispatch(removeFromCart(product._id, setLoadingRemove))}
            >
              {loading.loadingRemove ? (
                <Loading />
              ) : (
                <>
                  <FaTrash className={styles.icon} />
                  Xóa
                </>
              )}
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
