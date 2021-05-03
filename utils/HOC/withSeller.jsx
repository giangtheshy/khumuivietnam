import Account from "pages/tai-khoan";
import { useSelector } from "react-redux";
const withSeller = (Component) => {
  const Auth = (props) => {
    const role = useSelector((state) => state.user.role);
    if (role <= 0 || role > 5) {
      return <Account />;
    }
    return <Component {...props} />;
  };
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withSeller;
