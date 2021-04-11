import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { BiCheckShield } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import * as apis from "../../../apis";
import Meta from "../../../components/Meta";
import BackLink from "../../../utils/components/BackLink/BackLink";
import styles from "../../../scss/Account/token.module.scss";

const Activation = () => {
  const [alert, setAlert] = useState({ error: "", success: "" });

  const router = useRouter();
  const { activation_token } = router.query;

  useEffect(() => {
    if (activation_token) {
      const activation = async () => {
        try {
          const { data } = await apis.activationToken(activation_token);
          setAlert({ error: "", success: data.message });
        } catch (error) {
          error.response.data.message && setAlert({ success: "", error: error.response.data.message });
        }
      };
      activation();
    }
  }, [activation_token]);
  return (
    <div className={styles.tokenContainer}>
      <Meta title="Xác thực địa chỉ Email" />
      <BackLink
        list={[
          { href: "/", text: "Trang chủ" },
          { href: "/tai-khoan", text: "Tài khoản" },
        ]}
      />
      <section className={styles.token}>
        <div className={styles.token__left}>
          <div className={styles.token__left_header}>
            <h1>Xác thực địa chỉ Email</h1>
          </div>
          <div className={styles.token__left_content}>
            {alert.success && (
              <div className={styles.alert__success}>
                <BiCheckShield className={styles.icon} />
                {alert.success}
              </div>
            )}
            {alert.error && (
              <div className={styles.alert__error}>
                {" "}
                <VscError className={styles.icon} />
                {alert.error}
              </div>
            )}
          </div>
          <div className={styles.token__left_content}></div>
        </div>
        <div className={styles.token__right}></div>
      </section>
    </div>
  );
};

export default Activation;
