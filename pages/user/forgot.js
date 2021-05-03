import React, { useState } from "react";
import * as apis from "apis";
import BackLink from "utils/components/BackLink/BackLink";
import Meta from "components/Meta";
import Input from "utils/components/Input/Input";
import Button from "utils/components/Button/Button";
import styles from "scss/Account/token.module.scss";
import Alert from "components/Modal/Alert/Alert";
import withAuth from "utils/HOC/withAuth";

const ForgotPassword = () => {
  const [value, setValue] = useState("");
  const [alert, setAlert] = useState({ message: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value !== "") {
      try {
        const { data } = await apis.forgot({ email: value });
        setAlert({ message: data.message, type: "success" });
        setValue("");
      } catch (error) {
        setAlert({ message: error.response.data.message, type: "error" });
      }
    }
  };
  return (
    <div className={styles.tokenContainer}>
      <Meta title="Yêu cầu lấy lại mật khẩu bằng email" />
      <BackLink
        list={[
          { href: "/", text: "Trang chủ" },
          { href: "/tai-khoan", text: "Tài khoản" },
        ]}
      />
      <Alert show={alert.message} setShow={setAlert} type={alert.type} message={alert.message} />
      <section className={styles.token}>
        <div className={styles.token__left}>
          <div className={styles.token__left_header}>
            <h1>Lấy lại mật khẩu bằng Email</h1>
          </div>
          <div className={styles.token__left_content}>
            {/* <div className={styles.alert__error}>{alert.message}</div> */}
            <form onSubmit={handleSubmit} className={styles.form}>
              <Input
                type="email"
                name="email"
                id="email"
                label="Nhập địa chỉ email của bạn"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Email address"
              />
              <Button type="submit" label="Xác nhận">
                Xác nhận
              </Button>
            </form>
          </div>
        </div>
        <div className={styles.token__right}></div>
      </section>
    </div>
  );
};

export default withAuth(ForgotPassword);
