import classNames from "classnames";
import React from "react";
import { BiShowAlt } from "react-icons/bi";
import { Orders } from "../components/Api/data";

const Order = () => {
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
          {Orders.map((item, index) => (
            <div className="table__body">
              <div className="table__body__item flex-id">{item.id}</div>
              <div className="table__body__item">{item.date}</div>
              <div className={classNames("table__body__item", "address")}>
                {item.address}
              </div>
              <div className="table__body__item">{item.phone}</div>
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
                <div className="table__body__item__cancel">
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
