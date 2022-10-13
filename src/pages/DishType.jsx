import React from "react";
import { Categories } from "../components/Api/data";

import ItemFoodType from "../components/Item/ItemFoodType";

const DishType = () => {

  return (
    <div className="sub-page">
      <div className="sub-page__title">
        <span>Food Type</span>
      </div>
      <div className="sub-page__container">
        {Categories.map((item) => (
          <ItemFoodType item={item} />
        ))}
      </div>
    </div>
  );
};

export default DishType;
