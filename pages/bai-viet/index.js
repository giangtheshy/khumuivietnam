import React from 'react'
import styles from '../../scss/Post/Posts.module.scss';
import BackLink from '../../utils/components/BackLink/BackLink';

const Posts = () => {
  return (
    <div className={styles.posts}>
      <BackLink list={[{ href: '/', text: "Trang chủ" }, { href: '/bai-viet', text: "Bài viết" }]} />
    </div>
  )
}

export default Posts
