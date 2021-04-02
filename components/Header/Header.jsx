import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../../utils/components/Logo/Logo";
import { VscInfo } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import { GiBottledBolt } from "react-icons/gi";
import { MdContactPhone } from "react-icons/md";
import { FaRegUser, FaSignInAlt, FaSignOutAlt, FaBars } from "react-icons/fa";

import styles from "./Header.module.scss";
const Header = () => {
  const [showBar, setShowBar] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setShowBar(false);
  }, [router.pathname]);
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <Logo />
      </div>
      <button className={styles.btnBar} onClick={() => setShowBar(!showBar)}>
        <FaBars />
      </button>
      <div className={`${styles.navCenter}  ${showBar ? styles.show : ""}`}>
        <form className={styles.form}>
          <label htmlFor="search" className={styles.iconSearch}>
            <FiSearch />
          </label>
          <input id="search" type="text" name="search" placeholder="Bạn cần tìm gì ..." className={styles.input} />
        </form>
        <nav className={styles.navBar}>
          <Link href="/gioi-thieu" className={styles.itemNav}>
            <button>
              <VscInfo className={styles.icon} />
              Giới Thiệu
            </button>
          </Link>
          <Link href="/san-pham" className={styles.itemNav}>
            <button>
              <GiBottledBolt className={styles.icon} />
              Sản Phẩm
            </button>
          </Link>
          <Link href="#contact" className={styles.itemNav}>
            <button>
              <MdContactPhone className={styles.icon} />
              Liên Hệ
            </button>
          </Link>

          <div className={styles.itemNav}>
            <FaRegUser className={styles.icon} />
            Tài Khoản
            <div className={styles.accountDetails}>
              <button className={styles.loginBtn} onClick={() => router.push("/tai-khoan/dang-nhap")}>
                <FaSignInAlt className={styles.icon} />
                Đăng Nhập
              </button>
              <button className={styles.registerBtn} onClick={() => router.push("/tai-khoan/dang-ky")}>
                <FaSignOutAlt className={styles.icon} />
                Đăng Ký
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
