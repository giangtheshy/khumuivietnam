import Head from "next/head";
import Link from "next/link";
import { wrapper } from "../store/store";
import "../scss/Home.module.scss";
import { getPosts } from "../store/actions/post.action";

export default function Home({ name }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Home page</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
export const getStaticProps = wrapper.getStaticProps(({ store }) => {
  store.dispatch(getPosts());
  return { props: { name: store.getState().post } };
});
