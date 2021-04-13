import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ChangeAvatar.module.scss";
import File from "utils/components/File/File";
import Button from "utils/components/Button/Button";
import { updateAvatar } from "store/actions/user.action";

const ChangeAvatar = ({ setShowModal }) => {
  const [value, setValue] = useState("");
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      dispatch(updateAvatar({ avatar: value }, token));
      setShowModal(false);
    } else {
      setShowModal(false);
    }
  };
  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    try {
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setValue(reader.result.toString());
        };
        reader.onerror = () => {
          console.error("something went wrong!!!");
        };
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.changeModal}>
      {value && <img src={value} alt="avatar" />}
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>Chọn hình ảnh từ máy của bạn:</label>
        <File name="avatar" onChange={handleChangeFile} id="avatar" />
        <Button type="submit" label={value ? "Thay đổi" : "Hủy"}>
          {value ? "Thay đổi" : "Hủy"}
        </Button>
      </form>
    </div>
  );
};

export default ChangeAvatar;
