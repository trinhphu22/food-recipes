import React from "react";
import classNames from "classnames";
import { ImSearch } from "react-icons/im";
import { IoChevronDown } from "react-icons/io5";
import { MdDoubleArrow } from "react-icons/md";

import ItemFoodType from "../components/Item/ItemFoodType";

const DishType = () => {
  const [page, setPage] = React.useState(1);

  return (
    <div className="sub-page">
      <div className="sub-page__title">
        <span>Food Type</span>
      </div>
      <div className="sub-page__subtitle">
        <span>Dessert</span>
      </div>
      <div className="sub-page__search">
        <input
          onChange={(event) => event.target("")}
          className="search-bar"
          type="text"
          placeholder="Search for recipes"
        />
        <div className="icon">
          <ImSearch />
        </div>
        <div className="collect">
          <span className="text">Collection</span>
          <IoChevronDown />
        </div>
        <div className="skill">
          <span className="text">Skill level</span>
          <IoChevronDown />
        </div>
        <div className="kitchen">
          <span className="text">Kitchen Type</span>
          <IoChevronDown />
        </div>
      </div>
      <div className="line" />
      <div className="sub-page__num">
        <span className="num">50</span>
        <span>Recipes</span>
      </div>
      <div className="sub-page__container">
        <ItemFoodType />
        <ItemFoodType />
        <ItemFoodType />
        <ItemFoodType />
        <ItemFoodType />
        <ItemFoodType />
        <ItemFoodType />
        <ItemFoodType />
      </div>
      <div className="sub-page__pages">
        <span
          onClick={() => setPage(1)}
          className={classNames(page === 1 && "page-select", "page")}
        >
          1
        </span>
        <span
          onClick={() => setPage(2)}
          className={classNames(page === 2 && "page-select", "page")}
        >
          2
        </span>
        <span onClick={() => setPage(page + 1)} className="page">
          <span>next</span>
          <span className="icon">
            <MdDoubleArrow />
          </span>
        </span>
      </div>
    </div>
  );
};

export default DishType;
