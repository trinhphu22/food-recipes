import classNames from "classnames";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { BiShowAlt } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { Orders } from "../components/Api/data";
import { db } from "../config/firebaseConfig";

const Order = () => {
  const { id } = useParams();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    onSnapshot(
      query(collection(db, "Orders"), where("idUser", "==", id)),
      (snapshot) => {
        setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    );
  }, [id]);

  const handleCancel = (item) => {
    const docRef = doc(db, "Orders", item.id);
    const payload = {
      idUser: item.idUser,
      name: item.name,
      phoneNumber: item.phoneNumber,
      address: item.address,
      carts: item.carts,
      total: item.total,
      method: item.method,
      status: "Canceled",
      createDate: item.createDate,
    }; //Gán giá trị mới vào db
    setDoc(docRef, payload);
  };

  return (
    <div className="manage">
      <div className="manage__title">
        <span>Orders</span>
      </div>
      <div className={classNames("manage__search", "orders")}>
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
      <div className="manage__table">
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
          {orders.length > 0 &&
            orders
              .sort((a, b) => (a.createDate < b.createDate ? 1 : -1))
              .map((item, index) => (
                <div className="table__body">
                  <div className="table__body__item flex-id">{index + 1}</div>
                  <div className="table__body__item">
                    {moment(item.createDate, "DD/MM/YY").format("ll")}
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
                        item.status === "Canceled" && "color-cancel"
                      )}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div className="table__body__item">
                    <div
                      onClick={() => {
                        item.status !== "Canceled" &&
                          item.status !== "Processing" &&
                          item.status !== "Delivered" &&
                          handleCancel(item);
                      }}
                      className={
                        item.status !== "Canceled" &&
                        item.status !== "Processing" &&
                        item.status !== "Delivered"
                          ? "table__body__item__cancel"
                          : "disable"
                      }
                    >
                      <span className="txt-bold">Cancel</span>
                    </div>
                  </div>
                  <div className="table__body__item invoice">
                    <BiShowAlt className="show" />
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
