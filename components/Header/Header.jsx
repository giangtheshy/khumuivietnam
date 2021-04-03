import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { logoutUser } from "../../store/actions/user.action";
import Logo from "../../utils/components/Logo/Logo";
import { VscInfo } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import { GiBottledBolt } from "react-icons/gi";
import { MdContactPhone } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { FaRegUser, FaSignInAlt, FaSignOutAlt, FaBars, FaListAlt } from "react-icons/fa";

import styles from "./Header.module.scss";
const Header = () => {
  const [showBar, setShowBar] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [_, setCookies] = useCookies(["user"]);
  const user = useSelector((state) => state.user.user?.user);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    setShowBar(false);
  }, [router.pathname]);
  const logout = async () => {
    await setCookies("user", "", { path: "/" });
    dispatch(logoutUser());
  };
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

          {!user ? (
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
          ) : (
            <div className={styles.itemNav} onClick={() => setShowBox(!showBox)}>
              <img
                src={user?.photoURL.replace("/image/upload/", "/image/upload/c_scale,h_40,w_40/")}
                alt="avatar | khumuivietnam.com"
                className={styles.avatar}
              />
              <span className={styles.userName}>{user?.displayName}</span>
              {showBox && (
                <div className={styles.accountBox}>
                  <button className={styles.logout} onClick={logout}>
                    <HiOutlineLogout className={styles.icon} />
                    Đăng xuất
                  </button>
                  <button className={styles.history}>
                    <FaListAlt className={styles.icon} />
                    Đã mua
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
