import React, { useState } from "react";
import { RiFilter3Line } from 'react-icons/ri';
import { wrapper } from "../../store/store";
import * as apis from "../../apis";
import * as types from "../../store/types";
import styles from '../../scss/Products.module.scss';
import BackLink from '../../utils/components/BackLink/BackLink';
import Products from '../../utils/components/Products/Products';
import Filter from '../../components/Filter/Filter';
import InputRadio from '../../utils/components/InputRadio/InputRadio';
import Meta from '../../components/Meta';
const ProductsPage = ({ products }) => {
  const [filterHead, setFilterHead] = useState("")
  const [showFilter, setShowFilter] = useState(false)
  const handleChangeFilterHead = (e) => {
    setFilterHead(e.target.value)
  }
  const handleProducts = (type) => {
    const array = [...new Set(products.map(product => product[`${type}`]))]
    return array
  }
  return <div className={styles.products__page}>
    <Meta keywords={products.map(product => product.title).join(', ')} />
    <BackLink list={[{ href: '/', text: "Trang chủ" }, { href: '/gioi-thieu', text: "Sản phẩm" }]} />
    <div className={styles.title}><h1>Sản phẩm xịt khử mùi việt nam</h1></div>
    <button className={styles.filter__btn} title="Bộ lọc" onClick={() => setShowFilter(!showFilter)}><RiFilter3Line className={styles.icon} /></button>
    <section className={styles.content}>
      <div className={styles.products}>
        <div className={styles.products__filter}>
          <span className="bold">Xếp theo: </span>
          <div className={styles.products__filter_group}>
            <InputRadio value="Giá tăng" name="filter" label="Giá tăng" onChange={handleChangeFilterHead} />
            <InputRadio value="Giá giảm" name="filter" label="Giá giảm" onChange={handleChangeFilterHead} />
            <InputRadio value="Yêu thích" name="filter" label="Yêu thích" onChange={handleChangeFilterHead} />

          </div>
        </div>
        <Products products={products} />
      </div>
      <aside className={`${styles.filters} ${showFilter && styles.show}`}>
        <h3 className={styles.filters__heading}>Bộ lọc</h3>
        <div className={styles.filters__container}>
          <Filter products={handleProducts('category')} heading="Thể Loại" />
          <Filter products={handleProducts('country')} heading="Nước Sản Xuất" />
          <Filter products={handleProducts('fragrant')} heading="Mùi Hương" />
          <Filter products={handleProducts('brand')} heading="Thương Hiệu" />
          <Filter products={handleProducts('capacity')} heading="Dung Tích (ml)" />
        </div>
      </aside>
    </section>
  </div>;
};
export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  const { data } = await apis.getProducts();
  store.dispatch({ type: types.GET_PRODUCTS, payload: data });

  return { props: { products: store.getState().product.products } };
});

export default ProductsPage;
