import React from 'react'
import styles from '../scss/About.module.scss';
import BackLink from '../utils/components/BackLink/BackLink';
import Meta from '../components/Meta';
import { FaFacebook } from 'react-icons/fa';
const About = () => {

  return (
    <div className={styles.about}>
      <Meta title="Giới thiệu về trang web thương mại điện tử khumuivietnam.com" />
      <BackLink list={[{ href: '/', text: "Trang chủ" }, { href: '/gioi-thieu', text: "Giới thiệu" }]} />
      <section className={styles.content}>
        <div className={styles.header}>
          <h1>Thành viên sáng lập trang web khumuivietnam.com</h1>
        </div>
        <article className={styles.adminAbout}>
          <div className={styles.img}>
            <a href="https://www.facebook.com/ntg.uit/" className={styles.icon}><FaFacebook /></a><img src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.6435-9/64480985_174753053535727_5230158255329640448_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=m6PnEQ8YpZgAX8Fc9CO&_nc_ht=scontent.fvca1-2.fna&oh=488c0819cd39d32204ff99117c3d55e8&oe=608FDB42" alt="avatar" /></div>
          <div className={styles.detail}>
            <h2>Giang Nguyễn</h2>
            <p className={styles.major}>Nghành Công Nghệ Thông Tin</p>
            <p className={styles.description}>Hiện là sinh viên năm 3 của trường đại học Công Nghệ Thông Tin - DHQG TP.HCM</p>
          </div>
        </article>
        <article className={styles.adminAbout}>
          <div className={styles.img}>
            <a href="https://www.facebook.com/pew520" className={styles.icon}><FaFacebook /></a><img src="https://scontent.fvca1-1.fna.fbcdn.net/v/t1.6435-1/p200x200/148402313_758375165098987_3398080642301890434_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=36JeSyo5vVgAX-4rsnr&_nc_ht=scontent.fvca1-1.fna&tp=6&oh=31e79050297f4f11750641da23b3032c&oe=608EFC5D" alt="avatar" /></div>
          <div className={styles.detail}>
            <h2>Giang Phan Xuân</h2>
            <p className={styles.major}>Nghành Công Nghệ Thông Tin</p>
            <p className={styles.description}>Hiện là sinh viên năm 3 của trường đại học Công Nghệ Thông Tin - DHQG TP.HCM</p>
          </div>
        </article>
        <article className={styles.adminAbout}>
          <div className={styles.img}>
            <a href="https://www.facebook.com/duchai.4320" className={styles.icon}><FaFacebook /></a><img src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.6435-9/32079207_105511680323328_766840078256308224_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=tY0enHzMd5kAX8JjQOV&_nc_oc=AQnnsDbzDJMj7y4Wy5mHZZDL_jU9nW0IBi44_dU5xGBgtypyHuh4lLI44kJgi7ZR9FY&_nc_ht=scontent.fvca1-2.fna&oh=d72f029885f74b207cb169346c917ed9&oe=609061B7" alt="avatar" /></div>
          <div className={styles.detail}>
            <h2>Đức Hải</h2>
            <p className={styles.major}>Nghành Công Nghệ Thông Tin</p>
            <p className={styles.description}>Hiện là sinh viên năm 3 của trường đại học Công Nghệ Thông Tin - DHQG TP.HCM</p>
          </div>
        </article>
        <article className={styles.adminAbout}>
          <div className={styles.img}>
            <a href="https://www.facebook.com/thanhduy.ha.330" className={styles.icon}><FaFacebook /></a><img src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/148951553_1606838936190337_7836660700852542519_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_ohc=9eNrZudcJEsAX-JrBY1&_nc_oc=AQlTfchH_Ix4gsZfBxwAZmH9Vh-UKpf5QvFEbLIZIwHudMTU6CwPnp_lRxSD34LeYzY&_nc_ht=scontent.fvca1-2.fna&tp=6&oh=4b991a16a75bfcf99719026fad75d687&oe=6090F775" alt="avatar" /></div>
          <div className={styles.detail}>
            <h2>Thanh Duy</h2>
            <p className={styles.major}>Nghành Công Nghệ Thông Tin</p>
            <p className={styles.description}>Hiện là sinh viên năm 3 của trường đại học Công Nghệ Thông Tin - DHQG TP.HCM</p>
          </div>
        </article>
        <article className={styles.adminAbout}>
          <div className={styles.img}>
            <a href="https://www.facebook.com/profile.php?id=100012137532323" className={styles.icon}><FaFacebook /></a><img src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/39987092_568936970187549_638613400137498624_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_ohc=ooIQQBOQPCgAX_5h_r0&_nc_ht=scontent.fvca1-2.fna&tp=6&oh=b094304fc0f1800f859911df06fb5431&oe=6091080D" alt="avatar" /></div>
          <div className={styles.detail}>
            <h2>Đạt Nguyễn</h2>
            <p className={styles.major}>Nghành Công Nghệ Thông Tin</p>
            <p className={styles.description}>Hiện là sinh viên năm 3 của trường đại học Công Nghệ Thông Tin - DHQG TP.HCM</p>
          </div>
        </article>

      </section>
    </div>
  )
}

export default About
