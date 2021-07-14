import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import Logo from "../../utils/components/Logo/Logo";
import { ImLocation } from "react-icons/im";
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { FaInstagramSquare, FaFacebook, FaTwitterSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.topFooter}>
        <div className={styles.left}>
          <Logo width="12rem"/>
          <h2>Khumuivietnam.com</h2>
          <p>Chuyên bán các sản phẩm xịt khử mùi tốt nhất và rẻ nhất</p>
          <p>
            <ImLocation /> Địa chỉ : Phường Linh Trung,Quận Thủ Đức, TP.HCM
          </p>
          <p>
            <FiClock /> Thời gian làm việc : <span className="bold">7h-22h</span> các ngày trong tuần
          </p>
        </div>
        <div className={styles.centerRight}>
          <div className={styles.center}>
            <Link href="/" className={styles.itemLink}>
              Trang chủ
            </Link>
            <Link href="/gioi-thieu" className={styles.itemLink}>
              Giới thiệu
            </Link>
            <Link href="/san-pham" className={styles.itemLink}>
              Sản phẩm
            </Link>
            <Link href="/bai-viet" className={styles.itemLink}>
              Bài viết
            </Link>
          </div>
          <div className={styles.right}>
            <p>
              <HiPhone /> Tổng đài: <span className="bold clr-main">1900 1001</span>
            </p>
            <p>
              <HiPhone /> Điện thoại: <span className="bold clr-main">0326245445</span>
            </p>
            <p>
              <MdEmail /> Email: <span className="bold clr-main">admindater@khumuivietnam.com</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.botFooter}>
        <p>Kết nối với chúng tôi</p>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/SEO-Everything-111885114330912">
            <FaFacebook className={`${styles.icon} ${styles.facebook}`} /> Facebook
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagramSquare className={`${styles.icon} ${styles.instagram}`} /> Instagram
          </a>
          <a href="https://twitter.com/">
            <FaTwitterSquare className={`${styles.icon} ${styles.twitter}`} /> Twitter
          </a>
          <a href="https://www.youtube.com/">
            <FaYoutube className={`${styles.icon} ${styles.youtube}`} /> Youtube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
