import React, { useState } from "react";
import Input from "../../../utils/components/Input/Input";
import styles from "./InputUrl.module.scss";

const InputUrl = ({ setShowModal, handleAddImageUrl }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      handleAddImageUrl(value);
      setShowModal(false);
    } else {
      alert("URL không thể để trống!");
    }
  };
  return (
    <div className={styles.url}>
      <form className={styles.form}>
        <Input
          name="url"
          value={value}
          onChange={handleChange}
          type="text"
          placeholder="Nhập đường dẫn hình ảnh từ website..."
          label="Đường dẫn hình ảnh"
        />
        <button className={styles.btn} type="button" onClick={handleSubmit}>
          Thêm ngay
        </button>
        <button className={styles.btn} type="button" onClick={() => setShowModal(false)}>
          Đóng
        </button>
      </form>
    </div>
  );
};

export default InputUrl;
