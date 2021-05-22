import React, { useState, useEffect } from "react";
import styles from "scss/Admin/Post.module.scss";
import * as apis from "apis";
import RowPost from "components/Table/Row/RowPost";
import LoadingPage from "utils/components/LoadingPage/LoadingPage";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await apis.getPosts();
      setPosts(data);
    };

    fetchPosts();
  }, []);
  if (!posts.length) return <LoadingPage />;
  return (
    <div className={styles.user_admin}>
      <div className={styles.manager__right}>
        <div className={styles.manager__right_header}>
          <h3>Bài viết đã đăng ( {posts.length})</h3>
        </div>
        <div className={styles.manager__right_content}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.table__header}>
                <th>STT</th>
                <th>Tiêu đề</th>
                <th>Ngày đăng</th>

                <th>Sửa</th>
                <th>Xóa</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <RowPost
                  post={post}
                  key={post._id}
                  index={index}
                  actions={(id, role) =>
                    setPosts(posts.map((post) => (post._id === id ? { ...post, role: role } : post)))
                  }
                  deleteActions={(id) => setPosts(posts.filter((post) => post._id !== id))}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Post;
