import React, { useState } from "react";
import styles from "./Content.module.scss";
import Input from "utils/components/Input/Input";
import File from "utils/components/File/File";

const ContentForm = ({ item, handleChangeItem, index, idPara, handleChangeImage }) => {
  const [showURL, setShowURL] = useState(false);

  const handleChangeFile = (e, id) => {
    const file = e.target.files[0];

    try {
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          handleChangeImage(reader.result.toString(), id, index);
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
    <div className={styles.content_form}>
      <Input
        type="text"
        name="heading"
        value={item.heading}
        onChange={(e) => handleChangeItem(e, idPara, index)}
        label="Tên nội dung"
      />
      <Input
        type="text"
        name="link"
        value={item.link}
        onChange={(e) => handleChangeItem(e, idPara, index)}
        label="Liên kết"
      />

      <label htmlFor={`text${idPara}${index}`} className={styles.areaLabel}>
        <span className="bold" style={{ fontSize: 14 }}>
          Văn bản<sup className="bold clr-main">*</sup>
        </span>

        <textarea
          name="text"
          id={`text${idPara}${index}`}
          value={item.text}
          onChange={(e) => handleChangeItem(e, idPara, index)}
          placeholder="Để xuống dòng làm ơn dùng thẻ <br/> hoặc <br/><br/>"
        ></textarea>
      </label>
      {showURL && (
        <Input
          type="text"
          name="image"
          label="Ảnh đại diện của nội dung"
          value={item.image}
          onChange={(e) => handleChangeItem(e, idPara, index)}
        />
      )}
      <button type="button" className={styles.btn_url} onClick={() => setShowURL(!showURL)}>
        Thêm image bằng URL
      </button>
      <File name="image" onChange={(e) => handleChangeFile(e, idPara)} id={`image${idPara}${index}`} />
    </div>
  );
};

export default ContentForm;
