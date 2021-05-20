import React from "react";
import { useSelector } from "react-redux";
import styles from "./BoxRole.module.scss";
import * as apis from "apis";
const BoxRole = ({ UID, curRole, actions, setShowBox }) => {
  const token = useSelector((state) => state.user.token);
  const handleChangeRole = async (role) => {
    await apis.updateUserRole(UID, { role: role }, token);
    actions(UID, role);
    setShowBox();
  };
  return (
    <div className={styles.box}>
      {curRole !== 0 && (
        <button className={styles.btn_normal} onClick={() => handleChangeRole(0)}>
          Người mua
        </button>
      )}
      {curRole !== 1 && (
        <button className={styles.btn_sell} onClick={() => handleChangeRole(1)}>
          Người bán hàng
        </button>
      )}
      {curRole !== 2 && (
        <button className={styles.btn_manager} onClick={() => handleChangeRole(2)}>
          Quản lý
        </button>
      )}
      {curRole < 3 && (
        <button className={styles.btn_admin} onClick={() => handleChangeRole(5)}>
          Admin Tối Thượng
        </button>
      )}
    </div>
  );
};

export default BoxRole;
