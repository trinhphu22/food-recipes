import classNames from "classnames";
import React, { useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { HiChevronLeft, HiChevronRight, HiOutlinePlusSm } from "react-icons/hi";
import { Categories } from "../../../Api/data";
import DeleteCatg from "./DeleteCatg";
import EditCatg from "./EditCatg";

const Category = () => {
  const [page, setPage] = useState(1);
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
    <div className="admin__main__body">
      <div className="admin__main__body__title">
        <span>Category</span>
      </div>
      <div className={classNames("admin__main__body__search", "categories")}>
        <input
          className="search"
          type="text"
          placeholder="Search by category"
        />
        <select className="select">
          <option value="" selected disabled hidden>
            Category
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <div
          onClick={() => {
            toggleDrawer();
          }}
          className="button"
        >
          <HiOutlinePlusSm className="icon" />
          <span>Add Category</span>
        </div>
      </div>
      <div className="admin__main__body__table">
        <div className="table">
          <div className="table__header">
            <div className="table__header__item flex-id">ID</div>
            <div className="table__header__item">ICON</div>
            <div className="table__header__item address">CATEGORY</div>
            <div className="table__header__item">PUBLISHED</div>
            <div className="table__header__item">ACTIONS</div>
          </div>
          {Categories.slice(0, 16).map((item, index) => (
            <div className="table__body">
              <div className="table__body__item flex-id">{item.id}</div>
              <div className="table__body__item ">
                <img src={item.image} alt="img" />
              </div>
              <div className="table__body__item address">{item.title}</div>
              <div className="table__body__item">
                {item.published ? (
                  <BsToggleOn className="toggle-on" />
                ) : (
                  <BsToggleOff className="toggle-off" />
                )}
              </div>
              <div className="table__body__item">
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
          <div className="table__footer">
            <div className="table__footer__show">SHOWING 1-16 OF 60</div>
            <div className="table__footer__pagination">
              <span
                onClick={() => page > 1 && setPage((_page) => _page - 1)}
                className={classNames("prev", page === 1 && "disable")}
              >
                <HiChevronLeft />
              </span>
              <span
                onClick={() => setPage(1)}
                className={classNames("page", page === 1 && "selected")}
              >
                1
              </span>
              <span
                onClick={() => setPage(2)}
                className={classNames("page", page === 2 && "selected")}
              >
                2
              </span>
              <span
                onClick={() => setPage(3)}
                className={classNames("page", page === 3 && "selected")}
              >
                3
              </span>
              <span
                onClick={() => setPage(4)}
                className={classNames("page", page === 4 && "selected")}
              >
                4
              </span>
              <span
                onClick={() => setPage(5)}
                className={classNames("page", page === 5 && "selected")}
              >
                5
              </span>
              <span className="dot">...</span>
              <span
                onClick={() => setPage(8)}
                className={classNames("page", page === 8 && "selected")}
              >
                8
              </span>
              <span
                onClick={() => page < 8 && setPage((_page) => _page + 1)}
                className={classNames("next", page === 8 && "disable")}
              >
                <HiChevronRight />
              </span>
            </div>
          </div>
        </div>
      </div>
      <EditCatg isOpen={isOpen} toggleDrawer={toggleDrawer} item={product} />
      <DeleteCatg hide={hide} visible={visible} item={product} />
    </div>
  );
};

export default Category;