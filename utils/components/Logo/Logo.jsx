import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Logo.module.scss";
import { useRouter } from "next/router";

const Logo = ({ width }) => {
  const router = useRouter();
  return (
    <div className={styles.logo} onClick={() => router.push("/")} title="khumuivietnam.com " style={{ width: width }}>
      <img
        src="https://res.cloudinary.com/giangtheshy/image/upload/v1618495157/dev/khumuivietnam/nklkpnk9ydwx0p5ppiuk.png"
        alt="logo khumuivietnam.com"
        title="khumuivietnam.com"
      />
    </div>
  );
};
Logo.defaultProps = {
  width: "4rem",
};

export default Logo;
