import Meta from "../Meta";
import styles from "./Layout.module.scss";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
