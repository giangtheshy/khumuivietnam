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
  return (
    <main className={styles.main}>
      <Meta
        title="khumuivietnam.com - Chuyên các sản phẩm xịt khử mùi tốt nhất Việt Nam"
        keywords="khumuivietnam.com,khumuivietnam shop,khumuivietnam, xịt khử mùi nam, xịt khử mùi nữ, xịt khử mùi,"
        description="khumuivietnam.com chuyên bán các loại xịt khử mùi tốt và rẻ nhất dành cho mọi cấp bậc,lứa tuổi. Cam đoan không tốt không nhận tiền!"
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
  const { data } = await apis.getProducts();
  store.dispatch({ type: types.GET_PRODUCTS, payload: data });
  return { props: { products: store.getState().product.products } };
});
