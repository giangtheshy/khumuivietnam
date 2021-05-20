import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IoMdReverseCamera, IoMdArrowDropright, IoIosSave } from "react-icons/io";
import { SiOpenaccess } from "react-icons/si";
import { CgArrowTopRightO } from "react-icons/cg";
import { BiCheckShield } from "react-icons/bi";
import { FaHeart, FaMoneyBillAlt, FaEdit } from "react-icons/fa";
import { useRouter } from "next/router";

import * as apis from "apis";
import BackLink from "utils/components/BackLink/BackLink";
import Meta from "components/Meta";
import styles from "scss/Account/Account.module.scss";
import ChangePassword from "components/ChangePassword/ChangePassword";
import Loading from "utils/components/Loading/Loading";
import ChangeAvatar from "components/Modal/ChangeAvatar/ChangeAvatar";
import withoutAuth from "utils/HOC/withoutLogin";

const Account = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const [name, setName] = useState({ name: user?.name, loading: false });
  const [avatar, setAvatar] = useState({ avatar: user?.avatar, loading: false });
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("firstLogin") != "true") {
      router.push("/tai-khoan/dang-nhap");
    }
  }, []);
  const handleIsEdit = async () => {
    if (isEdit) {
      setName({ ...name, loading: true });
      await apis.UpdateUser({ name: name.name }, token);
      setName({ ...name, loading: false });
    }
    setIsEdit(!isEdit);
  };
  const handleRequest = async () => {
    await apis.createRequest({ uid: user._id, email: user.email, name: user.name });
    alert("Đã gửi yều cầu ! Vui lòng đợi người quản lý xét duyệt.");
  };
  return (
    <div className={styles.account}>
      <Meta title="Trang tài khoản cá nhân " />
      <BackLink
        list={[
          { href: "/", text: "Trang chủ" },
          { href: "/tai-khoan", text: "Tài khoản" },
        ]}
      />
      {showModal && <ChangeAvatar setShowModal={setShowModal} />}
      <section className={styles.profile}>
        <div className={styles.left}>
          <div className={styles.left_info}>
            <div className={styles.img}>
              <img
                src={user?.avatar.replace("/image/upload/", "/image/upload/c_scale,h_250,w_250/")}
                alt="avatar user"
              />
              <button className={styles.change_avatar} onClick={() => setShowModal(!showModal)}>
                <IoMdReverseCamera className={styles.icon} />
              </button>
            </div>
            <div className={styles.info}>
              <div>
                <input
                  type="text"
                  defaultValue={user?.name}
                  className={`${styles.input} ${isEdit ? styles.edit : styles.normal}`}
                  readOnly={!isEdit}
                  onChange={(e) => setName({ ...name, name: e.target.value })}
                />
                <span>
                  {!isEdit ? (
                    <span onClick={handleIsEdit}>
                      <FaEdit className={styles.icon} />
                    </span>
                  ) : (
                    <span onClick={handleIsEdit}>
                      {name.loading ? <Loading /> : <IoIosSave className={styles.icon} />}
                    </span>
                  )}
                </span>{" "}
              </div>
              <h4>{user?.email}</h4>
            </div>
          </div>
          <div className={styles.left_control}>
            <ul>
              <li onClick={() => setIsChangePassword(!isChangePassword)}>
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
            <h2>{isChangePassword ? "Thay đổi mật khẩu" : "Thông tin cá nhân"}</h2>
          </div>
          {isChangePassword ? (
            <ChangePassword token={token} />
          ) : (
            <div className={styles.right_content}>
              <div className={styles.item}>
                <span className={styles.label}>
                  <SiOpenaccess className={styles.icon} />
                  Loại tài khoản :
                </span>
                <span className={styles.text}>
                  {user?.role === 0 ? "Người mua hàng" : user?.role === 1 ? "Người bán hàng" : "Người quản lý"}
                </span>
              </div>
              {user?.role < 1 && (
                <div className={styles.item}>
                  <span className={styles.label}>
                    <CgArrowTopRightO className={styles.icon} />
                    Bạn có hàng muốn bán?
                  </span>
                  <span className={styles.text}>
                    <button onClick={handleRequest}>Yêu cầu cấp quyền bán!</button>
                  </span>
                </div>
              )}
              <div className={styles.item}>
                <span className={styles.label}>
                  <FaMoneyBillAlt className={styles.icon} />
                  Số đơn hàng đã mua :
                </span>
                <span className={styles.text}>
                  {user?.role === 0 ? "Người mua hàng" : user?.role === 1 ? "Người bán hàng" : "Người quản lý"}
                </span>
              </div>
              <div className={styles.item}>
                <span className={styles.label}>
                  <FaHeart className={styles.icon} />
                  Số sản phẩm yêu thích :
                </span>
                <span className={styles.text}>{user?.favorites.length} sản phẩm</span>
              </div>
              <div className={styles.item}>
                <span className={styles.label}>
                  <BiCheckShield className={styles.icon} />
                  Trạng thái email :
                </span>
                <span className={styles.text}>Đã kích hoạt</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Account;
