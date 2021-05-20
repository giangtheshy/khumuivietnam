import React from "react";
import styles from "./RowProduct.module.scss";
import Link from "next/link";
import convert from "utils/functions/convertLink";
import { GoTrashcan } from "react-icons/go";
import { useSelector } from "react-redux";
import * as apis from "apis";

const RowUnVerify = ({ product, index, actions }) => {
  const token = useSelector((state) => state.user.token);

  const handleRemove = async () => {
    const c = confirm("Bạn có chắn muốn xóa sản phẩm này?");
    if (c) {
      await apis.removeProduct(product._id, token);
      actions(product._id);
      alert("Đã xóa sản phẩm!");
    }
  };
  return (
    <tr className={styles.row}>
      <td>{index + 1}</td>
      <td className={styles.title}>
        <Link href={`/san-pham/${convert(product.title)}/${product._id}`}>{product.title}</Link>
      </td>
      <td>
        {product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "VND",
        })}
      </td>
      <td>{product.sold}</td>
      <td>
        <GoTrashcan className={styles.iconTrash} onClick={handleRemove} />
      </td>
    </tr>
  );
};

export default RowUnVerify;
