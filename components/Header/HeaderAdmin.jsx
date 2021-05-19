import React, { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { AiOutlineSetting } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import styles from "./HeaderAdmin.module.scss";

const HeaderAdmin = ({ isOpenBar, setIsOpenBar }) => {
  const [showProfile, setShowProfile] = useState(false);
  const user = useSelector((state) => state.user.user);
  return (
    <header className={styles.header}>
      <button className={`${styles.btn_bar} ${isOpenBar && styles.show}`} onClick={() => setIsOpenBar(!isOpenBar)}>
        <span className={styles.line}></span>
        <span className={styles.line2}></span>
        <span className={styles.line3}></span>
      </button>
      <div className={styles.left}>
        <button className={styles.profile} onClick={() => setShowProfile(!showProfile)}>
          <img src={user?.avatar} alt="avatar" /> {user?.name}
          <RiArrowDropDownLine className={styles.icon} />
          {showProfile && (
            <div className={styles.drop_down}>
              <Link href="/">Trang Chủ</Link>
              <Link href="/tai-khoan">Cá Nhân</Link>
              <Link href="/tai-khoan/gio-hang">Giỏ Hàng</Link>
            </div>
          )}
        </button>
        <button className={styles.settings}>
          <AiOutlineSetting className={styles.icon} />
        </button>
      </div>
    </header>
  );
};

export default HeaderAdmin;
