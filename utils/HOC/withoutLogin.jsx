import Login from "pages/tai-khoan/dang-nhap";
import { useSelector } from "react-redux";
const withoutAuth = (Component) => {
  const Auth = (props) => {
    const isLogged = useSelector((state) => state.user.isLogged);
    if (!isLogged) {
      return <Login />;
    }
    return <Component {...props} />;
  };
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withoutAuth;
