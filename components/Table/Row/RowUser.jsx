import React, { useState } from "react";
import styles from "./RowProduct.module.scss";

import { GoTrashcan } from "react-icons/go";
import { BiEdit } from "react-icons/bi";
import { useSelector } from "react-redux";
import * as apis from "apis";
import BoxRole from "components/DropDown/BoxRole";

const RowUser = ({ user, index, actions, deleteActions }) => {
  const [showBox, setShowBox] = useState(false);
  const token = useSelector((state) => state.user.token);
  const role = useSelector((state) => state.user.role);

  const handleRemove = async () => {
    const c = confirm("Bạn có chắn muốn xóa tài khoản này?");
    if (c) {
      await apis.deleteUser(user._id, token);
      deleteActions(user._id);
      alert("Đã xóa sản phẩm!");
    }
  };
  return (
    <tr className={styles.row}>
      <td>{index + 1}</td>
      <td className={styles.title}>
        <p>{user.email}</p>
      </td>
      <td>{user.name}</td>
      <td>{user.social}</td>
      <td className="bold clr-darkBlue flex-center relative">
        {user.role === 0
          ? "Người dùng"
          : user.role === 1
          ? "Người bán hàng"
          : user.role === 2
          ? "Quản lý"
          : "Admin tối thượng"}
        {role > 3 && <BiEdit className={styles.iconEdit} onClick={() => setShowBox(!showBox)} />}
        {showBox && (
          <BoxRole
            setShowBox={() => setShowBox(false)}
            curRole={user.role}
            UID={user._id}
            actions={actions}
            deleteActions={deleteActions}
          />
        )}
      </td>
      <td>{user.role < role && <GoTrashcan className={styles.iconTrash} onClick={handleRemove} />}</td>
    </tr>
  );
};

export default RowUser;
