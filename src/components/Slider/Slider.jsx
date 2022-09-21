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
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    className: "center",
    centerPadding: "60px",
  };

  return (
    <Slider {...settings}>
      {IMAGES.map((item, index) => (
        <Item image={item.image} />
      ))}
    </Slider>
  );
};

export default Slide;
