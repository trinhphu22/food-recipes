import React from "react";
import Image from "../../assets/images/item.jpg";
import { BsHourglassSplit } from "react-icons/bs";
import {
  MdLocalFireDepartment,
  MdStar,
  MdStarHalf,
  MdStarOutline,
} from "react-icons/md";
import { IoIosHeart, IoIosHeartDislike } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const [isShow, setIsShow] = useState(false);
  const [select, setSelect] = useState(false);

  const Rating = () => {
    switch (item.rate) {
      case 0.5:
        return (
          <div className="item__rating">
            <span className="rate">
              <MdStarHalf />
              <MdStarOutline />
              <MdStarOutline />
              <MdStarOutline />
              <MdStarOutline />
            </span>
          </div>
        );
      case 1:
        return (
          <div className="item__rating">
            <span className="rate">
              <MdStar />
              <MdStarOutline />
              <MdStarOutline />
              <MdStarOutline />
              <MdStarOutline />
            </span>
          </div>
        );
      case 1.5:
        return (
          <div className="item__rating">
            <span className="rate">
              <MdStar />
              <MdStarHalf />
              <MdStarOutline />
              <MdStarOutline />
              <MdStarOutline />
            </span>
          </div>
        );
      case 2:
        return (
          <div className="item__rating">
            <span className="rate">
              <MdStar />
              <MdStar />
              <MdStarOutline />
              <MdStarOutline />
              <MdStarOutline />
            </span>
          </div>
        );
      case 2.5:
        return (
          <div className="item__rating">
            <span className="rate">
              <MdStar />
              <MdStar />
              <MdStarHalf />
              <MdStarOutline />
              <MdStarOutline />
            </span>
          </div>
        );
      case 3:
        return (
          <div className="item__rating">
            <span className="rate">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStarOutline />
              <MdStarOutline />
            </span>
          </div>
        );
      case 3.5:
        return (
          <div className="item__rating">
            <span className="rate">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStarHalf />
              <MdStarOutline />
            </span>
          </div>
        );
      case 4:
        return (
          <div className="item__rating">
            <span className="rate">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStarOutline />
            </span>
          </div>
        );
      case 4.5:
        return (
          <div className="item__rating">
            <span className="rate">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStarHalf />
            </span>
          </div>
        );
      case 5:
        return (
          <div className="item__rating">
            <span className="rate">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </span>
          </div>
        );
      default:
        return (
          <div className="item__rating">
            <span className="rate">
              <MdStarOutline />
              <MdStarOutline />
              <MdStarOutline />
              <MdStarOutline />
              <MdStarOutline />
            </span>
          </div>
        );
    }
  };

  return (
    <Link
      to={`/foods/${item.id}`}
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      className="item"
    >
      <img src={item.image} alt="" />
      {isShow && (
        <>
          <div className="item__background" />
          <div className="item__add-cart">
            <span className="text">Add to cart</span>
          </div>
          <Rating />
        </>
      )}
      {select ? (
        <div onClick={() => setSelect(false)} className="item__favorite-select">
          <IoIosHeartDislike />
        </div>
      ) : (
        <div onClick={() => setSelect(true)} className="item__favorite">
          <IoIosHeart />
        </div>
      )}
      <div className="item__triangle" />
      <div className="item__collect">
        <span className="text">{item.collection}</span>
      </div>
      <div className="item__icons">
        <div className="item__icons__icon">
          <BsHourglassSplit />
          <span className="info">{item.ingredient} Ingredients</span>
        </div>
        <div className="item__icons__icon">
          <MdLocalFireDepartment />
          <span className="info">{item.timeCook} minutes</span>
        </div>
      </div>
      <div className="item__title">
        <span>{item.productName}</span>
      </div>
      <div className="item__price">
        <span>{item.price} $</span>
      </div>
    </Link>
  );
};

export default Item;
