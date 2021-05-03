import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { BiCheckShield } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import styles from "scss/Account/ReturnVnPay.module.scss";

import Meta from "components/Meta";
import BackLink from "utils/components/BackLink/BackLink";
import * as apis from "apis";

const ReturnVnPay = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchVnPay = async () => {
      setLoading(true);
      const query = router.asPath.replace(router.pathname, "");
      const { data } = await apis.returnVnPay(query);
      if (data.code == "00") {
        setResult("success");
      } else {
        setResult("failure");
      }
      setLoading(false);
    };
    fetchVnPay();
  }, []);
  return (
    <div className={styles.returnVnPay}>
      <Meta title="Kết quả thanh toán với VnPay" />
      <BackLink
        list={[
          { href: "/", text: "Trang chủ" },
          { href: "/tai-khoan", text: "Tài khoản" },
          { href: "/tai-khoan/gio-hang", text: "Giỏ hàng" },
          { href: "/tai-khoan/ket-qua-giao-dich", text: "Kết quả giao dịch" },
        ]}
      />
      <section className={styles.alertVnPay}>
        <div className={styles.alert}>
          {result === "success" && (
            <div className={styles.alert__success}>
              <BiCheckShield className={styles.icon} />
              Giao dịch thành công!
            </div>
          )}
          {result === "failure" && (
            <div className={styles.alert__error}>
              <VscError className={styles.icon} />
              Giao dịch thất bại!
            </div>
          )}
        </div>
        <button className={styles.backCart} onClick={() => router.push("/tai-khoan/gio-hang")}>
          Trở về Giỏ hàng
        </button>
      </section>
    </div>
  );
};

export default ReturnVnPay;
