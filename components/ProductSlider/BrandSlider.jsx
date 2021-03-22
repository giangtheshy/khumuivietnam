import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Brand from "./Brand/Brand";

const BrandSlider = ({ products }) => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 585,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {products.map((product) => (
        <Brand
          key={product._id}
          title={product.title}
          image="https://adminbeauty.hvnet.vn/Upload/Files/Capture.PNG?width=137&height=100&v=17042020"
        />
      ))}
    </Slider>
  );
};

export default BrandSlider;
