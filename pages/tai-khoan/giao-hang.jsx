import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import styles from "scss/Account/Shipping.module.scss";
import Meta from "components/Meta";
import BackLink from "utils/components/BackLink/BackLink";
import Input from "utils/components/Input/Input";

import * as apis from "apis";

const Shipping = () => {
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const cart = useSelector((state) => state.cart.cart);
  const [info, setInfo] = useState({ name: user?.name, email: user?.email, phone: "", address: "", note: "" });
  const router = useRouter();

  useEffect(() => {
    if (cart?.length === 0) {
      router.push("/tai-khoan/gio-hang");
    }
  }, []);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const totalAmount = cart.reduce((item, value) => item + value.price * value.quantity, 0);
  const handleCheckout = async () => {
    if (Object.values(info).every((item) => item !== "")) {
      const { data } = await apis.createPayment({ info, amount: totalAmount, cart }, token);
      if (data.code === "00") {
        location.href = data.data;
      }
    } else {
      alert("Phải điền đủ thông tin");
    }
  };
  return (
    <div className={styles.wrapper}>
      <Meta title="Giao hàng nhanh và thuận tiện với khumuivietnam.com" />
      <BackLink
        list={[
          { href: "/", text: "Trang chủ" },
          { href: "/tai-khoan", text: "Tài khoản" },
          { href: "/tai-khoan/giao-hang", text: "Giao hàng" },
        ]}
      />
      <section className={styles.shipping}>
        <div className={styles.header}>
          <h1>Thông tin nhận hàng</h1>
        </div>
        <div className={styles.body}>
          <div className={styles.body__left}>
            <Input
              name="name"
              defaultValue={user?.name}
              onChange={handleChange}
              placeholder="Tên người nhận"
              label="Tên người nhận"
            />
            <Input
              name="email"
              defaultValue={user?.email}
              onChange={handleChange}
              placeholder="Email người nhận"
              label="Email người nhận"
              readOnly={true}
            />
            <Input
              name="phone"
              value={info.phone}
              onChange={handleChange}
              placeholder="Số điện thoại"
              label="Số điện thoại"
            />
            <Input
              name="address"
              value={info.address}
              onChange={handleChange}
              placeholder="Địa chỉ giao hàng"
              label="Địa chỉ giao hàng"
            />
            <label htmlFor="note" className={styles.areaLabel}>
              <span className="bold" style={{ fontSize: 14 }}>
                Ghi chú<sup className="bold clr-main">*</sup>
              </span>
              <textarea name="note" id="note" value={info.note} onChange={handleChange}></textarea>
            </label>
          </div>
          <div className={styles.body__right}>
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
              <button className={styles.btn__checkout} onClick={handleCheckout}>
                Thanh toán bằng VnPay
              </button>
              <button className={styles.btn__continue} onClick={() => router.push("/tai-khoan/gio-hang")}>
                Quay lại giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shipping;
