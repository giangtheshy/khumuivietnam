import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Logo.module.scss";
import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();
  return (
    <div className={styles.logo} onClick={() => router.push("/")} title="XkmShop">
      <FaShoppingCart className={styles.icon} />
      <span>khumuivietnam</span>
    </div>
  );
};

export default Logo;
