import React, { useState } from "react";
import { useSelector } from "react-redux";

import styles from "scss/Account/Shipping.module.scss";
import Meta from "components/Meta";
import BackLink from "utils/components/BackLink/BackLink";
import Input from "utils/components/Input/Input";

const Shipping = () => {
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);
  const [info, setInfo] = useState({ name: user?.name, email: user?.email, phone: "", address: "", note: "" });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
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
          <div className={styles.body__right}></div>
        </div>
      </section>
    </div>
  );
};

export default Shipping;
