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
  const brand =[
  {
    _id: 1,
    title: 'vichy',
    image: 'https://adminbeauty.hvnet.vn/Upload/Files/Capture.PNG?width=137&height=100&v=17042020',
  },
  {
    _id: 2,
    title: 'adidas',
    image: 'https://drscdn.500px.org/photo/1034508440/m%3D900/v2?sig=edc14e2fc54b42ddd20e638f5948c28dba0f29cd96ecce8a7c43e49246085dbd',
  },
  {
    _id: 3,
    title: 'nivea',
    image: 'https://drscdn.500px.org/photo/1034508441/m%3D256/v2?sig=63984d60917d047fe26395e232360d23979d4990606c885af7fb281374eff83e',
  },
  {
    _id: 4,
    title: 'axe',
    image: 'https://drscdn.500px.org/photo/1034508442/m%3D256/v2?sig=2d2d98e31a6a573c867dcfdc376ec73e45404c3f04e4a0c47a612751e5218233',
  },
  {
    _id: 5,
    title: 'romano',
    image: 'https://drscdn.500px.org/photo/1034508443/m%3D256/v2?sig=a0832d0527a74a691b2e55cb463cad1b441c38b7037e2855a10f958362278248',
  },
  {
    _id: 6,
    title: 'xmen',
    image: 'https://drscdn.500px.org/photo/1034508444/m%3D256/v2?sig=7667031175b4d3c74f87c159d842c831f42c00e8d2710b5841c923407156b4db',
  },
  {
    _id: 7,
    title: 'levuce',
    image: 'https://drscdn.500px.org/photo/1034391748/m%3D256/v2?sig=e6974cc08e67bf1b710adf6102f6e427dbd1ced1a1b1969c2caaf464a5facd6d',
  }
  ,
  {
    _id: 8,
    title: 'chanel',
    image: 'https://drscdn.500px.org/photo/1034508445/m%3D256/v2?sig=be00ac99254d16a31efe5352a126e57a4db1f29bf3a7e60b4c0a937b81081b7f',
  }
  ];
  return (
    <Slider {...settings}>
      {brand.map((product) => (
        <Brand
          key={product._id}
          title={product.title}
          image={product.image}
        />
      ))}
    </Slider>
  );
};

export default BrandSlider;
