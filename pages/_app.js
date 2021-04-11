import "../scss/index.scss";
import Layout from "../components/Layout/Layout";
import { Provider } from "react-redux";
import { wrapper } from "../store/store";
import store from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken, loginUser, getUser } from "../store/actions/user.action";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const token = useSelector((state) => state.user.token);
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      dispatch(getAccessToken());
    }
  }, [isLogged, dispatch]);
  useEffect(() => {
    if (token) {
      dispatch(loginUser());
      dispatch(getUser(token));
    }
  }, [token, dispatch]);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default wrapper.withRedux(MyApp);
