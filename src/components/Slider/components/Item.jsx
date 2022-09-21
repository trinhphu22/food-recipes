import React from "react";
import { BsHourglassSplit } from "react-icons/bs";
import { MdLocalFireDepartment } from "react-icons/md";
import { HiUsers } from "react-icons/hi";

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

const Item = ({ image }) => {
  return (
    <div className="slider__item">
      <div className="slider__item__image zoomin ">
        <img src={image} alt="" />
      </div>
      <div className="slider__item__title">
        qui assumenda aperiam qui assumenda aperiam
      </div>
      <div className="slider__item__collection">
        <span>AMERICA</span>
      </div>
      <div className="slider__item__info">
        {Cards.map((item, index) => (
          <div key={index} className="slider__item__info__card">
            <div className="icon">{item.icon}</div>
            <div className="info">
              <div>{item.title}</div>
              <div>{item.info}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
