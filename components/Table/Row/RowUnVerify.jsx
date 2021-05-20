import React from "react";
import styles from "./RowProduct.module.scss";

import { GoTrashcan } from "react-icons/go";
import { AiFillCheckCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import * as apis from "apis";

const RowUnVerify = ({ product, index, actions }) => {
  const token = useSelector((state) => state.user.token);
  const handleVerify = async () => {
    await apis.verifyProduct(product._id, token);
    actions(product._id);
  };
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
        <p>{product.title}</p>
      </td>
      <td>{product.price}</td>
      <td>
        <AiFillCheckCircle className={styles.iconEdit} onClick={handleVerify} />
      </td>
      <td>
        <GoTrashcan className={styles.iconTrash} onClick={handleRemove} />
      </td>
    </tr>
  );
};

export default RowUnVerify;
