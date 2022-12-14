import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemFoodType = ({ item }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <Link
      to={`/categories/${item.id}`}
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      className="item-ft"
    >
      <img className="item-ft__image" src={item.image} alt="" />
      <div className="item-ft__title">
        <span>{item.title}</span>
      </div>
      {isShow && <div className="item-ft__background" />}
    </Link>
  );
};

export default ItemFoodType;
