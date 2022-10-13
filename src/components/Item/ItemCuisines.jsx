import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemCuisines = ({ item }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <Link
      to={`/categories/${item.id}`}
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      className="item-cuisines"
    >
      <img className="item-cuisines__image" src={item.image} alt="" />
      <div className="item-cuisines__title">
        <span>{item.title}</span>
      </div>
      {isShow && <div className="item-cuisines__background" />}
    </Link>
  );
};

export default ItemCuisines;
