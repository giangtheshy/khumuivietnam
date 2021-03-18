import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Logo.module.scss";
import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();
  return (
    <div className={styles.logo} onClick={() => router.push("/")}>
      <FaShoppingCart className={styles.icon} />
      <span>
        <span className=" bold">Old</span>
        watchfan
      </span>
    </div>
  );
};

export default Logo;
