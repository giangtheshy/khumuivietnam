import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../store/actions/post.action";
import { wrapper } from "../../../store/store";
import * as apis from "../../../apis";
import * as types from "../../../store/types";
import styles from "../../../scss/Post/Post.module.scss";
import BackLink from "../../../utils/components/BackLink/BackLink";
import Meta from "../../../components/Meta";
import Events from "../../../components/Banner/Events/Events";

const Post = ({ post }) => {
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const date = new Date(post.createdAt);
  return (
    <div className={styles.post}>
      <Meta
        title={`${post.title} | khumuivietnam.com`}
        description={post.description}
        keywords={`${post.title} ,${post.contents.map(
          (item) => `${item.title},`
        )} khumuivietnam.com, khumuivietnam shop`}
      />
      <BackLink
        list={[
          { href: "/", text: "Trang chủ" },
          { href: "/bai-viet", text: "Bài viết" },
          {
            href: `/bai-viet/${post.title
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/\s+/g, "-")
              .replace(/đ/g, "d")
              .replace(/Đ/g, "D")
              .toLowerCase()}`,
            text: post.title,
          },
        ]}
      />
      <section className={styles.postWrapper}>
        <div className={styles.postCenter}>
          <div className={styles.header}>
            <h1 className={styles.title}>{post.title}</h1>
            <span className={styles.timer}>{`Đăng vào lúc ${date.getDate()}-${
              date.getMonth() + 1
            }-${date.getFullYear()}`}</span>
          </div>
          <div className={styles.introduce}>
            <p>{post.introduce}</p>
          </div>
          {post.contents.map((para, index) => {
            return (
              <div className={styles.paragraph} key={index}>
                <h2 className={styles.heading}>{para.title}</h2>
                {para.content.map((article, index) => {
                  return (
                    <article className={styles.paraItem} key={index}>
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
        <aside className={styles.newPost}>
          <Events posts={posts} />
        </aside>
      </section>
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store, params }) => {
  const title = params.title;
  const { data } = await apis.getPost(title);
  store.dispatch({ type: types.GET_POST, payload: data });

  return { props: { post: store.getState().post.post, loading: store.getState().post.loading } };
});
export const getStaticPaths = async () => {
  const { data } = await apis.getPosts();
  const paths = data.map((post) => ({
    params: {
      title: post.title
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .toLowerCase(),
    },
  }));
  return { paths, fallback: false };
};
export default Post;
