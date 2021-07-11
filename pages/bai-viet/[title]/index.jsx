import React, { useEffect } from "react";
import Link from "next/link";
import { wrapper } from "../../../store/store";
import * as apis from "../../../apis";
import * as types from "../../../store/types";
import styles from "../../../scss/Post/Post.module.scss";
import BackLink from "../../../utils/components/BackLink/BackLink";
import Meta from "../../../components/Meta";
import Events from "../../../components/Banner/Events/Events";
import convert from "../../../utils/functions/convertLink";

const Post = ({ post, posts }) => {
  if (!post) return <h2>Page not found</h2>;
  const date = new Date(post?.createdAt);
  return (
    <div className={styles.post}>
      <Meta
        title={`${post.title} | khumuivietnam.com`}
        description={post.description}
        keywords={`${post.title} ,${post?.keywords},khu mui viet nam`}
      />
      <BackLink
        list={[
          { href: "/", text: "Trang chủ" },
          { href: "/bai-viet", text: "Bài viết" },
          {
            href: `/bai-viet/${convert(post.title)}`,
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
            <p dangerouslySetInnerHTML={{ __html: post.introduce }}></p>
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
                        <img
                          src={article.image.replace("/image/upload/", "/image/upload/c_scale,h_400,w_500/")}
                          alt={article.heading}
                          title={article.heading}
                        />
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
  const res = await apis.getPosts();
  const posts = await res.data;
  store.dispatch({ type: types.GET_PROPS_POST, payload: { post: data, posts: posts } });

  return {
    props: { post: store.getState().post.post, posts: store.getState().post.posts },
    revalidate: 60 * 1000 * 60,
  };
});
export const getStaticPaths = async () => {
  const { data } = await apis.getPosts();
  const paths = data.map((post) => ({
    params: {
      title: convert(post.title),
    },
  }));
  return { paths, fallback: true };
};
export default Post;
