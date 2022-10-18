import React from "react";

import Slider from "react-slick";
import Item from "./components/Item";

import image1 from "../../assets/images/image1.jpeg";
import image2 from "../../assets/images/image2.jpeg";
import image3 from "../../assets/images/image3.jpeg";
import image4 from "../../assets/images/image4.jpeg";
import image5 from "../../assets/images/image5.jpeg";

const IMAGES = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
  {
    image: image4,
  },
  {
    image: image5,
  },
];

const Slide = () => {
  const settings = {
    adaptiveHeight: true,
    arrows: false,
    // slidesToShow: 2,
    // slidesToScroll: 1,
    // className: "center",
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500
  };

  return (
    <Slider {...settings}>
      {IMAGES.map((item, index) => (
        <Item key={index} image={item.image} />
      ))}
    </Slider>
  );
};

export default Slide;
