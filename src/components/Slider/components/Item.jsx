import React from "react";
import { BsHourglassSplit } from "react-icons/bs";
import { MdLocalFireDepartment } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { Link } from "react-router-dom";

const Cards = [
  {
    icon: <BsHourglassSplit />,
    title: "Ingredients",
    info: "10",
  },
  {
    icon: <MdLocalFireDepartment />,
    title: "Cooking",
    info: "60 minutes",
  },
  {
    icon: <HiUsers />,
    title: "For",
    info: "4 persons",
  },
];

const Item = ({ item }) => {
  return (
    <Link to={`foods/${item.id}`} className="slider__item">
      <div className="slider__item__image zoomin ">
        <img src={item.image} alt="" />
      </div>
      <div className="slider__item__title">{item.title}</div>
      <div className="slider__item__collection">
        <span>{item.cuisine}</span>
      </div>
      <div className="slider__item__info">
        <div className="slider__item__info__card">
          <div className="icon">
            <BsHourglassSplit />
          </div>
          <div className="info">
            <div>Ingredients</div>
            <div>{item.ingredientsTotal}</div>
          </div>
        </div>
        <div className="slider__item__info__card">
          <div className="icon">
            <MdLocalFireDepartment />
          </div>
          <div className="info">
            <div>Cooking</div>
            <div>{item.cookingTime} minutes</div>
          </div>
        </div>
        <div className="slider__item__info__card">
          <div className="icon">
            <HiUsers />
          </div>
          <div className="info">
            <div>For</div>
            <div>{item.serving} persons</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
