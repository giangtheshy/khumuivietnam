import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./SideBar.module.scss";
import { RiHome7Fill, RiBillLine, RiUserSearchLine, RiArrowDropDownLine } from "react-icons/ri";
import { BsListUl } from "react-icons/bs";
import { MdPlaylistAdd } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CgUserList } from "react-icons/cg";
import { VscPreview, VscError } from "react-icons/vsc";
import Logo from "utils/components/Logo/Logo";
import Meta from "components/Meta";

const SideBar = ({ isOpenBar }) => {
  const [active, setActive] = useState("");
  const [activeSub, setActiveSub] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router.pathname.includes("product")) {
      setActive("product");
    } else if (router.pathname.includes("post")) {
      setActive("post");
    } else if (router.pathname.includes("user")) {
      setActive("user");
    } else {
      setActive("home");
    }
    if (router.pathname.includes("/verify")) {
      setActiveSub("verify");
    } else if (router.pathname.includes("/unverify")) {
      setActiveSub("unverify");
    } else if (router.pathname.includes("/request")) {
      setActiveSub("request");
    } else if (router.pathname.includes("/create_post")) {
      setActiveSub("create_post");
    } else {
      setActiveSub("");
    }
  }, [router.pathname]);
  return (
    <aside className={`${styles.sideBar} ${isOpenBar && styles.show}`}>
      <Meta title="Admin dashboard page" robots="noindex,nofollow" />
      <div className={styles.header}>
        <Logo width={isOpenBar ? "5rem" : "3rem"} />
      </div>
      <div className={styles.container}>
        <ul>
          <li className={active === "home" ? styles.active : ""} onClick={() => router.push("/admin")}>
            <RiHome7Fill className={styles.icon} />
            {isOpenBar && "Trang chính"}
          </li>
          <li className={active === "product" ? styles.active : ""} onClick={() => router.push("/admin/product")}>
            <BsListUl className={styles.icon} />
            {isOpenBar && "Sản phầm"}
            <RiArrowDropDownLine className={styles.icon_arrow} />
          </li>
          {active === "product" && (
            <div className={styles.drop_box}>
              <ul>
                <li
                  className={activeSub === "verify" ? styles.active : ""}
                  onClick={() => router.push("/admin/product/verify")}
                >
                  <AiOutlineCheckCircle className={styles.icon} />
                  {isOpenBar && "Đã duyệt"}
                </li>
                <li
                  className={activeSub === "unverify" ? styles.active : ""}
                  onClick={() => router.push("/admin/product/unverify")}
                >
                  <VscError className={styles.icon} />
                  {isOpenBar && "Chưa duyệt"}
                </li>
              </ul>
            </div>
          )}
          <li className={active === "user" ? styles.active : ""} onClick={() => router.push("/admin/user")}>
            <RiUserSearchLine className={styles.icon} />
            {isOpenBar && "Người dùng"}
            <RiArrowDropDownLine className={styles.icon_arrow} />
          </li>
          {active === "user" && (
            <div className={styles.drop_box}>
              <ul>
                <li
                  className={activeSub === "request" ? styles.active : ""}
                  onClick={() => router.push("/admin/user/request")}
                >
                  <CgUserList className={styles.icon} />
                  {isOpenBar && "Yêu cầu quyền"}
                </li>
              </ul>
            </div>
          )}

          <li className={active === "post" ? styles.active : ""} onClick={() => router.push("/admin/post")}>
            <VscPreview className={styles.icon} />
            {isOpenBar && "Bài viết"}
            <RiArrowDropDownLine className={styles.icon_arrow} />
          </li>
          {active === "post" && (
            <div className={styles.drop_box}>
              <ul>
                <li
                  className={activeSub === "create_post" ? styles.active : ""}
                  onClick={() => router.push("/admin/post/create_post")}
                >
                  <MdPlaylistAdd className={styles.icon} />
                  {isOpenBar && "Thêm bài viết"}
                </li>
              </ul>
            </div>
          )}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
