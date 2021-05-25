import { useSelector } from "react-redux";
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

export default function Home({ posts }) {
  const productsStore = useSelector((state) => state.product.products);
  return (
    <main className={styles.main}>
      <Meta
        title="khumuivietnam.com - Chuyên các sản phẩm xịt khử mùi tốt nhất Việt Nam"
        keywords="khumuivietnam.com,khumuivietnam shop,khumuivietnam, xịt khử mùi nam, xịt khử mùi nữ, xịt khử mùi,"
        description="khumuivietnam shop chuyên bán các loại xịt khử mùi tốt và rẻ nhất dành cho mọi cấp bậc,lứa tuổi. Cam đoan không tốt không nhận tiền!"
      />
      <div style={{ position: "absolute", left: -9999 }}>
        <a href="https://www.zteamstore.xyz/" rel="dofollow noopener" target="_blank">
          zteamstore
        </a>
      </div>
      <section className={styles.bannerSection}>
        <Slides />
        <Events posts={posts} />
      </section>
      <section className={styles.newProduct}>
        <div className={styles.header}>
          <h2 className={styles.title}>Sản phẩm mới</h2>
        </div>
        {/* <Products products={products} /> */}
        <ProductSlider products={productsStore} />
      </section>
      <section className={styles.bestSeller}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <FaMedal className={styles.icon} />
            Bán nhiều nhất
          </h2>
        </div>
        <Products products={productsStore.slice(0, 10)} />
      </section>
      <section className={styles.famousBrand}>
        <div className={styles.header}>
          <h2 className={styles.title}>Thương hiệu nổi tiếng</h2>
        </div>
        <BrandSlider products={productsStore} />
      </section>
    </main>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  const { data } = await apis.getProducts(0);
  const res = await apis.getPosts();
  const posts = await res.data;
  store.dispatch({ type: types.GET_PROPS_HOME, payload: { products: data, posts } });

  return { props: { products: store.getState().product.products, posts: store.getState().post.posts } };
});
