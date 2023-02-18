import classNames from "classnames";
import React, { useEffect, useState } from "react";
import {
  HiOutlineShoppingCart,
  HiCheck,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import { RiStackLine } from "react-icons/ri";
import { ImCreditCard } from "react-icons/im";
import { BsArrowRepeat } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";

import { Orders } from "../../Api/data";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../../config/firebaseConfig";
import moment from "moment";

const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [todayTotal, setTodayTotal] = useState(0);
  const [todayOrder, setTodayOrder] = useState(0);
  const [orderPending, setOrderPending] = useState(0);
  const [orderDelivered, setOrderDelivered] = useState(0);
  const [orderProcessing, setOrderProcessing] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);
  const [orders, setOrders] = useState([]);

  const DATE = new Date().toLocaleDateString();

  useEffect(() => {
    window.scrollTo(0, 0);
    onSnapshot(
      query(collection(db, "Orders"), where("createDate", "==", DATE)),
      (snapshot) => {
        setTodayTotal(
          snapshot.docs.reduce((acc, doc) => acc + Number(doc.data().total), 0)
        );
        setTodayOrder(snapshot.docs.map((doc) => doc.data()).length);
        setOrderPending(
          snapshot.docs.filter((doc) => doc.data().status === "Pending").length
        );
        setOrderDelivered(
          snapshot.docs.filter((doc) => doc.data().status === "Delivered")
            .length
        );
        setOrderProcessing(
          snapshot.docs.filter((doc) => doc.data().status === "Processing")
            .length
        );
        setOrders(snapshot.docs.map((doc) => doc.data()));
      }
    );
  }, [DATE]);

  useEffect(
    () =>
      onSnapshot(collection(db, "Orders"), (snapshot) => {
        setTotalOrder(
          snapshot.docs.reduce((acc, doc) => acc + Number(doc.data().total), 0)
        );
      }),
    []
  );

  const Cards = () => {
    return (
      <div className="admin__main__body__cards">
        <div className="card color-0694A2">
          <div className="card__icon">
            <RiStackLine className="icon" />
          </div>
          <div className="card__title">
            <span>Today Order</span>
          </div>
          <div className="card__money">
            <span>$ {todayTotal.toFixed(2)}</span>
          </div>
        </div>
        <div className="card color-0646A2">
          <div className="card__icon">
            <HiOutlineShoppingCart className="icon" />
          </div>
          <div className="card__title">
            <span>This Month</span>
          </div>
          <div className="card__money">
            <span>$ {totalOrder.toFixed(2)}</span>
          </div>
        </div>
        <div className="card color-06A262">
          <div className="card__icon">
            <ImCreditCard className="icon" />
          </div>
          <div className="card__title">
            <span>Total Order</span>
          </div>
          <div className="card__money">
            <span>$ {totalOrder.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  };

  const Subcards = () => {
    return (
      <div className="admin__main__body__subcards">
        <div className="subcard">
          <div className="subcard__icon color-DED7FB">
            <HiOutlineShoppingCart className="icon" />
          </div>
          <div className="subcard__info">
            <div className="subcard__info__title">
              <span>Today Order</span>
            </div>
            <div className="subcard__info__amount">
              <span>{todayOrder}</span>
            </div>
          </div>
        </div>
        <div className="subcard">
          <div className="subcard__icon color-F7E3EE">
            <BsArrowRepeat className="icon" />
          </div>
          <div className="subcard__info">
            <div className="subcard__info__title">
              <span>Order Pending</span>
            </div>
            <div className="subcard__info__amount">
              <span>{orderPending}</span>
            </div>
          </div>
        </div>
        <div className="subcard">
          <div className="subcard__icon color-FBF4E2">
            <TbTruckDelivery className="icon" />
          </div>
          <div className="subcard__info">
            <div className="subcard__info__title">
              <span>Order Processing</span>
            </div>
            <div className="subcard__info__amount">
              <span>{orderProcessing}</span>
            </div>
          </div>
        </div>
        <div className="subcard">
          <div className="subcard__icon color-B9F8B9">
            <HiCheck className="icon" />
          </div>
          <div className="subcard__info">
            <div className="subcard__info__title">
              <span>Order Delivered</span>
            </div>
            <div className="subcard__info__amount">
              <span>{orderDelivered}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="admin__main__body">
      <div className="admin__main__body__title">
        <span>Dashboard Overview</span>
      </div>
      <Cards />
      <Subcards />
      <div className="admin__main__body__subtitle">
        <span>Recent Order</span>
      </div>
      <div className="admin__main__body__table">
        <div className="table">
          <div className="table__header">
            <div className="table__header__item">Order time</div>
            <div className={classNames("table__header__item", "address")}>
              deliver address
            </div>
            <div className="table__header__item">Phone</div>
            <div className="table__header__item">Payment method</div>
            <div className="table__header__item">total</div>
            <div className="table__header__item">status</div>
          </div>
          {orders.map((item, index) => (
            <div className="table__body">
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
                    item.status === "Canceled" && "color-cancel"
                  )}
                >
                  {item.status}
                </span>
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

export default Dashboard;
