import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "scss/Admin/User.module.scss";
import * as apis from "apis";
import RowUser from "components/Table/Row/RowUser";
import LoadingPage from "utils/components/LoadingPage/LoadingPage";
const User = () => {
  const [users, setUsers] = useState([]);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await apis.getAllUsers(token);
      setUsers(data);
    };
    if (token) {
      fetchUsers();
    }
  }, [token]);
  if (!users.length) return <LoadingPage/>;
  return (
    <div className={styles.user_admin}>
      <div className={styles.manager__right}>
        <div className={styles.manager__right_header}>
          <h3>Người dùng đã xác minh ( {users.length})</h3>
        </div>
        <div className={styles.manager__right_content}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.table__header}>
                <th>STT</th>
                <th>Email</th>
                <th>Name</th>
                <th>Loại Tài khoản</th>
                <th>Role</th>
                <th>Xóa</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <RowUser
                  user={user}
                  key={user._id}
                  index={index}
                  actions={(id, role) =>
                    setUsers(users.map((user) => (user._id === id ? { ...user, role: role } : user)))
                  }
                  deleteActions={(id) => setUsers(users.filter((user) => user._id !== id))}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
