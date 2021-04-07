import React from "react";
import { useRouter } from "next/router";
import styles from "./Search.module.scss";
import convert from "../../utils/functions/convertLink";
import { MdSort } from "react-icons/md";

const Products = ({ products, setSearch }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      {products?.map(
        (product, index) =>
          index < 10 && (
            <article className={styles.item} key={product._id}>
              <h4
                onClick={() => {
                  setSearch("");
                  router.push(`/san-pham/${convert(product.title)}/${product._id}`);
                }}
                className={styles.label}
              >
                <MdSort /> {product.title}
              </h4>
            </article>
          )
      )}
    </div>
  );
};

export default Products;
