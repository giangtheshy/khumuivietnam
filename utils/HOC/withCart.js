import Cart from "pages/tai-khoan/gio-hang";
import { useSelector } from "react-redux";
const withCart = (Component) => {
  const Auth = (props) => {
    const cart = useSelector((state) => state.cart.cart);
    if (cart.length === 0) {
      return <Cart />;
    }
    return <Component {...props} />;
  };
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withCart;
