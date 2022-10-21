import classNames from "classnames";
import React, { useState } from "react";
import { BiEdit, BiShowAlt, BiTrash } from "react-icons/bi";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { HiChevronLeft, HiChevronRight, HiOutlinePlusSm } from "react-icons/hi";
import { Categories } from "../../Api/data";

const Category = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="admin__main__body">
      <div className="admin__main__body__title">
        <span>Products</span>
      </div>
      <div className={classNames("admin__main__body__search", "categories")}>
        <input
          className="search"
          type="text"
          placeholder="Search by product name"
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
        <div className="button">
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
          {Categories.slice(1, 16).map((item, index) => (
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
                <BiShowAlt className="show" />
                <BiEdit className="edit" />
                <BiTrash className="delete" />
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
    </div>
  );
};

export default Category;
