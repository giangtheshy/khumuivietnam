import React from "react";
import styles from '../../scss/Products.module.scss';
import BackLink from '../../utils/components/BackLink/BackLink';

const Products = () => {
  return <div className={styles.products}>
    <BackLink list={[{ href: '/', text: "Trang chủ" }, { href: '/gioi-thieu', text: "Sản phẩm" }]} />
  </div>;
};

export default Products;
