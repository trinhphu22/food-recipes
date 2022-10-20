import classNames from "classnames";
import React, { useState } from "react";
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

const TurnoverCard = [
  {
    name: "Today Order",
    icon: <RiStackLine className="icon" />,
    total: "$75",
    color: "0694A2",
  },
  {
    name: "This Month",
    icon: <HiOutlineShoppingCart className="icon" />,
    total: "$75",
    color: "0646A2",
  },
  {
    name: "Total Order",
    icon: <ImCreditCard className="icon" />,
    total: "$75",
    color: "06A262",
  },
];

const OderCard = [
  {
    name: "Today Order",
    icon: <HiOutlineShoppingCart className="icon" />,
    amount: "75",
    color: "DED7FB",
  },
  {
    name: "Order Pending",
    icon: <BsArrowRepeat className="icon" />,
    amount: "75",
    color: "F7E3EE",
  },
  {
    name: "Order Processing",
    icon: <TbTruckDelivery className="icon" />,
    amount: "75",
    color: "FBF4E2",
  },
  {
    name: "Order Delivered",
    icon: <HiCheck className="icon" />,
    amount: "75",
    color: "B9F8B9",
  },
];

const Dashboard = () => {
  const [page, setPage] = useState(1);

  const Cards = () => {
    return (
      <div className="admin__main__body__cards">
        {TurnoverCard.map((item, index) => (
          <div className={classNames("card", `color-${item.color}`)}>
            <div className="card__icon">{item.icon}</div>
            <div className="card__title">
              <span>{item.name}</span>
            </div>
            <div className="card__money">
              <span>{item.total}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const Subcards = () => {
    return (
      <div className="admin__main__body__subcards">
        {OderCard.map((item, index) => (
          <div className="subcard">
            <div className={classNames("subcard__icon", `color-${item.color}`)}>
              {item.icon}
            </div>
            <div className="subcard__info">
              <div className="subcard__info__title">
                <span>{item.name}</span>
              </div>
              <div className="subcard__info__amount">
                <span>{item.amount}</span>
              </div>
            </div>
          </div>
        ))}
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
          {Orders.map((item, index) => (
            <div className="table__body">
              <div className="table__body__item">{item.date}</div>
              <div className={classNames("table__body__item", "address")}>
                {item.address}
              </div>
              <div className="table__body__item">{item.phone}</div>
              <div className="table__body__item">
                <span className="method">{item.method}</span>
              </div>
              <div className="table__body__item">
                <span className="total">{item.total}</span>
              </div>
              <div className="table__body__item">
                <span
                  className={classNames(
                    "status",
                    item.status === "Pending" && "color-F7E3EE",
                    item.status === "Processing" && "color-FBF4E2",
                    item.status === "Delivered" && "color-B9F8B9"
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
