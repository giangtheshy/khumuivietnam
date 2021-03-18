import React from 'react'
import Link from "next/link";
import Logo from "../../utils/components/Logo/Logo";
import { VscInfo } from "react-icons/vsc";
import { CgAppleWatch } from "react-icons/cg";
import { GrContactInfo } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";

import styles from './Header.module.scss';
const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.logoSection}>
          <Logo />
        </div>
        <div className={styles.navCenter}>
          <form>
            <input type="text" name="search" placeholder="Bạn cần tìm gì ..." className={styles.input} />
          </form>
          <nav className={styles.navBar}>
            <Link href="/about" className={styles.itemNav}>
              <a>
                <VscInfo />
                Giới Thiệu
              </a>
            </Link>
            <Link href="/products" className={styles.itemNav}>
              <a>
                <CgAppleWatch />
                Sản Phẩm
              </a>
            </Link>
            <Link href="#contact" className={styles.itemNav}>
              <a>
                <GrContactInfo />
                Liên Hệ
              </a>
            </Link>

            <a className={styles.itemNav}>
              <FaRegUser />
              Tài Khoản
            </a>
          </nav>
        </div>
      </header>
  )
}

export default Header
