import React, { useState, useEffect } from "react";
import styles from "scss/Admin/Product/UnVerify.module.scss";
import * as apis from "apis";
import { useSelector } from "react-redux";

import RowRequest from "components/Table/Row/RowRequest";

const Request = () => {
  const [requests, setRequests] = useState([]);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await apis.getAllRequest(token);
      setRequests(data);
    };
    if (token) {
      fetchProducts();
    }
  }, [token]);
  return (
    <div>
      <div className={styles.manager__right}>
        <div className={styles.manager__right_header}>
          <h3>Yêu cầu bán hàng chưa duyệt ( {requests.length})</h3>
        </div>
        <div className={styles.manager__right_content}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.table__header}>
                <th>STT</th>
                <th>Email</th>
                <th>Tên người dùng</th>
                <th>Hành động</th>
                <th>Xóa</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, index) => (
                <RowRequest
                  request={request}
                  key={request._id}
                  index={index}
                  actions={(id) => setRequests(requests.filter((request) => request._id !== id))}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Request;
