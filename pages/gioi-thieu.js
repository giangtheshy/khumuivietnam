import React from 'react'
import styles from '../scss/About.module.scss';
import BackLink from '../utils/components/BackLink/BackLink';
const About = () => {
  const str = "<p className='bold clr-main'>day la <br/>title string</p><p className={styles.description}>day la description string</p>"
  return (
    <div className={styles.about}>
      <BackLink list={[{ href: '/', text: "Trang chủ" }, { href: '/gioi-thieu', text: "Giới thiệu" }]} />
      <h1>Đây là trang web để thực hành đồ án môn học của nhóm tụi mình</h1>
      <p className="bold clr-main">day la title</p>
      <p className={styles.description}>day la description</p>
      <div className={styles.container} dangerouslySetInnerHTML={{ __html: str }}></div>
    </div>
  )
}

export default About
