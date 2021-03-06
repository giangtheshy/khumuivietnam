import React, { useState } from "react";
import { RiFilter3Line } from "react-icons/ri";
import { FiRefreshCw } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/actions/product.action";
import { wrapper } from "../../store/store";
import * as apis from "../../apis";
import * as types from "../../store/types";
import styles from "../../scss/Products.module.scss";
import BackLink from "../../utils/components/BackLink/BackLink";
import Products from "../../utils/components/Products/Products";
import Filter from "../../components/Filter/Filter";
import InputRadio from "../../utils/components/InputRadio/InputRadio";
import Meta from "../../components/Meta";
import Loading from "../../utils/components/Loading/Loading";
const ProductsPage = () => {
  const [page, setPage] = useState(1);
  const products = useSelector((state) => state.product.products);
  const [filterHead, setFilterHead] = useState("");
  const [filterBar, setFilterBar] = useState({ category: "", fragrant: "", brand: "", capacity: "", country: "" });
  const [showFilter, setShowFilter] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const dispatch = useDispatch();
  const handleChangeFilterHead = (e) => {
    setFilterHead(e.target.value);
  };

  const handleProducts = (type) => {
    const array = [...new Set(products.map((product) => product[`${type}`]))];
    return array;
  };
  const handleFilterBar = (e) => {
    setFilterBar({ ...filterBar, [e.target.name]: e.target.value });
  };
  const handleFilterProducts = (products) => {
    const filter = products.filter((product) => {
      if (
        product.category.includes(filterBar.category) &&
        product.brand.includes(filterBar.brand) &&
        product.capacity.includes(filterBar.capacity) &&
        product.fragrant.includes(filterBar.fragrant) &&
        product.country.includes(filterBar.country)
      ) {
        return product;
      }
    });
    const sort = filter.sort((a, b) => {
      if (filterHead === "Gi?? t??ng") {
        return a.price - b.price;
      } else if (filterHead === "Gi?? gi???m") {
        return b.price - a.price;
      } else if (filterHead === "Y??u th??ch") {
        return b.favorites?.length - a.favorites?.length;
      } else {
        return b.createdAt - a.createdAt;
      }
    });
    return sort;
  };
  const handleRefresh = () => {
    setFilterHead("");
    setFilterBar({ category: "", fragrant: "", brand: "", capacity: "", country: "" });
  };
  const handleLoadMore = () => {
    dispatch(getProducts(page + 1, setLoadingMore));
    setPage(page + 1);
  };
  return (
    <div className={styles.products__page}>
      <Meta keywords={products.map((product) => product.title).join(", ")} />
      <BackLink
        list={[
          { href: "/", text: "Trang ch???" },
          { href: "/san-pham", text: "S???n ph???m" },
        ]}
      />
      <div className={styles.title}>
        <h1>S???n ph???m x???t kh??? m??i vi???t nam</h1>
      </div>
      <button className={styles.filter__btn} title="B??? l???c" onClick={() => setShowFilter(!showFilter)}>
        <RiFilter3Line className={styles.icon} />
      </button>
      <section className={styles.content}>
        <div className={styles.products}>
          <div className={styles.products__filter}>
            <span className="bold">X???p theo: </span>
            <div className={styles.products__filter_group}>
              <InputRadio
                value="Gi?? t??ng"
                name="filter"
                label="Gi?? t??ng"
                checked={filterHead === "Gi?? t??ng"}
                onChange={handleChangeFilterHead}
              />
              <InputRadio
                value="Gi?? gi???m"
                name="filter"
                label="Gi?? gi???m"
                checked={filterHead === "Gi?? gi???m"}
                onChange={handleChangeFilterHead}
              />
              <InputRadio
                value="Y??u th??ch"
                name="filter"
                label="Y??u th??ch"
                checked={filterHead === "Y??u th??ch"}
                onChange={handleChangeFilterHead}
              />
            </div>
          </div>
          <Products products={handleFilterProducts(products)} />
          {products.length % 10 === 0 && (
            <button className={styles.btnLoadMore} onClick={handleLoadMore}>
              {loadingMore ? <Loading /> : "T???i th??m"}
            </button>
          )}
        </div>
        <aside className={`${styles.filters} ${showFilter && styles.show}`}>
          <h3 className={styles.filters__heading}>
            B??? l???c <FiRefreshCw className={styles.icon} title="X??a l???c" onClick={handleRefresh} />
          </h3>
          <div className={styles.filters__container}>
            <Filter
              products={handleProducts("category")}
              type="category"
              heading="Th??? Lo???i"
              onChange={handleFilterBar}
              value={filterBar.category}
            />
            <Filter
              products={handleProducts("country")}
              type="country"
              heading="N?????c S???n Xu???t"
              onChange={handleFilterBar}
              value={filterBar.country}
            />
            <Filter
              products={handleProducts("fragrant")}
              type="fragrant"
              heading="M??i H????ng"
              onChange={handleFilterBar}
              value={filterBar.fragrant}
            />
            <Filter
              products={handleProducts("brand")}
              type="brand"
              heading="Th????ng Hi???u"
              onChange={handleFilterBar}
              value={filterBar.brand}
            />
            <Filter
              products={handleProducts("capacity")}
              type="capacity"
              heading="Dung T??ch (ml)"
              onChange={handleFilterBar}
              value={filterBar.capacity}
            />
          </div>
        </aside>
      </section>
    </div>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  const { data } = await apis.getProducts(1);
  store.dispatch({ type: types.GET_PRODUCTS, payload: data });

  return { props: { products: store.getState().product.products } };
});

export default ProductsPage;
