import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Search.module.scss";
import convert from "../../utils/functions/convertLink";
import { CgFileDocument } from "react-icons/cg";

const Posts = ({ posts, setSearch }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      {posts?.map(
        (post, index) =>
          index < 5 && (
            <article className={styles.item} key={post._id}>
              <h4
                onClick={() => {
                  setSearch("");
                  router.push(`/bai-viet/${convert(post.title)}`);
                }}
              >
                <CgFileDocument /> {post.title}
              </h4>
            </article>
          )
      )}
    </div>
  );
};

export default Posts;
