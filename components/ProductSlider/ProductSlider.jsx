import React from "react";
import styles from "./ProductSlider.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "../../utils/components/Product/Product";

const ProductSlider = ({ products }) => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1097,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 882,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {products.map((product) => (
        <Product
          key={product._id}
          _id={product._id}
          title={product.title}
          image={product.images[0]}
          price={product.price}
          sold={product.sold}
          evaluate={product.evaluate}
          inventory={product.inventory}
          favorites={product.favorites}
        />
      ))}
    </Slider>
  );
};

export default ProductSlider;
