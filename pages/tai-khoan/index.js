import React from "react";
import { useSelector } from "react-redux";
import { IoMdReverseCamera, IoMdArrowDropright } from "react-icons/io";
import { useRouter } from "next/router";

import BackLink from "../../utils/components/BackLink/BackLink";
import Meta from "../../components/Meta";
import styles from "../../scss/Account/Account.module.scss";
const Account = () => {
  const user = useSelector((state) => state.user.user);
  const router = useRouter();
  return (
    <div className={styles.account}>
      <Meta title="Trang tài khoản cá nhân " />
      <BackLink
        list={[
          { href: "/", text: "Trang chủ" },
          { href: "/tai-khoan", text: "Tài khoản" },
        ]}
      />
      <section className={styles.profile}>
        <div className={styles.left}>
          <div className={styles.left_info}>
            <div className={styles.img}>
              <img
                src={user?.avatar.replace("/image/upload/", "/image/upload/c_scale,h_250,w_250/")}
                alt="avatar user"
              />
              <button className={styles.change_avatar}>
                <IoMdReverseCamera className={styles.icon} />
              </button>
            </div>
            <div className={styles.info}>
              <h3>{user?.name}</h3>
              <h4>{user?.email}</h4>
            </div>
          </div>
          <div className={styles.left_control}>
            <ul>
              <li onClick={() => router.push("/")}>
                <IoMdArrowDropright className={styles.icon} />
                Thay đổi mật khẩu
              </li>
              <li onClick={() => router.push("/tai-khoan/gio-hang")}>
                <IoMdArrowDropright className={styles.icon} />
                Giỏ hàng của bạn
              </li>
              <li onClick={() => router.push("/tai-khoan/yeu-thich")}>
                <IoMdArrowDropright className={styles.icon} />
                Danh sách yêu thích
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.right_header}>
            <h2>Thông tin cá nhân</h2>
          </div>
          <div className={styles.right_content}></div>
        </div>
      </section>
    </div>
  );
};

export default Account;
