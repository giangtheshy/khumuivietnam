import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "./Image/Image";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#D93333", borderRadius: "50%", right: "-0.5rem" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#D93333", borderRadius: "50%", left: "-0.5rem", zIndex: "10" }}
      onClick={onClick}
    />
  );
}
const ImageSlider = ({ images, setIndex, title }) => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
      {images.map((image, index) => (
        <Image key={index} title={`khumuivietnam.com - ${title}`} image={image} onClick={() => setIndex(index)} />
      ))}
    </Slider>
  );
};

export default ImageSlider;
