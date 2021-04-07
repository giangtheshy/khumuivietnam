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
          image={product.images[0]}
          price={product.price}
          sold={product.sold}
          evaluate={product.evaluate}
          inventory={product.inventory}
          favorites={product.favorites}
        />
      ))}
    </div>
  );
};

export default Products;
