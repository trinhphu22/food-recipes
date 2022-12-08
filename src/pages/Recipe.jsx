import classNames from "classnames";
import React, { useState } from "react";
import { BiEdit, BiShowAlt, BiTrash } from "react-icons/bi";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { HiOutlinePlusSm } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Blogs } from "../components/Api/data";
import DeleteRecipe from "../components/Recipe/DeleteRecipe";
import EditRecipe from "../components/Recipe/EditRecipe";

const Recipe = () => {
  const [product, setProduct] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };
  return (
    <div className="manage">
      <div className="manage__title">
        <span>Recipes</span>
      </div>
      <div className={classNames("manage__search", "products")}>
        <input className="search" type="text" placeholder="Search by title" />
        <select className="select">
          <option value="" selected disabled hidden>
            Status
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <div
          onClick={() => {
            toggleDrawer();
            setProduct(null);
          }}
          className="button"
        >
          <HiOutlinePlusSm className="icon" />
          <span>Add Recipe</span>
        </div>
      </div>
      <div className="manage__table">
        <div className="table">
          <div className="table__header">
            <div className="table__header__item action">image</div>
            <div className="table__header__item">author</div>
            <div className="table__header__item address">title</div>
            <div className="table__header__item">approved</div>
            <div className="table__header__item">ACTIONS</div>
          </div>
          {Blogs.map((item, index) => (
            <div className="table__body">
              <div className="table__body__item action">
                <img src={item.image} alt="img" className="img-recipe" />
              </div>
              <div className="table__body__item ">{item.user?.name}</div>
              <div className="table__body__item address">{item.title}</div>
              <div className="table__body__item">
                {item.approved ? (
                  <div className="approved color-B9F8B9">Approved</div>
                ) : (
                  <div className="not-approved color-FBF4E2">Not Approved</div>
                )}
              </div>
              <div className="table__body__item">
                <Link className="icon-small" to={`/recipes/id:${item.id}`}>
                  <BiShowAlt
                    //   onClick={() => setActive("Recipe-Detail")}
                    className="show"
                  />
                </Link>
                <BiEdit
                  onClick={() => {
                    toggleDrawer();
                    setProduct(item);
                  }}
                  className="edit"
                />
                <BiTrash
                  onClick={() => {
                    show();
                    setProduct(item);
                  }}
                  className="delete"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <DeleteRecipe hide={hide} visible={visible} item={product} />
      <EditRecipe toggleDrawer={toggleDrawer} isOpen={isOpen} item={product} />
    </div>
  );
};

export default Recipe;
