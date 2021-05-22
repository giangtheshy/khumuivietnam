import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Bar, Line } from "react-chartjs-2";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { VscError } from "react-icons/vsc";
import * as apis from "apis";
import styles from "scss/Admin/Product/Product.module.scss";
import LoadingPage from "utils/components/LoadingPage/LoadingPage";
const Product = () => {
  const [products, setProducts] = useState([]);
  const [productsUnVerify, setProductsUnVerify] = useState([]);
  const token = useSelector((state) => state.user.token);
  useEffect(() => {
    const fetchProducts = async () => {
      const resProducts = await apis.getProducts();
      const resUnVerify = await apis.getProductsUnVerify(token);
      setProducts(resProducts.data);
      setProductsUnVerify(resUnVerify.data);
    };
    if (token) {
      fetchProducts();
    }
  }, [token]);

  if (!products.length || !productsUnVerify.length) return <LoadingPage />;
  const getArrayNumberOfProductsFromBrand = () => {
    if (getBrandFromProducts().length) {
      return getBrandFromProducts().map((brand) => products.filter((product) => product.brand === brand).length);
    }
  };
  const getArrayNumberOfProductsFromCountry = () => {
    if (getCountryFromProducts().length) {
      return getCountryFromProducts().map(
        (country) => products.filter((product) => product.country === country).length
      );
    }
  };
  const getArrayNumberOfProductsFromPrice = () => {
    return [
      { start: 1000, end: 50000 },
      { start: 50000, end: 80000 },
      { start: 80000, end: 100000 },
      { start: 100000, end: 150000 },
      { start: 150000, end: 200000 },
      { start: 200000, end: 9999999999 },
    ].map((price) => products.filter((product) => product.price >= price.start && product.price < price.end).length);
  };

  const getBrandFromProducts = () => {
    const array = [...new Set(products?.map((product) => product.brand))];
    return array;
  };
  const getCountryFromProducts = () => {
    const array = [...new Set(products?.map((product) => product.country))];
    return array;
  };
  return (
    <div className={styles.product_admin}>
      <div className={styles.header}>
        <div className={styles.box_item}>
          <AiOutlineCheckCircle className={styles.icon_success} /> {products.length} Sản phẩm đã kiểm duyệt
        </div>
        <div className={styles.box_item}>
          <VscError className={styles.icon_error} /> {productsUnVerify.length} Sản phẩm chưa kiểm duyệt
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.charts__container}>
          <Line
            width={200}
            height={300}
            data={{
              labels: [
                "1.000-50.000",
                "50.000-80.000",
                "80.000-100.000",
                "100.000-150.000",
                "150.000-200.000",
                "200.000->",
              ],
              datasets: [
                {
                  label: "Sản phẩm đăng theo giá cả",
                  data: getArrayNumberOfProductsFromPrice(),
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
                  text: "Biểu đồ sản phẩm theo giá cả",
                  position: "bottom",
                },
              },
            }}
          />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.charts__container}>
            <Bar
              width={200}
              height={300}
              data={{
                labels: getBrandFromProducts(),
                datasets: [
                  {
                    label: "Sản phẩm đăng theo thương hiệu",
                    data: getArrayNumberOfProductsFromBrand(),
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
                    text: "Biểu đồ sản phẩm theo thương hiệu",
                    position: "bottom",
                  },
                },
              }}
            />
          </div>
          <div className={styles.charts__container}>
            <Bar
              width={200}
              height={300}
              data={{
                labels: getCountryFromProducts(),
                datasets: [
                  {
                    label: "Sản phẩm đăng theo nước sản xuất",
                    data: getArrayNumberOfProductsFromCountry(),
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
                    text: "Biểu đồ sản phẩm theo nước sản xuất",
                    position: "bottom",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
