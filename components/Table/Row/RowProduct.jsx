import React from "react";
import styles from "./RowProduct.module.scss";
import Link from "next/link";
import { GoTrashcan } from "react-icons/go";
import { BiEdit } from "react-icons/bi";
import { BsCheckCircle, BsArrowClockwise } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { removeProduct, setEditProduct } from "../../../store/actions/product.action";

import convert from "../../../utils/functions/convertLink";

const RowProduct = ({ product, index }) => {
  const [cookies, setCookies] = useCookies(["user"]);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(setEditProduct(product._id));
  };
  const handleRemove = () => {
    const c = confirm("Bạn có chắn muốn xóa sản phẩm này?");
    if (c) {
      dispatch(removeProduct(product._id, cookies.user));
      alert("Đã xóa sản phẩm!");
    }
  };
  return (
    <tr className={styles.row}>
      <td>{index + 1}</td>
      <td className={styles.title}>
        <Link href={`/san-pham/${convert(product.title)}/${product._id}`}>{product.title}</Link>
      </td>
      <td>{product.sold}</td>
      <td>
        <BiEdit className={styles.iconEdit} onClick={handleEdit} />
      </td>
      <td>
        <GoTrashcan className={styles.iconTrash} onClick={handleRemove} />
      </td>
      <td>
        {product.awaiting === "true" ? (
          <span className={styles.unActive} title="Đang chờ duyệt">
            <BsArrowClockwise className={styles.icon} />
          </span>
        ) : (
          <span className={styles.active} title="Đã duyệt">
            <BsCheckCircle className={styles.icon} />
          </span>
        )}
      </td>
    </tr>
  );
};

export default RowProduct;
