import React, { useState } from "react";
import classNames from "classnames";
import { HiChevronLeft, HiChevronRight, HiOutlinePlusSm } from "react-icons/hi";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { BiShowAlt, BiEdit, BiTrash } from "react-icons/bi";
import { Products } from "../../../Api/data";
// import Message from "../../common/Message";
import EditProd from "./EditProd";
import DeleteProd from "./DeleteProd";
import { GiBlackBook } from "react-icons/gi";
import RecipeProd from "./RecipeProd";
import Popup from "../../../common/Popup";

const Product = () => {
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
    <>
      <div className="admin__main__body">
        <div className="admin__main__body__title">
          <span>Products</span>
        </div>
        <div className={classNames("admin__main__body__search", "products")}>
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
          <select className="select">
            <option value="" selected disabled hidden>
              Price
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <div
            onClick={() => {
              toggleDrawer();
            }}
            className="button"
          >
            <HiOutlinePlusSm className="icon" />
            <span>Add Product</span>
          </div>
        </div>
        <div className="admin__main__body__table">
          <div className="table">
            <div className="table__header">
              <div className="table__header__item flex-id">ID</div>
              <div className="table__header__item address">PRODUCT NAME</div>
              <div className="table__header__item category">CATEGORY</div>
              <div className="table__header__item">cuisine</div>
              <div className="table__header__item">PRICE</div>
              <div className="table__header__item">STATUS</div>
              <div className="table__header__item">DISCOUNT</div>
              <div className="table__header__item">PUBLISHED</div>
              <div className="table__header__item action">ACTIONS</div>
            </div>
            {Products.map((item, index) => (
              <div className="table__body">
                <div className="table__body__item flex-id">{item.id}</div>
                <div className="table__body__item address">
                  <div className="product-name">
                    <img src={item.image} alt="img" />
                    <span>{item.title}</span>
                  </div>
                </div>
                <div className="table__body__item category">
                  {item.categories.map((item, index) => (
                    <span className="item-spc">{item.category}</span>
                  ))}
                </div>
                <div className="table__body__item">{item.cuisine}</div>
                <div className="table__body__item">
                  <span className="txt-bold">{item.price}</span>
                </div>
                <div className="table__body__item">
                  <span
                    className={classNames(
                      "status",
                      item.status === "selling"
                        ? "color-B9F8B9"
                        : "color-F7E3EE"
                    )}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="table__body__item">
                  {item.discount && (
                    <span className="txt-bold">{item.discount} Off</span>
                  )}
                </div>
                <div className="table__body__item">
                  {item.published ? (
                    <BsToggleOn className="toggle-on" />
                  ) : (
                    <BsToggleOff className="toggle-off" />
                  )}
                </div>
                <div className="table__body__item action">
                  <BiShowAlt className="show" />
                  <BiEdit
                    onClick={() => {
                      toggleDrawer();
                      setProduct(item);
                    }}
                    className="edit"
                  />
                  {/* <GiBlackBook
                    onClick={() => {
                      toggleDrawer();
                    }}
                    className="recipe"
                  /> */}
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
              <div className="table__footer__show">SHOWING 1-8 OF 60</div>
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
        {/* {click && <Message message={"1234"} time={3000} />} */}
        {/* Drawer */}
        <EditProd isOpen={isOpen} toggleDrawer={toggleDrawer} item={product} />
        <RecipeProd
          isOpen={isOpen}
          toggleDrawer={toggleDrawer}
          item={product}
        />
        <DeleteProd hide={hide} visible={visible} item={product} />
      </div>
    </>
  );
};

export default Product;
