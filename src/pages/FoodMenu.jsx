import React from "react";

import Item from "../components/Item/Item";
import { Categories, Countries, Items } from "../components/Api/data";
import { useParams } from "react-router-dom";

const FoodMenu = () => {
  const { id } = useParams();

  const category = Categories.find(
    (item) => item.id.toString() === id.toString()
  );

  const country = Countries.find(
    (item) => item.id.toString() === id.toString()
  );

  console.log("first", category);

  return (
    <div className="menu">
      <div className="menu__body">
        <div className="menu__body__left">
          <div className="menu__body__left__title">
            <span>Filter Recipes</span>
          </div>
          <div className="menu__body__left__subtitle">
            <span>Food Type</span>
          </div>
          {Categories.map((item) => (
            <div className="menu__body__left__items">
              <span className={id === item.id.toString() && "item-selected"}>
                {item.title}
              </span>
            </div>
          ))}
          <div className="menu__body__left__subtitle">
            <span>Cuisines</span>
          </div>
          {Countries.map((item) => (
            <div className="menu__body__left__items">
              <span className={id === item.id.toString() && "item-selected"}>
                {item.title}
              </span>
            </div>
          ))}
        </div>
        <div className="menu__body__right">
          <div className="menu__body__right__title">
            {category && <span>{category.title}</span>}
            {country && <span>{country.title}</span>}
          </div>
          <div className="menu__body__right__items">
            {Items.map((item) => (
              <Item item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
