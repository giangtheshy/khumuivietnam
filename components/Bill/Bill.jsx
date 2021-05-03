import React, { useState } from "react";
import Link from "next/link";

import convert from "utils/functions/convertLink";
import styles from "./Bill.module.scss";

const Bill = ({ bill }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <article className={styles.bill}>
      <div className={styles.info}>
        <img
          src="https://play-lh.googleusercontent.com/u5pV499kLMi9rZs8vxI9IOIQKKFcj2Ae_-vlJDuMc31GPeRx40BOgpIVqXvgiLdCgg"
          alt="logo vnpay"
        />
        <div className={styles.details}>
          <div className={styles.details__top}>
            <p className={styles.name}>Tên : {bill.info.name}</p>
            <p className={styles.address}>Địa chỉ : {bill.info.address}</p>
            <p className={styles.amount}>
              Tổng tiền :
              {bill.cart
                .reduce((item, value) => item + value.price * value.quantity, 0)
                .toLocaleString("en-US", {
                  style: "currency",
                  currency: "VND",
                })}
            </p>
          </div>
          <div className={styles.details__bottom}>
            <p className={styles.note}>
              {bill.info.note ||
                "Lorem ipsum dolor sisci eos suscipit similique excepturi quam? Ipsa rerum est sunt voluptates etatae, vel fugiat?"}
            </p>
          </div>
          <button className={styles.btn_show_more} onClick={() => setShowMore(!showMore)}>
            Hiện thị thêm
          </button>
          {showMore && (
            <div className={styles.products}>
              {bill.cart.map((product) => (
                <article className={styles.product} key={product._id}>
                  <Link href={`/san-pham/${convert(product.title)}/${product.productID}`}>{product.title}</Link>
                  <p className={styles.quantity}>{product.quantity}</p>
                  <p className={styles.price}>{product.price}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default Bill;
