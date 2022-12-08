import classNames from "classnames";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { HiChevronLeft, HiChevronRight, HiOutlinePlusSm } from "react-icons/hi";
import { db } from "../../../../config/firebaseConfig";
import DeleteCuis from "./DeleteCuis";
import EditCuis from "./EditCuis";

const Cuisine = () => {
  const [page, setPage] = useState(1);
  const [product, setProduct] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [cuisines, setCuisines] = useState([]);

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
      onSnapshot(collection(db, "Cuisines"), (snapshot) => {
        setCuisines(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      }),
    []
  );

  // Chỉnh sửa dữ liệu

  const handleUpdate = async (item, status) => {
    const docRef = doc(db, "Cuisines", item.id);
    const payload = {
      cuisine: item.cuisine,
      image: item.image,
      published: status,
    };
    setDoc(docRef, payload);
  };

  // Xoá dữ liệu trong db

  const handleDelete = async (id) => {
    const docRef = doc(db, "Cuisines", id);
    deleteDoc(docRef);
  };

  return (
    <div className="admin__main__body">
      <div className="admin__main__body__title">
        <span>Cuisine</span>
      </div>
      <div className={classNames("admin__main__body__search", "categories")}>
        <input className="search" type="text" placeholder="Search by country" />
        <select className="select">
          <option value="" selected disabled hidden>
            Cuisine
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <div
          onClick={() => {
            toggleDrawer();
            setProduct(null);
          }}
          className="button"
        >
          <HiOutlinePlusSm className="icon" />
          <span>Add Cuisine</span>
        </div>
      </div>
      <div className="admin__main__body__table">
        <div className="table">
          <div className="table__header">
            <div className="table__header__item flex-id">ID</div>
            <div className="table__header__item">ICON</div>
            <div className="table__header__item address">cuisine</div>
            <div className="table__header__item">PUBLISHED</div>
            <div className="table__header__item">ACTIONS</div>
          </div>
          {cuisines.map((item, index) => (
            <div className="table__body">
              <div className="table__body__item flex-id">{index + 1}</div>
              <div className="table__body__item ">
                <img className="img-country" src={item.image} alt="img" />
              </div>
              <div className="table__body__item address">{item.cuisine}</div>
              <div className="table__body__item">
                {item.published ? (
                  <BsToggleOn
                    onClick={() => {
                      handleUpdate(item, false);
                    }}
                    className="toggle-on"
                  />
                ) : (
                  <BsToggleOff
                    onClick={() => {
                      handleUpdate(item, true);
                    }}
                    className="toggle-off"
                  />
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
      <EditCuis isOpen={isOpen} toggleDrawer={toggleDrawer} item={product} />
      <DeleteCuis
        hide={hide}
        visible={visible}
        item={product}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Cuisine;
