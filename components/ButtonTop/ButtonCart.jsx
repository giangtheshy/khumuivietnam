import React from "react";
import styles from "./ButtonTop.module.scss";
import { IoIosCart } from "react-icons/io";
import { useRouter } from "next/router";

const ButtonTop = ({ style }) => {
  const router = useRouter();
  return (
    <button
      className={styles.btnCart}
      style={style ? { transform: "translateY(0px)" } : { transform: "translateY(50px)" }}
      title="Mở giỏ hàng"
      onClick={() => router.push("/tai-khoan/gio-hang")}
    >
      <IoIosCart className={styles.icon} />
    </button>
  );
};

export default ButtonTop;
