import React from "react";

import image2 from "../../assets/images/image2.jpeg";
import image1 from "../../assets/images/image1.jpeg";
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

const Slider = () => {
  console.log(IMAGES.map((item) => item.image));
  return (
    <div className="slider">
      {IMAGES.map((item, index) => (
        <div className="slider__container" key={index} className="">
          <img className="slider__container__item" src={item.image} alt="img" />
        </div>
      ))}
    </div>
  );
};

export default Slider;
