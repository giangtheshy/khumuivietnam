import Meta from "../components/Meta";
import Link from "next/link";

import "../scss/Home.module.scss";

export default function Home({ name }) {
  return (
    <div>
      <Meta
        title="HD2GWatch"
        keywords="HD2GWatch,HD2GWatch shop, HD2GWatch team"
        description="HD2GWatch is the best shop"
      />

      <h1>Home page</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
