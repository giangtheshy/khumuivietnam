import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import * as apis from "../../apis";
import { searchProducts } from "../../store/actions/product.action";
import Logo from "../../utils/components/Logo/Logo";
import { VscInfo } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegUser, FaSignInAlt, FaSignOutAlt,FaUserPlus, FaBars, FaListAlt } from "react-icons/fa";
import { GiBottledBolt } from "react-icons/gi";
import { MdContactPhone } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { ImHeart } from "react-icons/im";
import { RiUserReceivedLine, RiAdminLine } from "react-icons/ri";

import Loading from "../../utils/components/Loading/Loading";
import Products from "../SearchBox/Products";
import Posts from "../SearchBox/Posts";
import styles from "./Header.module.scss";
const Header = () => {
  const [showBar, setShowBar] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const user = useSelector((state) => state.user.user);
  const searchData = useSelector((state) => state.product.search);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    setShowBar(false);
  }, [router.pathname]);
  useEffect(() => {
    if (search) {
      dispatch(searchProducts(search, setLoadingSearch));
    }
  }, [search]);
  const logout = async () => {
    try {
      await apis.logout();
      localStorage.removeItem("firstLogin");
      window.location.href = "/";
    } catch (error) {
      console.error(error);
      window.location.href = "/";
    }
  };
  const HandleScrollFooter = () => {
    window.scrollTo(0, 100000);
  };
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <header className={styles.header} id="header">
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
          <input
            id="search"
            type="text"
            name="search"
            placeholder="Bạn cần tìm gì ..."
            className={styles.input}
            value={search}
            onChange={handleChangeSearch}
          />
          {search && (
            <div className={styles.searchBox}>
              {loadingSearch ? (
                <h2 style={{ textAlign: "center" }}>
                  <Loading />
                </h2>
              ) : (
                <>
                  <h3>Bài viết : </h3>
                  <Posts posts={searchData.posts} setSearch={setSearch} />
                  <h3>Sản phẩm :</h3>
                  <Products products={searchData.products} setSearch={setSearch} />
                </>
              )}
            </div>
          )}
        </form>
        <nav className={styles.navBar}>
          <Link href="/gioi-thieu">
            <button className={styles.btnNav}>
              <VscInfo className={styles.icon} />
              Giới Thiệu
            </button>
          </Link>
          <Link href="/san-pham">
            <button className={styles.btnNav}>
              <GiBottledBolt className={styles.icon} />
              Sản Phẩm
            </button>
          </Link>
          {/* <Link> */}
          <button className={styles.btnNav} onClick={HandleScrollFooter}>
            <MdContactPhone className={styles.icon} />
            Liên Hệ
          </button>
          {/* </Link> */}

          {!user ? (
            <div className={styles.itemNav} onClick={() => setShowDropDown(!showDropDown)}>
              <button className={styles.btnNav}>
                <FaRegUser className={styles.icon} />
                Tài Khoản
              </button>
              {showDropDown && (
                <div className={styles.accountDetails}>
                  <button className={styles.__btn} onClick={() => router.push("/tai-khoan/dang-nhap")}>
                    <FaSignInAlt className={styles.icon2} />
                    Đăng Nhập
                  </button>
                  <button className={styles.__btn} onClick={() => router.push("/tai-khoan/dang-ky")}>
                    <FaUserPlus className={styles.icon2} />
                    Đăng Ký
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className={styles.itemNav} onClick={() => setShowBox(!showBox)}>
              <button className={styles.btnNav}>
                <img
                  src={user?.avatar.replace("/image/upload/", "/image/upload/c_scale,h_40,w_40/")}
                  alt="avatar | khumuivietnam.com"
                  className={styles.avatar}
                />

                <span className={styles.userName}>{user?.name}</span>
                <IoMdArrowDropdown className={styles.btnNav__icon} />
              </button>
              {showBox && (
                <div className={styles.accountBox}>
                  <button className={styles.__btn} onClick={logout}>
                    <HiOutlineLogout className={styles.icon} />
                    Đăng xuất
                  </button>
                  {user?.role ? (
                    <button className={styles.__btn} onClick={() => router.push("/tai-khoan/quan-ly")}>
                      <FaListAlt className={styles.icon} />
                      Bán hàng
                    </button>
                  ) : (
                    <></>
                  )}
                  {user?.role > 1 ? (
                    <button className={styles.__btn} onClick={() => router.push("/admin")}>
                      <RiAdminLine className={styles.icon} />
                      Admin
                    </button>
                  ) : (
                    <></>
                  )}

                  <button className={styles.__btn} onClick={() => router.push("/tai-khoan/yeu-thich")}>
                    <ImHeart className={styles.icon} />
                    Yêu thích
                  </button>
                  <button className={styles.__btn} onClick={() => router.push("/tai-khoan")}>
                    <RiUserReceivedLine className={styles.icon} />
                    Cá nhân
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
