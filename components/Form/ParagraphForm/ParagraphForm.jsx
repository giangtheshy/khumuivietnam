import React from "react";
import styles from "./ParagraphForm.module.scss";
import ContentForm from "../ContentForm/ContentForm";
import Input from "utils/components/Input/Input";
import Button from "utils/components/Button/Button";

const ParagraphForm = ({
  content,
  handleAddContent,
  index,
  handleChangeTitleParagraph,
  handleChangeItem,
  handleChangeImage,
}) => {
  return (
    <div className={styles.paragraph_form}>
      <Input
        type="text"
        value={content?.title}
        onChange={(e) => handleChangeTitleParagraph(e, index)}
        label="Tiêu đề đoạn văn"
        name="title"
      />
      <div className={styles.content_container}>
        {content?.content.map((item, id) => {
          return (
            <ContentForm
              key={id}
              idPara={index}
              index={id}
              item={item}
              handleChangeItem={handleChangeItem}
              handleChangeImage={handleChangeImage}
            />
          );
        })}
      </div>
      <button className={styles.btn_para} type="button" onClick={() => handleAddContent(index)}>
        Thêm nội dung
      </button>
    </div>
  );
};

export default ParagraphForm;
