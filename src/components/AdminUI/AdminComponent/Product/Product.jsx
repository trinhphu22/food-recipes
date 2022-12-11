import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { HiChevronLeft, HiChevronRight, HiOutlinePlusSm } from "react-icons/hi";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { BiShowAlt, BiEdit, BiTrash } from "react-icons/bi";
// import { Products } from "../../../Api/data";
// import Message from "../../common/Message";
import EditProd from "./EditProd";
import DeleteProd from "./DeleteProd";
import { GiBlackBook } from "react-icons/gi";
import RecipeProd from "./RecipeProd";
import Popup from "../../../common/Popup";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../../config/firebaseConfig";

const Product = ({ setActive }) => {
  const [product, setProduct] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [products, setProducts] = useState([]);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  useEffect(
    () =>
      onSnapshot(collection(db, "Products"), (snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      }),
    []
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "Category"), (snapshot) => {
        setCategories(
          snapshot.docs.map((doc) => ({
            value: doc.data().category,
            label: doc.data().category,
          }))
        );
      }),
    []
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "Cuisines"), (snapshot) => {
        setCuisines(
          snapshot.docs.map((doc) => ({
            value: doc.data().cuisine,
            label: doc.data().cuisine,
          }))
        );
      }),
    []
  );

  const handleDelete = async (id) => {
    const docRef = doc(db, "Products", id);
    deleteDoc(docRef);
  };

  return (
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
          {categories.map((item) => (
            <option value={item.value}>{item.label}</option>
          ))}
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
          {products.map((item, index) => (
            <div className="table__body">
              <div className="table__body__item flex-id">{index + 1}</div>
              <div className="table__body__item address">
                <div className="product-name">
                  <img src={item.image} alt="img" />
                  <span>{item.title}</span>
                </div>
              </div>
              <div className="table__body__item category">
                <span className="item-spc">{item.category}</span>
              </div>
              <div className="table__body__item">{item.cuisine}</div>
              <div className="table__body__item">
                <span className="txt-bold">{item.price}$</span>
              </div>
              <div className="table__body__item">
                <span
                  className={classNames(
                    "status",
                    item.status === "Selling" ? "color-B9F8B9" : "color-F7E3EE"
                  )}
                >
                  {item.status}
                </span>
              </div>
              <div className="table__body__item">
                {item.discount && (
                  <span className="txt-bold">{item.discount}% Off</span>
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
                <BiShowAlt
                  onClick={() => setActive("Product-Detail")}
                  className="show"
                />
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
        </div>
      </div>
      {/* {click && <Message message={"1234"} time={3000} />} */}
      {/* Drawer */}
      <EditProd
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
        product={product}
        categories={categories}
        cuisines={cuisines}
      />
      {/* <RecipeProd isOpen={isOpen} toggleDrawer={toggleDrawer} item={product} /> */}
      <DeleteProd
        hide={hide}
        visible={visible}
        item={product}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Product;
