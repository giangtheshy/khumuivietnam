import React, { useState } from "react";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { VscCheck } from "react-icons/vsc";
import { FiHeart } from "react-icons/fi";
import { FaWarehouse, FaCartPlus, FaGift } from "react-icons/fa";
import { SiBrandDotAi, SiAdguard, SiSellfy } from "react-icons/si";

import styles from "../../../scss/Product.module.scss";
import { wrapper } from "../../../store/store";
import { useRouter } from "next/router";
import * as apis from "../../../apis";
import * as types from "../../../store/types";
import { addToCart } from "../../../store/actions/cart.action";
import Meta from "../../../components/Meta";
import Stars from "../../../utils/components/Stars/Stars";
import ImageSlider from "../../../components/ProductSlider/ImageSlider";
import BackLink from "../../../utils/components/BackLink/BackLink";
import convert from "../../../utils/functions/convertLink";
import Loading from "../../../utils/components/Loading/Loading";
const Product = ({ product }) => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const handleIndex = (id) => {
    setIndex(id);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrement = () => {
    if (quantity < product.inventory) {
      setQuantity(quantity + 1);
    }
  };
  const handleAddToCart = () => {
    if (token) {
      dispatch(addToCart({ ...product, quantity }, token, setLoading));
    } else {
      alert("Phải đăng nhập để thêm giỏ hàng");
    }
  };
  if (!product) return <h1>Page not found...</h1>;
  return (
    <div className={styles.productPage}>
      <Meta
        title={`${product.title} | Siêu rẻ và tốt nhất! | khumuivietnam.com`}
        description={`${product.title} : ${product.uses} | Siêu rẻ và tốt nhất!  | khumuivietnam.com`}
        keywords={`${product.title},${product.title} rẻ nhất,khumuivietnam,khumuivietnam.com,khumuivietnam shop`}
      />
      <BackLink
        list={[
          { href: "/", text: "Trang chủ" },
          { href: "/san-pham", text: "Sản phẩm" },
          {
            href: `/san-pham/${convert(product.title)}/${product._id}`,
            text: product.title,
          },
        ]}
      />

      <section className={styles.productCenter}>
        <div className={styles.imgCenter}>
          <div className={styles.mainImg}>
            <img
              src={product.images[index].replace("/image/upload/", "/image/upload/c_scale,h_350,w_500/")}
              alt={`khumuivietnam.com - ${product.title}`}
              title={`khumuivietnam.com - ${product.title}`}
            />
          </div>
          <div className={styles.imgSlider}>
            <ImageSlider images={product.images} title={product.title} setIndex={handleIndex} />
          </div>
        </div>
        <div className={styles.productControl}>
          <div className={styles.headerCenter}>
            <h1 className={styles.title}>{product.title}</h1>
            <div className={styles.evaluate}>
              <Stars stars={product.evaluate} />
              <small className="clr-secondary">Đánh giá sản phẩm</small>
            </div>
          </div>
          <div className={styles.contentCenter}>
            <div className={styles.contentLeft}>
              <div className={styles.price}>
                <img
                  src="https://bizweb.dktcdn.net/100/021/944/themes/723706/assets/hot_price.png?1616296243114"
                  alt="khumuivietnam.com "
                />
                <span className="bold clr-main">
                  {product.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </div>
              <div className={styles.contentDetails}>
                <div className={styles.infoTitle}>
                  <SiBrandDotAi className={styles.icon} />
                  <span className="bold">Thương hiệu : </span>
                  <span className="bold clr-blue">{product.brand} </span>
                </div>
                <div className={styles.infoTitle}>
                  <FiHeart className={styles.icon} />
                  <span className="bold">Lượt thích : </span>
                  <span className="bold ">{product.favorites.length} người </span>
                </div>
                <div className={styles.infoTitle}>
                  <SiAdguard className={styles.icon} />
                  <span className="bold">Bảo hành : </span>
                  <span className="bold ">{product.guarantee} tháng </span>
                </div>
                <div className={styles.infoTitle}>
                  <FaWarehouse className={styles.icon} />
                  <span className="bold">Tồn kho : </span>
                  <span className="bold ">{product.inventory} </span>
                </div>
                <div className={styles.infoTitle}>
                  <SiSellfy className={styles.icon} />
                  <span className="bold">Đã bán : </span>
                  <span className="bold ">{product.sold} </span>
                </div>
                <div className={styles.btnCenter}>
                  <div className={styles.quantityBtn}>
                    <button className={styles.btnDec} onClick={handleDecrement}>
                      -
                    </button>
                    <span>{quantity}</span>
                    <button className={styles.btnInc} onClick={handleIncrement}>
                      +
                    </button>
                  </div>
                  <button className={styles.btnAddCart} onClick={handleAddToCart}>
                    {loading ? (
                      <Loading />
                    ) : (
                      <>
                        <FaCartPlus className={styles.icon} /> Thêm ngay
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.contentRight}>
              <div className={styles.headerContentRight}>
                <FaGift /> Quà tặng
              </div>
              <div className={styles.detailsContentRight}>
                <ul>
                  <li>
                    <VscCheck /> <span className="bold clr-main">Miễn phí</span> giao hàng trên toàn quốc
                  </li>
                  <li>
                    <VscCheck /> <span className="bold clr-main">Hộp đựng</span> chất lượng cao
                  </li>
                  <li>
                    <VscCheck /> <span className="bold clr-main">Giao ngay tại Thủ Đức,TP.HCM</span>
                  </li>
                  <li>
                    <VscCheck /> <span className="bold clr-main">Quà tặng</span> khuyến mãi hấp dẫn
                  </li>
                  <li>
                    <VscCheck /> <span className="bold clr-main">Hỗ trợ</span> trả góp
                    <span className="bold clr-main"> 0% lãi suất</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.details}>
        <div className={styles.tab}>
          <span>Mô tả sản phẩm</span>
        </div>
        <div className={styles.heading}>
          <h2>{`${product.title} - bán tại khumuivietnam.com`}</h2>
          <img
            src={product.images[0].replace("/image/upload/", "/image/upload/c_scale,h_350,w_500/")}
            alt={product.title}
            title={`${product.title} - khumuivietnam.com`}
          />
        </div>
        <div className={styles.uses}>
          <h6>Công dụng</h6>
          <p dangerouslySetInnerHTML={{ __html: product.uses }}></p>
          {product.images[1] && (
            <img
              src={product.images[1].replace("/image/upload/", "/image/upload/c_scale,h_350,w_500/")}
              alt={product.title}
              title={`${product.title} - khumuivietnam.com`}
            />
          )}
        </div>
        <div className={styles.otherInfo}>
          <h6>Thông tin khác</h6>
          <p dangerouslySetInnerHTML={{ __html: product.otherInfo }}></p>
          {product.images[2] && (
            <img
              src={product.images[2].replace("/image/upload/", "/image/upload/c_scale,h_350,w_500/")}
              alt={product.title}
              title={`${product.title} - khumuivietnam.com`}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store, params }) => {
  const id = params.id;

  const { data } = await apis.getProduct(id);
  store.dispatch({ type: types.GET_PRODUCT, payload: data });

  return { props: { product: store.getState().product.product }, revalidate: 1 };
});
export const getStaticPaths = async () => {
  const { data } = await apis.getProducts(0);
  const paths = data.map((product) => ({
    params: {
      id: product._id,
      title: convert(product.title),
    },
  }));
  return { paths, fallback: true };
};
export default Product;
