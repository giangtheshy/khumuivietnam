import Account from "pages/tai-khoan";
import { useSelector } from "react-redux";
const withAuth = (Component) => {
  const Auth = (props) => {
    const isLogged = useSelector((state) => state.user?.isLogged);
    if (isLogged) {
      return <Account />;
    }
    return <Component {...props} />;
  };
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
