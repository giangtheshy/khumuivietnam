import "../scss/index.scss";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import { getPosts } from "../store/actions/post.action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
