import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { wrapper } from "../../store/store";
import * as apis from "../../apis";
import * as types from "../../store/types";
import styles from "../../scss/Post/Posts.module.scss";
import BackLink from "../../utils/components/BackLink/BackLink";
import Events from "../../components/Banner/Events/Events";
import convertLink from "../../utils/functions/convertLink";
import Meta from "../../components/Meta";

const Posts = ({ posts }) => {
  const router = useRouter();

  return (
    <div className={styles.posts}>
      <Meta
        keywords="khumuivietnam.com,khumuivietnam shop,khử mùi việt nam, khumuivietnam, xịt khử mùi nam, xịt khử mùi nữ, xịt khử mùi,review xịt khử mùi,đánh giá xịt khử mùi,khumui vietnam"
        title="Toàn bộ các bài viết về những sản phẩm nổi bật trên toàn quốc| khumuivietnam.com"
      />
      <BackLink
        list={[
          { href: "/", text: "Trang chủ" },
          { href: "/bai-viet", text: "Bài viết" },
        ]}
      />
      <section className={styles.postsWrapper}>
        <div className={styles.postsCenter}>
          <div className={styles.header}>
            <h1>Toàn bộ bài viết của khumuivietnam.com</h1>
          </div>
          <div className={styles.postsContainer}>
            {posts.map((post) => {
              const date = new Date(post.createdAt);

              return (
                <article
                  className={styles.postCenter}
                  key={post._id}
                  onClick={() => router.push(`/bai-viet/${convertLink(post.title)}`)}
                >
                  <div className={styles.postCenter__image}>
                    <img
                      src={post.image.replace("/image/upload/", "/image/upload/c_scale,h_200,w_300/")}
                      alt={post.title}
                    />
                  </div>
                  <div className={styles.postCenter__detail}>
                    <Link href={`/bai-viet/${convertLink(post.title)}`}>{post.title}</Link>
                    <div className={styles.postCenter__detail_footer}>
                      <p className={styles.description}>{post.introduce}</p>
                      <p className={styles.timer}>{`Đăng vào lúc ${date.getDate()}-${
                        date.getMonth() + 1
                      }-${date.getFullYear()}`}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <aside className={styles.newPosts}>
          <Events posts={posts} />
        </aside>
      </section>
    </div>
  );
};
export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  const { data } = await apis.getPosts();
  store.dispatch({ type: types.GET_POSTS, payload: data });

  return { props: { posts: store.getState().post.posts }, revalidate: 69 * 1000 * 60 };
});

export default Posts;
