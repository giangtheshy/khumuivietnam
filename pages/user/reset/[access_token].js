import React, { useState } from "react";
import { useRouter } from "next/router";
import * as apis from "../../../apis";
import Meta from "../../../components/Meta";
import BackLink from "../../../utils/components/BackLink/BackLink";
import styles from "../../../scss/Account/token.module.scss";
import Input from "../../../utils/components/Input/Input";
import Button from "../../../utils/components/Button/Button";
import Alert from "../../../components/Modal/Alert/Alert";

const ResetPassword = () => {
  const [data, setData] = useState({ password: "", cf_password: "" });
  const [alert, setAlert] = useState({ message: "", type: "" });
  const { password, cf_password } = data;
  const router = useRouter();
  const { access_token } = router.query;
  const handleChangeInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== "" && cf_password !== "") {
      if (password === cf_password) {
        try {
          const res = await apis.reset({ password: data.password }, access_token);
          setAlert({ message: res.data.message, type: "success" });
          setData({ password: "", cf_password: "" });
          router.push("/tai-khoan/dang-nhap");
        } catch (error) {
          setAlert({ message: error.response?.data?.message, type: "error" });
        }
      } else {
        setAlert({ message: "Mật khẩu xác nhận không khớp.", type: "warning" });
      }
    } else {
      setAlert({ message: "Không thể bỏ trống password", type: "warning" });
    }
  };
  return (
    <div className={styles.tokenContainer}>
      <Meta title="Bạn đã xác nhận email để lấy lại mật khẩu!" />
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
            <h1>Cập nhật mật khẩu ngay</h1>
          </div>
          <div className={styles.token__left_content}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <Input
                label="Password"
                type="password"
                name="password"
                value={password}
                placeholder="Nhập password"
                onChange={handleChangeInput}
              />
              <Input
                label="Xác nhận password"
                type="password"
                name="cf_password"
                value={cf_password}
                onChange={handleChangeInput}
                placeholder="Xác nhận lại password"
              />
              <Button type="submit" label="Cập nhật ngay">
                Cập nhật ngay
              </Button>
            </form>
          </div>
        </div>
        <div className={styles.token__right}></div>
      </section>
    </div>
  );
};

export default ResetPassword;
