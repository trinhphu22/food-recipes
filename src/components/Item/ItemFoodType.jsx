import React from "react";
import { BsHourglassSplit } from "react-icons/bs";
import {
  MdLocalFireDepartment,
  MdStar,
  MdStarHalf,
  MdStarOutline,
} from "react-icons/md";
import Image from "../../assets/images/image1.jpeg";

const ItemFoodType = () => {
  return (
    <div className="item-ft">
      <img className="item-ft__image" src={Image} alt="" />
      <div className="item-ft__icons">
        <div className="item-ft__icons__icon">
          <BsHourglassSplit />
          <span className="info">10 Ingredients</span>
        </div>
        <div className="item-ft__icons__icon">
          <MdLocalFireDepartment />
          <span className="info">60 minutes</span>
        </div>
      </div>
      <div className="item-ft__title">
        <span>Seared Scallops with Butter</span>
      </div>
      <div className="item-ft__rating">
        <span className="rate">
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStarHalf />
          <MdStarOutline />
          <span className="review">0 reviews</span>
        </span>
      </div>
      <div className="item-ft__price">
        <span className="price">15.99 $</span>
        <div className="add-cart">
            <span className="text">Add to cart</span>
          </div>
      </div>
    </div>
  );
};

export default ItemFoodType;
