import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

const SliderBlog = ({ item }) => {

  return (
    <Link to={`/recipes/${item[0].id}`} className="blog__slider">
      <div className="blog__slider__image">
        <img src={item[0].image} alt="" />
      </div>
      <div className="blog__slider__background" />
      <div className="blog__slider__timeless">
        <span>{item[0].cookingTime} minutes or less</span>
      </div>
      <div className="blog__slider__title">
        <span>{item[0].title}</span>
      </div>
      <div className="blog__slider__info">
        <span className="name">{item[0].user.name}</span>
        <span className="date">
          {" "}
          - {moment(item[0].createDate, "DD/MM/YYYY").format("LL")}
        </span>
      </div>
    </Link>
  );
};

export default SliderBlog;
