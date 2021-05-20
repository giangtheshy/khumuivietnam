import React from "react";
import styles from "./RowProduct.module.scss";

import { GoTrashcan } from "react-icons/go";
import { AiFillCheckCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import * as apis from "apis";

const RowRequest = ({ request, index, actions }) => {
  const token = useSelector((state) => state.user.token);
  const handleVerify = async () => {
    await apis.confirmRequest(request._id, token);
    actions(request._id);
  };
  const handleRemove = async () => {
    const c = confirm("Bạn có chắn muốn xóa yêu cầu này?");
    if (c) {
      await apis.deleteRequest(request._id, token);
      actions(request._id);
      alert("Đã xóa yêu cầu!");
    }
  };
  return (
    <tr className={styles.row}>
      <td>{index + 1}</td>
      <td className={styles.title}>
        <p>{request.email}</p>
      </td>
      <td>{request.name}</td>
      <td>
        <AiFillCheckCircle className={styles.iconEdit} onClick={handleVerify} />
      </td>
      <td>
        <GoTrashcan className={styles.iconTrash} onClick={handleRemove} />
      </td>
    </tr>
  );
};

export default RowRequest;
