import React, { useState } from "react";

import styles from "./RowProduct.module.scss";
import Link from "next/link";
import convert from "utils/functions/convertLink";
import { GoTrashcan } from "react-icons/go";
import { BiEdit } from "react-icons/bi";
import { useSelector } from "react-redux";
import * as apis from "apis";

const RowPost = ({ post, index, actions, deleteActions }) => {
  const [showBox, setShowBox] = useState(false);
  const token = useSelector((state) => state.user.token);
  const role = useSelector((state) => state.user.role);

  const handleRemove = async () => {
    const c = confirm("Bạn có chắn muốn xóa tài khoản này?");
    if (c) {
      await apis.deleteUser(post._id, token);
      deleteActions(post._id);
      alert("Đã xóa sản phẩm!");
    }
  };
  const date = new Date(post.createdAt);
  return (
    <tr className={styles.row}>
      <td>{index + 1}</td>
      <td className={styles.title}>
        <Link href={`/bai-viet/${convert(post.title)}`}>{post.title}</Link>
      </td>
      <td>{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</td>

      <td>
        <BiEdit className={styles.iconEdit} onClick={() => setShowBox(!showBox)} />
      </td>
      <td>
        {" "}
        <GoTrashcan className={styles.iconTrash} onClick={handleRemove} />
      </td>
    </tr>
  );
};

export default RowPost;
