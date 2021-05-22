import React, { useState, useEffect } from "react";
import * as apis from "apis";
import { useSelector } from "react-redux";
import { Line, Pie } from "react-chartjs-2";
import { AiOutlineUser, AiFillDropboxCircle, AiFillCopy, AiTwotoneReconciliation } from "react-icons/ai";
import styles from "scss/Admin/DashBoard.module.scss";
import LoadingPage from "utils/components/LoadingPage/LoadingPage";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [bills, setBills] = useState([]);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const fetchUsers = async () => {
      const resUser = await apis.getAllUsers(token);
      const resProduct = await apis.getProducts();
      const resPost = await apis.getPosts();
      const resBill = await apis.getAllBills(token);
      setPosts(resPost.data);
      setProducts(resProduct.data);
      setUsers(resUser.data);
      setBills(resBill.data);
    };
    if (token) {
      fetchUsers();
    }
  }, [token]);
  if (!products.length || !users.length || !posts.length || !bills.length) return <LoadingPage />;
  const numberOfProductsOnMonth = (month) => {
    return products.filter((product) => {
      const monthCreated = new Date(product.createdAt).getMonth();
      if (monthCreated + 1 === month) {
        return product;
      }
    }).length;
  };
  const numberOfPostsOnDay = (day) => {
    return posts.filter((post) => {
      const dayCreated = new Date(post.createdAt).getDay();
      if (dayCreated + 1 === day) {
        return post;
      }
    }).length;
  };
  const numberOfUsersOnSocial = (type) => {
    return users.filter((user) => user.social === type).length;
  };
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div className={styles.box_item}>
          <AiOutlineUser className={styles.icon} />
          <span className={styles.box_item__info}>{users?.length} Người dùng</span>
        </div>
        <div className={styles.box_item}>
          <AiFillCopy className={styles.icon} />
          <span className={styles.box_item__info}>{posts?.length} Bài viết</span>
        </div>
        <div className={styles.box_item}>
          <AiFillDropboxCircle className={styles.icon} />
          <span className={styles.box_item__info}>{products?.length} Sản phẩm</span>
        </div>
        <div className={styles.box_item}>
          <AiTwotoneReconciliation className={styles.icon} />
          <span className={styles.box_item__info}>{bills?.length} Hóa đơn </span>
        </div>
      </div>
      <div className={styles.charts}>
        <div className={styles.charts__container}>
          <Line
            width={200}
            height={300}
            data={{
              labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
              datasets: [
                {
                  label: "Sản phẩm đăng theo tháng",
                  data: [
                    numberOfProductsOnMonth(1),
                    numberOfProductsOnMonth(2),
                    numberOfProductsOnMonth(3),
                    numberOfProductsOnMonth(4),
                    numberOfProductsOnMonth(5),
                    numberOfProductsOnMonth(6),
                    numberOfProductsOnMonth(7),
                    numberOfProductsOnMonth(8),
                    numberOfProductsOnMonth(9),
                    numberOfProductsOnMonth(10),
                    numberOfProductsOnMonth(11),
                    numberOfProductsOnMonth(12),
                  ],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
              plugins: {
                title: {
                  display: true,
                  text: "Biểu đồ sản phẩm",
                  position: "bottom",
                },
              },
            }}
          />
        </div>
        <div className={styles.charts__container}>
          <Line
            width={200}
            height={300}
            data={{
              labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ Nhật"],
              datasets: [
                {
                  label: "Bài đăng trong tuần",
                  data: [
                    numberOfPostsOnDay(1),
                    numberOfPostsOnDay(2),
                    numberOfPostsOnDay(3),
                    numberOfPostsOnDay(4),
                    numberOfPostsOnDay(5),
                    numberOfPostsOnDay(6),
                    numberOfPostsOnDay(7),
                  ],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 99, 132, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                  suggestedMax: 5,
                },
              },
              plugins: {
                title: {
                  display: true,
                  text: "Biểu đồ bài viết",
                  position: "bottom",
                },
              },
            }}
          />
        </div>
      </div>
      <div className={styles.charts}>
        <div className={styles.charts__container}>
          <Pie
            width={200}
            height={300}
            data={{
              labels: ["Tài khoản thường", "Tài khoản google", "Tài khoản facebook"],
              datasets: [
                {
                  label: "Loại tài khoản",
                  data: [
                    numberOfUsersOnSocial("normal"),
                    numberOfUsersOnSocial("google"),
                    numberOfUsersOnSocial("facebook"),
                  ],
                  backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
                  borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              scales: {
                y: {
                  display: false,
                },
                x: {
                  display: false,
                },
              },
              plugins: {
                title: {
                  display: true,
                  text: "Biểu đồ người dùng",
                  position: "bottom",
                },
              },
            }}
          />
        </div>
        <div className={styles.charts__container}>
          <Pie
            width={200}
            height={300}
            data={{
              labels: ["Đã thanh toán", "Chưa thanh toán"],
              datasets: [
                {
                  label: "Bài đăng trong tuần",
                  data: [bills.filter((bill) => bill.status).length, bills.filter((bill) => !bill.status).length],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 99, 132, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              scales: {
                y: {
                  display: false,
                },
                x: {
                  display: false,
                },
              },
              plugins: {
                title: {
                  display: true,
                  text: "Biểu đồ hoá đơn",
                  position: "bottom",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
