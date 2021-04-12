import React, { useState } from "react";
import styles from "./ChangePassword.module.scss";
import Input from "../../utils/components/Input/Input";
import Button from "../../utils/components/Button/Button";

const ChangePassword = () => {
  const [value, setValue] = useState({ password: "", cf_password: "" });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.content}>
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
        <Button type="submit" label="Thay đổi">
          Thay đổi
        </Button>
      </form>
    </div>
  );
};

export default ChangePassword;
