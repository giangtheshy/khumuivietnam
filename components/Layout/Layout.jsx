import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { checkLogin } from "../../store/actions/user.action";
import styles from "./Layout.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const [cookies] = useCookies(["user"]);
  useEffect(() => {
    if (cookies.user !== "") {
      dispatch(checkLogin(cookies.user));
    }
  }, []);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
