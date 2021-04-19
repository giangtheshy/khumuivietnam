import React from "react";
import Link from "next/link";
import styles from "./Events.module.scss";
import convert from "../../../utils/functions/convertLink";

const Events = ({ posts }) => {
  return (
    <div className={styles.eventsSection}>
      <div className={styles.eventsCenter}>
        <div className={styles.eventsHeader}>
          <h2>Tin Nổi Bật</h2>
        </div>
        <div className={styles.eventsContainer}>
          {posts?.map((post) => {
            const date = new Date(post.createdAt);
            return (
              <article className={styles.eventItem} key={post._id}>
                <img src={post.image} alt={post.title} title={post.title} className={styles.eventImg} />
                <div className={styles.eventDetails}>
                  <Link href={`/bai-viet/${convert(post.title)}`}>{post.title}</Link>
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
