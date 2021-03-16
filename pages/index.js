import Meta from "../components/Meta";
import Link from "next/link";

import "../scss/Home.module.scss";

export default function Home({ name }) {
  return (
    <div>
      <Meta
        title="HD2Gsmart"
        keywords="HD2Gsmart,HD2Gsmart shop, HD2Gsmart team"
        description="HD2Gsmart is the best shop"
      />

      <h1>Home page</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
