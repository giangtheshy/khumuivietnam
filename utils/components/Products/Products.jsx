import React from "react";
import styles from "./Products.module.scss";
import Product from "../Product/Product";

const Products = ({ products }) => {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Product
          key={product._id}
          _id={product._id}
          title={product.title}
          photoURL={product.photoURL}
          price="100.000"
          sold="55"
        />
      ))}
    </div>
  );
};

export default Products;
