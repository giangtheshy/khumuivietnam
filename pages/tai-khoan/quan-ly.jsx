import React, { useState } from "react";
import { useCookies } from "react-cookie";

import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../store/actions/product.action";
import BackLink from "../../utils/components/BackLink/BackLink";
import Meta from "../../components/Meta";
import styles from "../../scss/Account/Manager.module.scss";
import Input from "../../utils/components/Input/Input";
import File from "../../utils/components/File/File";
import ImageFile from "../../components/ImageFile/ImageFile";
import Button from "../../utils/components/Button/Button";
import InputUrl from "../../components/Modal/InputUrl/InputUrl";

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
  const [cookies, setCookies] = useCookies(["user"]);
  const role = useSelector((state) => state.user?.user?.user?.role);
  const dispatch = useDispatch();
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
    if (Object.values(dataProduct).every((item) => item !== "" || item?.length > 0)) {
      dispatch(createProduct(dataProduct, cookies.user));
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
      alert("Thêm thành công");
    } else {
      alert("Phải điền đủ thông tin");
    }
  };
  const handleAddImageUrl = (value) => {
    setDataProduct({ ...dataProduct, images: [...dataProduct.images, value] });
  };
  if (!role) return <h1>Page not found</h1>;
  return (
    <div className={styles.manager}>
      <Meta title="Trang quản lý cá nhân " robots="noindex,nofollow" />
      <BackLink
        list={[
          { href: "/", text: "Trang chủ" },
          { href: "/tai-khoan/quan-ly", text: "Quản lý" },
        ]}
      />
      {showModal && <InputUrl setShowModal={setShowModal} handleAddImageUrl={handleAddImageUrl} />}
      <section className={styles.managerWrapper}>
        <div className={styles.manager__left}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Input
              type="text"
              label="Tên sản phẩm"
              placeholder="Tên sản phẩm"
              name="title"
              value={dataProduct.title}
              onChange={handleChange}
            />
            <Input
              type="text"
              label="Thể loại"
              placeholder="Thể loại"
              name="category"
              value={dataProduct.category}
              onChange={handleChange}
            />
            <Input
              type="text"
              label="Thương hiệu"
              placeholder="Thương hiệu"
              name="brand"
              value={dataProduct.brand}
              onChange={handleChange}
            />
            <Input
              type="number"
              label="Giá cả"
              placeholder="Giá cả"
              name="price"
              value={dataProduct.price}
              onChange={handleChange}
            />
            <Input
              type="number"
              label="Số lượng"
              placeholder="Số lượng"
              name="inventory"
              value={dataProduct.inventory}
              onChange={handleChange}
            />
            <Input
              type="number"
              label="Bảo hành"
              placeholder="Bảo hành (/tháng)"
              name="guaranteed"
              value={dataProduct.guaranteed}
              onChange={handleChange}
            />
            <Input
              type="number"
              label="Số sao"
              placeholder="Số sao"
              name="evaluate"
              value={dataProduct.evaluate}
              onChange={handleChange}
            />
            <Input
              type="number"
              label="Dung tích"
              placeholder="Dung tích(/ml)"
              name="capacity"
              value={dataProduct.capacity}
              onChange={handleChange}
            />
            <Input
              type="text"
              label="Mùi hương"
              placeholder="Mùi hương"
              name="fragrant"
              value={dataProduct.fragrant}
              onChange={handleChange}
            />
            <Input
              type="text"
              label="Nước sản xuất"
              placeholder="Nước sản xuất"
              name="country"
              value={dataProduct.country}
              onChange={handleChange}
            />
            <label htmlFor="uses" className={styles.areaLabel}>
              <span className="bold" style={{ fontSize: 14 }}>
                Cách dùng<sup className="bold clr-main">*</sup>
              </span>
              <textarea name="uses" id="uses" value={dataProduct.uses} onChange={handleChange}></textarea>
            </label>
            <label htmlFor="otherInfo" className={styles.areaLabel}>
              <span className="bold" style={{ fontSize: 14 }}>
                Thông tin khác<sup className="bold clr-main">*</sup>
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
                title="Thêm ảnh bằng URL"
                type="button"
              >
                {showModal ? "Đóng" : "URL"}
              </button>
            </div>
            <Button label="Tạo sản phẩm" type="submit">
              Tạo sản phẩm
            </Button>
          </form>
        </div>
        <div className={styles.manager__right}></div>
      </section>
    </div>
  );
};

export default Manager;
