import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../scss/index.scss";
import Layout from "../components/Layout/Layout";
import { Provider } from "react-redux";
import { wrapper } from "../store/store";
import store from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken, loginUser, getUser } from "../store/actions/user.action";
import LoadingPage from "utils/components/LoadingPage/LoadingPage";

const MyApp = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const token = useSelector((state) => state.user.token);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.pathname]);

  return (
    <Provider store={store}>
      <Layout>
        {loading && <LoadingPage />}
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default wrapper.withRedux(MyApp);
