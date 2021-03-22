import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../../utils/components/Logo/Logo";
import { VscInfo } from "react-icons/vsc";
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
        <form>
          <input type="text" name="search" placeholder="Bạn cần tìm gì ..." className={styles.input} />
        </form>
        <nav className={styles.navBar}>
          <Link href="/about" className={styles.itemNav}>
            <button>
              <VscInfo />
              Giới Thiệu
            </button>
          </Link>
          <Link href="/products" className={styles.itemNav}>
            <button>
              <GiBottledBolt />
              Sản Phẩm
            </button>
          </Link>
          <Link href="#contact" className={styles.itemNav}>
            <button>
              <MdContactPhone />
              Liên Hệ
            </button>
          </Link>

          <div className={styles.itemNav}>
            <FaRegUser />
            Tài Khoản
            <div className={styles.accountDetails}>
              <button className={styles.loginBtn} onClick={() => router.push("/dang-nhap")}>
                <FaSignInAlt />
                Đăng Nhập
              </button>
              <button className={styles.registerBtn} onClick={() => router.push("/dang-ky")}>
                <FaSignOutAlt />
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
