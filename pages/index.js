import Meta from "../components/Meta";
import Link from "next/link";

import "../scss/Home.module.scss";

export default function Home({ name }) {
  return (
    <main>
      <Meta
        title="Oldwatchfan shop"
        keywords="Oldwatchfan,Oldwatchfan shop, Oldwatchfan team"
        description="Oldwatchfan is the best shop"
      />

      <h1>Home page</h1>
      <p>Oldwatchfan là thương hiệu tốt nhất để lựa chọn smart watch</p>
    </main>
  );
}
