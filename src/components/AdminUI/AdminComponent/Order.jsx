import classNames from "classnames";
import React, { useState } from "react";
import { BiEdit, BiShowAlt, BiTrash } from "react-icons/bi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Orders } from "../../Api/data";

const Order = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="admin__main__body">
      <div className="admin__main__body__title">
        <span>Orders</span>
      </div>
      <div className={classNames("admin__main__body__search", "customers")}>
        <input
          className="search"
          type="text"
          placeholder="Search by name/email/phone"
        />
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
                    item.status === "Delivered" && "color-B9F8B9"
                  )}
                >
                  {item.status}
                </span>
              </div>
              <div className="table__body__item">
                <select className="select-process" name="" id="">
                  <option value="">Pending</option>
                  <option value="">Delivered</option>
                  <option value="">Processing</option>
                  <option value="">Cancel</option>
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
