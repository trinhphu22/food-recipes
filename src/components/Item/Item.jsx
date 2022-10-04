import React from "react";
import { BsHourglassSplit } from "react-icons/bs";
import {
  MdLocalFireDepartment,
} from "react-icons/md";
import { IoIosHeart, IoIosHeartDislike } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "../common/Rating";

const Item = ({ item }) => {
  const [isShow, setIsShow] = useState(false);
  const [select, setSelect] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      className="item"
    >
      <img src={item.image} alt="" />
      {isShow && (
        <>
          <Link to={`/foods/${item.id}`} className="item__background" />
          <div className="item__add-cart">
            <span className="text">Add to cart</span>
          </div>
          <Rating item={item} />
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
      <Link to={`/foods/${item.id}`} className="item__triangle" />
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
      <Link to={`/foods/${item.id}`} className="item__title">
        <span>{item.productName}</span>
      </Link>
      <div className="item__price">
        <span>{item.price} $</span>
      </div>
    </div>
  );
};

export default Item;
