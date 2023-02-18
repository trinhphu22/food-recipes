import classNames from "classnames";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { BiShowAlt } from "react-icons/bi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { db } from "../../../config/firebaseConfig";
import { Orders } from "../../Api/data";

const Order = () => {
  const [page, setPage] = useState(1);
  const [orders, setOrders] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "Orders"), (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      }),
    []
  );

  const handleUpdate = async (item, status) => {
    const docRef = doc(db, "Orders", item.id);
    const payload = {
      idUser: item.idUser,
      name: item.name,
      phoneNumber: item.phoneNumber,
      address: item.address,
      carts: item.carts,
      total: item.total,
      method: item.method,
      status: status,
      createDate: item.createDate,
    }; //Gán giá trị mới vào db
    setDoc(docRef, payload);
  };

  return (
    <div className="admin__main__body">
      <div className="admin__main__body__title">
        <span>Orders</span>
      </div>
      <div className={classNames("admin__main__body__search", "orders")}>
        <input className="search" type="text" placeholder="Search by phone" />
        <select className="select">
          <option value="" selected disabled hidden>
            Status
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <select className="select">
          <option value="" selected disabled hidden>
            Order limits
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        {/* <div className="button">
          <HiOutlinePlusSm className="icon" />
          <span>Add Category</span>
        </div> */}
      </div>
      <div className="admin__main__body__table">
        <div className="table">
          <div className="table__header">
            <div className="table__header__item flex-id">sr no</div>
            <div className="table__header__item">Order time</div>
            <div className={classNames("table__header__item", "address")}>
              deliver address
            </div>
            <div className="table__header__item">Phone</div>
            <div className="table__header__item">Payment method</div>
            <div className="table__header__item">total</div>
            <div className="table__header__item">status</div>
            <div className="table__header__item">action</div>
            <div className="table__header__item invoice">INVOICE</div>
          </div>
          {orders
            .sort((a, b) => (a.createDate < b.createDate ? 1 : -1))
            .map((item, index) => (
              <div className="table__body">
                <div className="table__body__item flex-id">{index + 1}</div>
                <div className="table__body__item">
                  {moment(item.createDate, "DD/MM/YYYY").format("ll")}
                </div>
                <div className={classNames("table__body__item", "address")}>
                  {item.address}
                </div>
                <div className="table__body__item">{item.phoneNumber}</div>
                <div className="table__body__item">
                  <span className="txt-bold">{item.method}</span>
                </div>
                <div className="table__body__item">
                  <span className="txt-bold">{item.total}</span>
                </div>
                <div className="table__body__item">
                  <span
                    className={classNames(
                      "status",
                      item.status === "Pending" && "color-F7E3EE",
                      item.status === "Processing" && "color-FBF4E2",
                      item.status === "Delivered" && "color-B9F8B9",
                      // item.status === "Complete" && "color-D8F0FA",
                      item.status === "Canceled" && "color-cancel"
                    )}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="table__body__item">
                  <select
                    disabled={
                      item.status === "Canceled" || item.status === "Delivered"
                    }
                    value={item.status}
                    onChange={(e) => {
                      handleUpdate(item, e.target.value);
                    }}
                    className="select-process"
                  >
                    <option
                      disabled={
                        item.status === "Processing" ||
                        item.status === "Delivered"
                      }
                      value="Pending"
                    >
                      Pending
                    </option>
                    <option
                      disabled={item.status === "Delivered"}
                      value="Processing"
                    >
                      Processing
                    </option>
                    <option value="Delivered">Delivered</option>
                    <option
                      disabled={item.status === "Delivered"}
                      value="Canceled"
                    >
                      Cancel
                    </option>
                  </select>
                </div>
                <div className="table__body__item invoice">
                  <BiShowAlt className="show" />
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
    </div>
  );
};

export default Order;
