import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";
import styles from "scss/Admin/CreatePost.module.scss";

import * as apis from "apis";
import { editPost } from "store/actions/post.action";
import File from "utils/components/File/File";
import Input from "utils/components/Input/Input";
import Button from "utils/components/Button/Button";
import Loading from "utils/components/Loading/Loading";
import ParagraphForm from "components/Form/ParagraphForm/ParagraphForm";

const initState = {
  title: "",
  description: "",
  introduce: "",
  keywords: "",
  image: "",
  contents: [],
};
const initContent = { title: "", content: [] };
const initItem = { heading: "", link: "", text: "", image: "" };
const CreatePost = () => {
  const [post, setPost] = useState(initState);
  const [loading, setLoading] = useState(false);
  const [showURL, setShowURL] = useState(false);
  const token = useSelector((state) => state.user.token);
  const edit = useSelector((state) => state.post.edit);

  const dispatch = useDispatch();
  useEffect(() => {
    if (edit) {
      setPost(edit);
    }
    return () => dispatch(editPost(null));
  }, [edit]);
  const handelChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const handleSubmitHeader = async (e) => {
    e.preventDefault();
    console.log(post);
    try {
      if (edit) {
        setLoading(true);
        await apis.updatePost(post, token);
        setLoading(false);
        alert("Cập nhật bài viết thành công");
      } else {
        setLoading(true);
        await apis.createPost(post, token);
        setLoading(false);
        alert("Thêm bài viết thành công");
      }
      setPost(initState);
    } catch (error) {
      setLoading(false);
      alert(error.response.data.message);
    }
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
  const handleAddContent = (id) => {
    setPost({
      ...post,
      contents: post.contents.map((ct, index) => (index === id ? { ...ct, content: [...ct.content, initItem] } : ct)),
    });
  };
  const handleChangeTitleParagraph = (e, id) => {
    setPost({
      ...post,
      contents: post.contents.map((ct, index) => (index === id ? { ...ct, title: e.target.value } : ct)),
    });
  };
  const handleChangeItem = (e, idPara, idItem) => {
    setPost({
      ...post,
      contents: post.contents.map((ct, index) =>
        index === idPara
          ? {
              ...ct,
              content: ct.content.map((item, id) =>
                id === idItem ? { ...item, [e.target.name]: e.target.value } : item,
              ),
            }
          : ct,
      ),
    });
  };
  const handleChangeImage = (value, idPara, idItem) => {
    setPost({
      ...post,
      contents: post.contents.map((ct, index) =>
        index === idPara
          ? {
              ...ct,
              content: ct.content.map((item, id) => (id === idItem ? { ...item, image: value.trim() } : item)),
            }
          : ct,
      ),
    });
  };
  const handleDeleteParagraph = (idDel) => {
    setPost({ ...post, contents: post.contents.filter((_, index) => index !== idDel) });
  };
  const handleDeleteItem = (idDel, id) => {
    setPost({
      ...post,
      contents: post.contents.map((ct, index) =>
        index === id ? { ...ct, content: ct.content.filter((_, indexCt) => indexCt !== idDel) } : ct,
      ),
    });
  };
  return (
    <div className={styles.create_post}>
      <div className={styles.header}>
        <h1 className={styles.header__title}>Thêm bài viết mới</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.create}>
          <div className={styles.create__header}>
            <h4>Thêm cấu trúc bài viết</h4>
          </div>
          <div className={styles.create__content}>
            <div className={styles.form__header}>
              <form onSubmit={handleSubmitHeader}>
                <Input type="text" value={post.title} onChange={handelChange} name="title" label="Tiêu đề bài viết" />
                <Input
                  type="text"
                  value={post.keywords}
                  onChange={handelChange}
                  name="keywords"
                  label="Từ khóa bài viết"
                />
                <label htmlFor="description" className={styles.areaLabel}>
                  <span className="bold" style={{ fontSize: 14 }}>
                    Mô tả bài viết<sup className="bold clr-main">*</sup>
                  </span>

                  <textarea
                    name="description"
                    id="description"
                    value={post.description}
                    onChange={handelChange}
                  ></textarea>
                </label>
                <label htmlFor="introduce" className={styles.areaLabel}>
                  <span className="bold" style={{ fontSize: 14 }}>
                    Giới thiệu bài viết<sup className="bold clr-main">*</sup>
                  </span>

                  <textarea name="introduce" id="introduce" value={post.introduce} onChange={handelChange}></textarea>
                </label>
                {showURL && (
                  <Input
                    type="text"
                    name="image"
                    label="Ảnh đại diện bài viết"
                    value={post.image}
                    onChange={handelChange}
                  />
                )}
                <button type="button" className={styles.btn_url} onClick={() => setShowURL(!showURL)}>
                  Thêm image bằng URL
                </button>
                <File name="image" onChange={handleChangeFile} id="image" />
                <div className={styles.paragraph}>
                  {post.contents.map((content, index) => {
                    return (
                      <ParagraphForm
                        content={content}
                        key={index}
                        index={index}
                        handleChangeTitleParagraph={handleChangeTitleParagraph}
                        handleAddContent={handleAddContent}
                        handleChangeItem={handleChangeItem}
                        handleChangeImage={handleChangeImage}
                      />
                    );
                  })}
                </div>
                <button className={styles.btn_add_para} type="button" onClick={handleAddParagraph}>
                  Thêm đoạn văn
                </button>
                <div className={styles.wrapper_btn}>
                  <Button type="submit" label={loading ? "" : edit ? "Cập nhật" : "Đăng bài viết"}>
                    {loading ? <Loading /> : edit ? "Cập nhật" : "Đăng bài viết"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.preview}>
          <div className={styles.preview__header}>
            <h4>Xem trước bài viết</h4>
          </div>
          <div className={styles.preview__content}>
            <div className={styles.search_google}>
              <h3 className={styles.search_google__title}>Nội dung hiển thị khi copy link</h3>
              <div className={styles.search_google__content}>
                <h3 className={styles.title}>{post.title}</h3>
                <div className={styles.content}>
                  <img src={post.image} alt={post.title} />
                  <p className={styles.description}>{post.description}</p>
                </div>
              </div>
            </div>
            <div className={styles.postCenter}>
              <div className={styles.header}>
                <h1 className={styles.title}>{post.title}</h1>
                <span className={styles.timer}>{`Đăng vào lúc xx-xx-xxxx`}</span>
              </div>
              <div className={styles.introduce}>
                <p>{post.introduce}</p>
              </div>
              {post.contents.map((para, indexPara) => {
                return (
                  <div className={styles.paragraph} key={indexPara}>
                    <button className={styles.delete_btn} onClick={() => handleDeleteParagraph(indexPara)}>
                      <TiDeleteOutline />
                    </button>
                    <h2 className={styles.heading}>{para?.title}</h2>
                    {para?.content.map((article, index) => {
                      return (
                        <article className={styles.paraItem} key={index}>
                          <button className={styles.delete_btn} onClick={() => handleDeleteItem(index, indexPara)}>
                            <TiDeleteOutline />
                          </button>
                          <Link href={article.link}>{article.heading}</Link>
                          <div className={styles.content}>
                            <img src={article.image} alt={article.heading} title={article.heading} />
                            <p className={styles.text} dangerouslySetInnerHTML={{ __html: article.text }}></p>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
