import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "scss/Account/Cart.module.scss";
import BackLink from "utils/components/BackLink/BackLink";
import Meta from "components/Meta";
import ItemCart from "components/ItemCart/ItemCart";

import { useSelector, useDispatch } from "react-redux";
import { getCart } from "store/actions/cart.action";
import { SiBitly } from "react-icons/si";
import Loading from "utils/components/Loading/Loading";
import withoutAuth from "utils/HOC/withoutLogin";

const Cart = () => {
  const [loadingPage, setLoadingPage] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.token) {
      dispatch(getCart(user.token, setLoadingPage));
    }
  }, [user.token]);
  return (
    <div className={styles.cart}>
      <Meta title="Giỏ hàng của bạn | khumuivietnam.com" />
      <BackLink
        list={[
          { href: "/", text: "Trang chủ" },
          { href: "/gio-hang", text: "Giỏ hàng" },
        ]}
      />
      {user.token && !loadingPage ? (
        <section className={styles.cartWrapper}>
          <div className={styles.cartWrapper__header}>
            <h1>
              <span className="bold">GIỎ HÀNG</span> ( {cart.length} sản phẩm )
            </h1>
          </div>
          <div className={styles.content}>
            <div className={styles.content__left}>
              {cart.map((product) => (
                <ItemCart key={product._id} product={product} />
              ))}
            </div>
            <div className={styles.content__right}>
              <div className={styles.total}>
                <div className={styles.total__temp}>
                  <span className={styles.total__temp__text}>Tạm tính :</span>
                  <span className={styles.total__temp__price}>
                    {cart
                      .reduce((item, value) => item + value.price * value.quantity, 0)
                      .toLocaleString("en-US", {
                        style: "currency",
                        currency: "VND",
                      })}
                  </span>
                </div>
                <div className={styles.total__main}>
                  <span className={styles.total__main__text}>Thành tiên:</span>
                  <span className={styles.total__main__price}>
                    {cart
                      .reduce((item, value) => item + value.price * value.quantity, 0)
                      .toLocaleString("en-US", {
                        style: "currency",
                        currency: "VND",
                      })}
                  </span>
                </div>
              </div>
              <div className={styles.btnCenter}>
                <button className={styles.btn__checkout} onClick={() => router.push("/tai-khoan/giao-hang")}>
                  Thanh Toán
                </button>
                <button className={styles.btn__continue} onClick={() => router.push("/san-pham")}>
                  Tiếp tục mua
                </button>
                <button className={styles.btn__continue} onClick={() => router.push("/tai-khoan/da-thanh-toan")}>
                  Đơn hàng đã mua
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h1 style={{ textAlign: "center" }}>
          <Loading />
        </h1>
      )}
    </div>
  );
};

export default withoutAuth(Cart);
