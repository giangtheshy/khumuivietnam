import "../scss/index.scss";
import Layout from "../components/Layout/Layout";
import { Provider } from "react-redux";
import { wrapper } from "../store/store";
import store from "../store/store";
// import { getPosts } from "../store/actions/post.action";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getPosts());
  // }, []);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default wrapper.withRedux(MyApp);
