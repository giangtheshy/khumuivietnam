import React from "react";
import Link from "next/link";
import styles from "./Events.module.scss";

const Events = ({ posts }) => {
  return (
    <div className={styles.eventsSection}>
      <div className={styles.eventsCenter}>
        <div className={styles.eventsHeader}>
          <h2>Tin Nỗi Bật</h2>
        </div>
        <div className={styles.eventsContainer}>
          {posts?.map((post) => {
            const date = new Date(post.createdAt);
            return (
              <article className={styles.eventItem} key={post._id}>
                <img src={post.image} alt={post.title} title={post.title} className={styles.eventImg} />
                <div className={styles.eventDetails}>
                  <Link
                    href={`/bai-viet/${post.title
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .replace(/\s+/g, "-")
                      .replace(/đ/g, "d")
                      .replace(/Đ/g, "D")
                      .toLowerCase()}`}
                  >
                    {post.title}
                  </Link>
                  <p className={styles.timer}>{`Ngày đăng ${date.getDate()}-${
                    date.getMonth() + 1
                  }-${date.getFullYear()}`}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;
