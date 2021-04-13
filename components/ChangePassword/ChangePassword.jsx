import React, { useState } from "react";
import * as apis from "apis";
import styles from "./ChangePassword.module.scss";
import Input from "utils/components/Input/Input";
import Button from "utils/components/Button/Button";
import Alert from "components/Modal/Alert/Alert";

const ChangePassword = ({ token }) => {
  const [value, setValue] = useState({ password: "", cf_password: "" });
  const [mess, setMess] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value.password === value.cf_password && value.password !== "") {
      try {
        const { data } = await apis.reset({ password: value.password }, token);
        setMess({ message: data.message, type: "success" });
        setValue({ password: "", cf_password: "" });
      } catch (error) {
        setMess({ message: error.response.data.message, type: "error" });
      }
    } else {
      setMess({ message: "Mật khẩu phải khớp và không thể trống", type: "warning" });
    }
  };
  return (
    <div className={styles.content}>
      <Alert show={mess.message} setShow={setMess} type={mess.type} message={mess.message} />
      <form onSubmit={handleSubmit}>
        <Input
          type="password"
          placeholder="Nhập password"
          label="Mật khẩu mới"
          value={value.password}
          name="password"
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Xác nhận password"
          label="Xác nhận mật khẩu"
          value={value.cf_password}
          name="cf_password"
          onChange={handleChange}
        />
        <label className={styles.note}>
          <sup>*</sup>Lưu ý: Nếu bạn thay đổi mật khẩu sẽ không thể dùng chức năng đăng nhập bằng google hoặc facebook
        </label>
        <Button type="submit" label="Thay đổi">
          Thay đổi
        </Button>
      </form>
    </div>
  );
};

export default ChangePassword;
