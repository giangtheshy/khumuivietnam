import React, { useState, useEffect } from "react";

import { wrapper } from "../../store/store";
import * as apis from "../../apis";
import * as types from "../../store/types";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, setEditProduct, updateProduct } from "../../store/actions/product.action";
import BackLink from "../../utils/components/BackLink/BackLink";
import Meta from "../../components/Meta";
import styles from "../../scss/Account/Manager.module.scss";
import Input from "../../utils/components/Input/Input";
import File from "../../utils/components/File/File";
import ImageFile from "../../components/ImageFile/ImageFile";
import Button from "../../utils/components/Button/Button";
import InputUrl from "../../components/Modal/InputUrl/InputUrl";
import RowProduct from "../../components/Table/Row/RowProduct";
import withSeller from "../../utils/HOC/withSeller";

const Manager = () => {
  const [dataProduct, setDataProduct] = useState({
    title: "",
    category: "",
    brand: "",
    price: "",
    inventory: "",
    guaranteed: "",
    evaluate: "",
    capacity: "",
    fragrant: "",
    country: "",
    images: [],
    uses: "",
    otherInfo: "",
  });

  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.product.products);
  const isEdit = useSelector((state) => state.product.isEdit);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEdit) {
      setDataProduct({ ...products.find((product) => product._id === isEdit) });
    }
  }, [isEdit]);
  useEffect(() => {
    return () => dispatch(setEditProduct(null));
  }, []);
  const handleChange = (e) => {
    setDataProduct({ ...dataProduct, [e.target.name]: e.target.value });
  };
  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    try {
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setDataProduct({ ...dataProduct, images: [...dataProduct.images, reader.result] });
        };
        reader.onerror = () => {
          console.error("something went wrong!!!");
        };
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleRemoveImage = (value) => {
    setDataProduct({ ...dataProduct, images: dataProduct.images.filter((img, index) => index !== value) });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(dataProduct).every((item) => item !== "") && dataProduct.images.length > 0) {
      if (isEdit) {
        dispatch(updateProduct(dataProduct, user.token));
        dispatch(setEditProduct(null));
        alert("C???p nh???t th??nh c??ng");
      } else {
        dispatch(createProduct(dataProduct, user.token));
        alert("Th??m th??nh c??ng");
      }
      setDataProduct({
        title: "",
        category: "",
        brand: "",
        price: "",
        inventory: "",
        guaranteed: "",
        evaluate: "",
        capacity: "",
        fragrant: "",
        country: "",
        images: [],
        uses: "",
        otherInfo: "",
      });
    } else {
      alert("Ph???i ??i???n ????? th??ng tin");
    }
  };
  const handleAddImageUrl = (value) => {
    setDataProduct({ ...dataProduct, images: [...dataProduct.images, value] });
  };
  if (!user?.role) return <h1>Page not found</h1>;
  return (
    <div className={styles.manager}>
      <Meta title="Trang b??n h??ng c?? nh??n " robots="noindex,nofollow" />
      <BackLink
        list={[
          { href: "/", text: "Trang ch???" },
          { href: "/tai-khoan/quan-ly", text: "B??n h??ng" },
        ]}
      />
      {showModal && <InputUrl setShowModal={setShowModal} handleAddImageUrl={handleAddImageUrl} />}
      <section className={styles.managerWrapper}>
        <div className={styles.manager__left}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Input
              type="text"
              label="T??n s???n ph???m"
              placeholder="T??n s???n ph???m"
              name="title"
              value={dataProduct.title}
              onChange={handleChange}
            />
            <Input
              type="text"
              label="Th??? lo???i"
              placeholder="Th??? lo???i"
              name="category"
              value={dataProduct.category}
              onChange={handleChange}
            />
            <Input
              type="text"
              label="Th????ng hi???u"
              placeholder="Th????ng hi???u"
              name="brand"
              value={dataProduct.brand}
              onChange={handleChange}
            />
            <Input
              type="number"
              label="Gi?? c???"
              placeholder="Gi?? c???"
              name="price"
              value={dataProduct.price}
              onChange={handleChange}
            />
            <Input
              type="number"
              label="S??? l?????ng"
              placeholder="S??? l?????ng"
              name="inventory"
              value={dataProduct.inventory}
              onChange={handleChange}
            />
            <Input
              type="number"
              label="B???o h??nh"
              placeholder="B???o h??nh (/th??ng)"
              name="guaranteed"
              value={dataProduct.guaranteed}
              onChange={handleChange}
            />
            <Input
              type="number"
              label="S??? sao"
              placeholder="S??? sao"
              name="evaluate"
              value={dataProduct.evaluate}
              onChange={handleChange}
            />
            <Input
              type="number"
              label="Dung t??ch"
              placeholder="Dung t??ch(/ml)"
              name="capacity"
              value={dataProduct.capacity}
              onChange={handleChange}
            />
            <Input
              type="text"
              label="M??i h????ng"
              placeholder="M??i h????ng"
              name="fragrant"
              value={dataProduct.fragrant}
              onChange={handleChange}
            />
            <Input
              type="text"
              label="N?????c s???n xu???t"
              placeholder="N?????c s???n xu???t"
              name="country"
              value={dataProduct.country}
              onChange={handleChange}
            />
            <label htmlFor="uses" className={styles.areaLabel}>
              <span className="bold" style={{ fontSize: 14 }}>
                C??ch d??ng<sup className="bold clr-main">*</sup>
              </span>
              <textarea name="uses" id="uses" value={dataProduct.uses} onChange={handleChange}></textarea>
            </label>
            <label htmlFor="otherInfo" className={styles.areaLabel}>
              <span className="bold" style={{ fontSize: 14 }}>
                Th??ng tin kh??c<sup className="bold clr-main">*</sup>
              </span>
              <textarea
                name="otherInfo"
                id="otherInfo"
                value={dataProduct.otherInfo}
                onChange={handleChange}
              ></textarea>
            </label>
            <div className={styles.imgCenter}>
              {dataProduct.images.length > 0 &&
                dataProduct.images.map((image, index) => (
                  <ImageFile src={image} alt="avatar" key={index} value={index} handleRemoveImage={handleRemoveImage} />
                ))}
              <File name="photoURL" onChange={handleChangeFile} id="file" />
              <button
                className={styles.openModal}
                onClick={() => setShowModal(!showModal)}
                title="Th??m ???nh b???ng URL"
                type="button"
              >
                {showModal ? "????ng" : "URL"}
              </button>
            </div>
            <Button label={isEdit ? "C???p nh???t ngay" : "T???o s???n ph???m"} type="submit">
              {isEdit ? "C???p nh???t ngay" : "T???o s???n ph???m"}
            </Button>
          </form>
        </div>
        <div className={styles.manager__right}>
          <div className={styles.manager__right_header}>
            <h3>S???n ph???m c???a b???n ( {products.filter((product) => product.UID === user?.user?._id).length})</h3>
          </div>
          <div className={styles.manager__right_content}>
            <table className={styles.table}>
              <thead>
                <tr className={styles.table__header}>
                  <th>STT</th>
                  <th>T??n s???n ph???m</th>
                  <th>???? b??n</th>
                  <th>S???a</th>
                  <th>X??a</th>
                  <th>Tr???ng th??i</th>
                </tr>
              </thead>
              <tbody>
                {products
                  .filter((product) => product.UID === user?.user?._id)
                  .map((product, index) => (
                    <RowProduct product={product} key={product._id} index={index} />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  const { data } = await apis.getProducts(0);
  store.dispatch({ type: types.GET_PRODUCTS, payload: data });

  return { props: { products: store.getState().product.products } };
});

export default withSeller(Manager);
