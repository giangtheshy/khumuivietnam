import React, { useState } from "react";
import styles from "scss/Admin/CreatePost.module.scss";

import File from "utils/components/File/File";
import Input from "utils/components/Input/Input";
import Button from "utils/components/Button/Button";

const initState = {
  title: "",
  description: "",
  introduce: "",
  image: "",
  contents: [],
};
const initContent = { title: "", content: [] };
const CreatePost = () => {
  const [post, setPost] = useState(initState);

  const handelChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const handleSubmitHeader = (e) => {
    e.preventDefault();
  };
  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    try {
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPost({ ...post, image: reader.result.toString() });
        };
        reader.onerror = () => {
          console.error("something went wrong!!!");
        };
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleAddParagraph = () => {
    setPost({ ...post, contents: [...post.contents, initContent] });
  };
  console.log(post);
  return (
    <div className={styles.create_post}>
      <div className={styles.header}>
        <h1>Thêm bài viết mới</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.create}>
          <div className={styles.create__header}>
            <h4>Thêm cấu trúc bài viết</h4>
          </div>
          <div className={styles.create__content}>
            <div className={styles.form__header}>
              <form onSubmit={handleSubmitHeader}>
                <Input type="text" value={post.title} onChange={handelChange} name="title" label="Title" />
                <Input
                  type="text"
                  value={post.description}
                  onChange={handelChange}
                  name="description"
                  label="Description"
                />
                <Input type="text" value={post.introduce} onChange={handelChange} name="introduce" label="Introduce" />
                <File name="image" onChange={handleChangeFile} id="image" />
                <Button type="button" label="Thêm đoạn văn" onChange={handleAddParagraph}>
                  Thêm đoạn văn
                </Button>
                <Button type="submit" label="Đăng bài viết">
                  Đăng bài viết
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.preview}>
          <div className={styles.preview__header}>
            <h4>Xem trước bài viết</h4>
          </div>
          <div className={styles.preview__content}></div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
