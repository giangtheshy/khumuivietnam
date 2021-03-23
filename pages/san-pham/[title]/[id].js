import React from "react";
import Link from "next/link";

import { IoMdArrowDropright } from "react-icons/io";
import { VscCheck } from "react-icons/vsc";
import { FaWarehouse, FaCartPlus, FaGift } from "react-icons/fa";
import { SiBrandDotAi, SiAdguard, SiSellfy } from "react-icons/si";

import { useSelector } from "react-redux";
import styles from "../../../scss/Product.module.scss";
import { wrapper } from "../../../store/store";
import axios from "../../../apis/axios";
import { useRouter } from "next/router";
import * as apis from "../../../apis";
import * as types from "../../../store/types";
import Meta from "../../../components/Meta";
import Stars from "../../../utils/components/Stars/Stars";
import ImageSlider from "../../../components/ProductSlider/ImageSlider";
const Post = ({ post, loading }) => {
  const router = useRouter();
  const posts = useSelector((state) => state.post.posts);
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className={styles.productPage}>
      <Meta />
      <div className={styles.backLink}>
        <Link href={`/`} className={styles.linkItem}>
          Trang chủ
        </Link>
        <IoMdArrowDropright />
        <Link href={`/san-pham`} className={styles.linkItem}>
          Sản phẩm
        </Link>
        <IoMdArrowDropright />
        <Link
          href={`/san-pham/${post.title
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, "-")
            .toLowerCase()}/${post._id}`}
          className={styles.linkItem}
        >
          {post.title}
        </Link>
      </div>
      <section className={styles.productCenter}>
        <div className={styles.imgCenter}>
          <div className={styles.mainImg}>
            <img
              src="https://adminbeauty.hvnet.vn/Upload/Files/Avatar-SP-Web(1)(1)-Recovered-Recovered(11).jpg?width=350&height=391&v=15042020"
              alt="xkmShop"
            />
          </div>
          <div className={styles.imgSlider}>
            <ImageSlider products={posts} />
          </div>
        </div>
        <div className={styles.productControl}>
          <div className={styles.headerCenter}>
            <h1 className={styles.title}>Daily ExtraStrength</h1>
            <div className={styles.evaluate}>
              <Stars stars={4} />
              <small className="clr-secondary">Đánh giá sản phẩm</small>
            </div>
          </div>
          <div className={styles.contentCenter}>
            <div className={styles.contentLeft}>
              <div className={styles.price}>
                <img
                  src="https://bizweb.dktcdn.net/100/021/944/themes/723706/assets/hot_price.png?1616296243114"
                  alt="xkmShop"
                />
                <span className="bold clr-main">500.0550</span>
                <sup className="bold clr-main">đ</sup>
              </div>
              <div className={styles.contentDetails}>
                <div className={styles.infoTitle}>
                  <SiBrandDotAi className={styles.icon} />
                  <span className="bold">Thương hiệu : </span>
                  <span className="bold clr-blue">Xixaomi </span>
                </div>
                <div className={styles.infoTitle}>
                  <SiAdguard className={styles.icon} />
                  <span className="bold">Bảo hành : </span>
                  <span className="bold ">3 tháng </span>
                </div>
                <div className={styles.infoTitle}>
                  <FaWarehouse className={styles.icon} />
                  <span className="bold">Tồn kho : </span>
                  <span className="bold ">35 </span>
                </div>
                <div className={styles.infoTitle}>
                  <SiSellfy className={styles.icon} />
                  <span className="bold">Đã bán : </span>
                  <span className="bold ">55 </span>
                </div>
                <div className={styles.btnCenter}>
                  <div className={styles.quantityBtn}>
                    <button className={styles.btnDec}>-</button>
                    <span>5</span>
                    <button className={styles.btnInc}>+</button>
                  </div>
                  <button className={styles.btnAddCart}>
                    <FaCartPlus /> Mua ngay
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
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store, params }) => {
  const id = params.id;

  const { data } = await apis.getSinglePost(id);
  store.dispatch({ type: types.GET_SINGLE_POST, payload: { post: data } });

  return { props: { post: store.getState().post.post, loading: store.getState().post.loading } };
});
export const getStaticPaths = async () => {
  const { data } = await axios.get("/api/posts");
  const paths = data.map((post) => ({
    params: {
      id: post._id,
      title: post.title
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-")
        .toLowerCase(),
    },
  }));
  return { paths, fallback: false };
};
export default Post;
