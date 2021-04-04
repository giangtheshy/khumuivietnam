import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { checkLogin } from "../../store/actions/user.action";
import styles from "./Layout.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ButtonTop from "../ButtonTop/ButtonTop";

const Layout = ({ children }) => {
  const [showBtn, setShowBtn] = useState(false);
  const dispatch = useDispatch();
  const [cookies] = useCookies(["user"]);
  useEffect(() => {
    if (cookies.user !== "") {
      dispatch(checkLogin(cookies.user));
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    if (window.pageYOffset >= 300) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };
  return (
    <>
      <Header />
      {children}
      <Footer />
      {showBtn && <ButtonTop />}
    </>
  );
};

export default Layout;
