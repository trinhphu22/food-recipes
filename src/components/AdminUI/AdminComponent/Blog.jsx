import classNames from "classnames";
import React, { useState } from "react";
import { BiEdit, BiShowAlt, BiTrash } from "react-icons/bi";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { HiChevronLeft, HiChevronRight, HiOutlinePlusSm } from "react-icons/hi";
import { Blogs, Countries } from "../../Api/data";
import Image from "../../../assets/images/image3.jpeg";

const Blog = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="admin__main__body">
      <div className="admin__main__body__title">
        <span>Blog</span>
      </div>
      <div className={classNames("admin__main__body__search", "categories")}>
        <input className="search" type="text" placeholder="Search by title" />
        <select className="select">
          <option value="" selected disabled hidden>
            Author
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <div className="button">
          <HiOutlinePlusSm className="icon" />
          <span>Add Blog</span>
        </div>
      </div>
      <div className="admin__main__body__table">
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
            <div className="table__footer__show">SHOWING 1-4 OF 60</div>
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

export default Blog;
