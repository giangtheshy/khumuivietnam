import Meta from "../components/Meta";
import Slides from "../components/Banner/Slides/Slides";
import Events from "../components/Banner/Events/Events";
import styles from "../scss/Home.module.scss";
import { wrapper } from "../store/store";
import * as apis from "../apis";
import * as types from "../store/types";
import Products from "../utils/components/Products/Products";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import BrandSlider from "../components/ProductSlider/BrandSlider";
import { FaMedal } from "react-icons/fa";

export default function Home({ products }) {
  console.log(products);
  return (
    <main className={styles.main}>
      <Meta
        title="XkmShop - Chuyên các sản phẩm xịt khử mùi tốt nhất Việt Nam"
        keywords="XkmShop,XkmShop shop, XkmShop team"
        description="XkmShop is the best shop"
      />

      <section className={styles.bannerSection}>
        <Slides />
        <Events />
      </section>
      <section className={styles.newProduct}>
        <div className={styles.header}>
          <h2 className={styles.title}>Sản phẩm mới</h2>
        </div>
        {/* <Products products={products} /> */}
        <ProductSlider products={products} />
      </section>
      <section className={styles.bestSeller}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <FaMedal className={styles.icon} />
            Bán nhiều nhất
          </h2>
        </div>
        <Products products={products} />
      </section>
      <section className={styles.famousBrand}>
        <div className={styles.header}>
          <h2 className={styles.title}>Thương hiệu nỗi tiếng</h2>
        </div>
        <BrandSlider products={products} />
      </section>
    </main>
  );
}
export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  const { data } = await apis.getPosts();
  store.dispatch({ type: types.GET_POST, payload: data });
  return { props: { products: store.getState().post.posts } };
});
