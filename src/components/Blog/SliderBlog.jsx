import React from "react";
import Banner from "../../assets/images/banner.jpeg";

const SliderBlog = () => {
  return (
    <div className="blog__slider">
      <div className="blog__slider__image">
        <img src={Banner} alt="" />
      </div>
      <div className="blog__slider__background" />
      <div className="blog__slider__timeless">
        <span>30 minutes or less</span>
      </div>
      <div className="blog__slider__title">
        <span>
          Thick Or Thin: Different Styles Of Pizza Crust For 8 Classic Pies
        </span>
      </div>
      <div className="blog__slider__info">
        <span className="name">R.Sarah</span>
        <span className="date"> - September 12, 2021</span>
      </div>
    </div>
  );
};

export default SliderBlog;
