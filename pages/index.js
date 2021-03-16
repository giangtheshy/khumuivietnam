import Head from "next/head";
import Link from "next/link";

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
