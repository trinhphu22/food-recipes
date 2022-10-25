import classNames from "classnames";
import React, { useState } from "react";
import { BiEdit, BiShowAlt, BiTrash } from "react-icons/bi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Users } from "../../Api/data";

const Customer = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="admin__main__body">
      <div className="admin__main__body__title">
        <span>Customers</span>
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
            <div className="table__header__item flex-id">ID</div>
            <div className="table__header__item"> Join date</div>
            <div className="table__header__item">name</div>
            <div className="table__header__item address">email</div>
            <div className="table__header__item">phone</div>
            <div className="table__header__item">role</div>
            <div className="table__header__item">ACTIONS</div>
          </div>
          {Users.slice(0, 8).map((item, index) => (
            <div className="table__body">
              <div className="table__body__item flex-id">{item.id}</div>
              <div className="table__body__item ">{item.createDate}</div>
              <div className="table__body__item ">{item.name}</div>
              <div className="table__body__item address">{item.email}</div>
              <div className="table__body__item ">{item.phone}</div>
              <div className="table__body__item ">{item.role}</div>
              <div className="table__body__item">
                <BiShowAlt className="show" />
                <BiTrash className="delete" />
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

export default Customer;
