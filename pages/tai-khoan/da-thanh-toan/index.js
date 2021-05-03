import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "scss/Account/Bill.module.scss";
import * as apis from "apis";

import Meta from "components/Meta";
import BackLink from "utils/components/BackLink/BackLink";
import Bill from "components/Bill/Bill";
const Bills = () => {
  const [bills, setBills] = useState([]);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const fetchBill = async () => {
      if (token) {
        const { data } = await apis.getAllBillByUser(token);
        setBills(data);
      }
    };
    fetchBill();
  }, [token]);
  console.log({ bills });
  return (
    <div className={styles.bill}>
      <Meta title="Đơn hàng đã mua của bạn tại khumuivietnam" />
      <BackLink
        list={[
          { href: "/", text: "Trang chủ" },
          { href: "/tai-khoan", text: "Tài khoản" },
          { href: "/tai-khoan/gio-hang", text: "Giỏ hàng" },
        ]}
      />
      <section className={styles.bill_section}>
        {bills.map((bill) => (
          <Bill key={bill._id} bill={bill} />
        ))}
      </section>
    </div>
  );
};

export default Bills;
