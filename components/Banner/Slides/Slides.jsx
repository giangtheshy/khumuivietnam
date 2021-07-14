import React from "react";
import Slider from "react-slick";
import styles from "./Slides.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slides = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <div className={styles.slideContainer}>
      <Slider {...settings}>
        <div className={styles.slideItem} key="1">
          <img
            src="https://adminbeauty.hvnet.vn/Upload/Files/banner/happy-day-beauty-garden.jpg?width=1170&height=450&v=15042020"
            alt="banner image"
          />
        </div>
        <div className={styles.slideItem} key="2">
          <img
            src="https://drscdn.500px.org/photo/1034519321/m%3D900/v2?sig=e35418268f04159ee57e62fbf9016e289ffa9f9a7a777e52ca3bbf69bdc55f2f"
            alt="banner image"
          />
        </div>
        <div className={styles.slideItem} key="2">
          <img
            src="https://drscdn.500px.org/photo/1034519341/m%3D900/v2?sig=706d672138c4676f80b1d184b2fef2bac92557cde1493cc4d72ae445fb3b7779"
            alt="banner image"
          />
        </div>
        <div className={styles.slideItem} key="2">
          <img
            src="https://drscdn.500px.org/photo/1034521405/m%3D900/v2?sig=af4e244774bcf972f510b701f32cb23946a32625a216f323d19e55b064ef875e"
            alt="banner image"
          />
        </div>
        <div className={styles.slideItem} key="2">
          <img
            src="https://drscdn.500px.org/photo/1034521868/m%3D900/v2?sig=4aeda5e38c795c5b3e9cd235f7c497890935a4eac5ac9229a27cc1b1fcd20b03"
            alt="banner image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Slides;
