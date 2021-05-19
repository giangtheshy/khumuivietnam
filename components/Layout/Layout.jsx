import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import styles from "./Layout.module.scss";
import Header from "../Header/Header";
import HeaderAdmin from "../Header/HeaderAdmin";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";
import ButtonTop from "../ButtonTop/ButtonTop";
import ButtonCart from "../ButtonTop/ButtonCart";

const Layout = ({ children }) => {
  const [showBtn, setShowBtn] = useState(false);
  const [moveCart, setMoveCart] = useState(false);
  const [isOpenBar, setIsOpenBar] = useState(false);
  const user = useSelector((state) => state.user.user);

  const router = useRouter();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    if (window.pageYOffset >= 300) {
      setShowBtn(true);
      setMoveCart(true);
    } else {
      setMoveCart(false);
      setShowBtn(false);
    }
  };
  if (router.pathname.startsWith("/admin")) {
    return (
      <div className={styles.main}>
        <SideBar isOpenBar={isOpenBar} />
        <div className={styles.container}>
          <HeaderAdmin isOpenBar={isOpenBar} setIsOpenBar={setIsOpenBar} />
          {children}
        </div>
      </div>
    );
  } else
    return (
      <>
        <Header />
        {children}
        <Footer />
        {showBtn && <ButtonTop />}
        {user && <ButtonCart style={moveCart} />}
      </>
    );
};

export default Layout;
