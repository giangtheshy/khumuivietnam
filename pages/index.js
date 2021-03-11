import Head from "next/head";
import Link from "next/link";
import axios from "../apis/axios";
import { wrapper } from "../store/store";
import "../scss/Home.module.scss";

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
export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  const { data } = await axios.get("/api/posts");
  store.dispatch({ type: "GET_POST", payload: data });
  return { props: { name: store.getState().post } };
});
