import React from "react";
import styles from "../scss/About.module.scss";
import BackLink from "../utils/components/BackLink/BackLink";
import Meta from "../components/Meta";
import { FaFacebook } from "react-icons/fa";
const About = () => {
  return (
    <div className={styles.about}>
      <Meta title="Giới thiệu về trang web thương mại điện tử khumuivietnam.com" />
      <BackLink
        list={[
          { href: "/", text: "Trang chủ" },
          { href: "/gioi-thieu", text: "Giới thiệu" },
        ]}
      />
      <section className={styles.content}>

        <div className={styles.header}>
          <h1>Thành viên sáng lập trang web khumuivietnam.com</h1>
        </div>
        <article className={styles.adminAbout}>
          <div className={styles.img}>
            <a href="https://www.facebook.com/ntg.uit/" className={styles.icon}>
              <FaFacebook />
            </a>
            <img
              src="https://res.cloudinary.com/giangtheshy/image/upload/v1621583528/dev/khumuivietnam/ozruevhs7jtlb8jrtsum.jpg"
              alt="avatar"
            />
          </div>
          <div className={styles.detail}>
            <h2>Giang Nguyễn</h2>
            <p className={styles.major}>Nghành Công Nghệ Thông Tin</p>
            <p className={styles.description}>
              Hiện là sinh viên năm 3 của trường đại học Công Nghệ Thông Tin - DHQG TP.HCM
            </p>
          </div>
        </article>
        <article className={styles.adminAbout}>
          <div className={styles.img}>
            <a href="https://www.facebook.com/pew520" className={styles.icon}>
              <FaFacebook />
            </a>
            <img
              src="https://res.cloudinary.com/giangtheshy/image/upload/v1621583395/dev/khumuivietnam/sql87tfue8gakjpevzea.jpg"
              alt="avatar"
            />
          </div>
          <div className={styles.detail}>
            <h2>Giang Phan Xuân</h2>
            <p className={styles.major}>Nghành Công Nghệ Thông Tin</p>
            <p className={styles.description}>
              Hiện là sinh viên năm 3 của trường đại học Công Nghệ Thông Tin - DHQG TP.HCM
            </p>
          </div>
        </article>
        <article className={styles.adminAbout}>
          <div className={styles.img}>
            <a href="https://www.facebook.com/duchai.4320" className={styles.icon}>
              <FaFacebook />
            </a>
            <img
              src="https://res.cloudinary.com/giangtheshy/image/upload/v1621583421/dev/khumuivietnam/p3tm7ay50d7jnqx26zfd.jpg"
              alt="avatar"
            />
          </div>
          <div className={styles.detail}>
            <h2>Đức Hải</h2>
            <p className={styles.major}>Nghành Công Nghệ Thông Tin</p>
            <p className={styles.description}>
              Hiện là sinh viên năm 3 của trường đại học Công Nghệ Thông Tin - DHQG TP.HCM
            </p>
          </div>
        </article>
        <article className={styles.adminAbout}>
          <div className={styles.img}>
            <a href="https://www.facebook.com/thanhduy.ha.330" className={styles.icon}>
              <FaFacebook />
            </a>
            <img
              src="https://res.cloudinary.com/giangtheshy/image/upload/v1621583449/dev/khumuivietnam/cavyxq4spcfstmyv73ri.jpg"
              alt="avatar"
            />
          </div>
          <div className={styles.detail}>
            <h2>Thanh Duy</h2>
            <p className={styles.major}>Nghành Công Nghệ Thông Tin</p>
            <p className={styles.description}>
              Hiện là sinh viên năm 3 của trường đại học Công Nghệ Thông Tin - DHQG TP.HCM
            </p>
          </div>
        </article>

      </section>
    </div>
  );
};

export default About;
