import classNames from "classnames";
import React, { useState } from "react";
import { HiMinusSm, HiPlusSm, HiShoppingCart, HiX } from "react-icons/hi";

import Image from "../assets/images/image4.jpeg";
import Paypal from "../assets/images/paypal.png";
import Visa from "../assets/images/credit.png";

const Cart = () => {
  const [num, setNum] = useState(2);
  const [numItem, setNumItem] = useState(1);

  const BasketNull = () => {
    return (
      <div className="cart__header">
        <div className="cart__header__title">
          <div className="title">Shopping Basket</div>
          <div className="subtitle">Your basket is empty.</div>
        </div>
        <div className="cart__header__button">
          <button className="button">Continue Shopping</button>
        </div>
      </div>
    );
  };

  const Basket = () => {
    return (
      <>
        <div className="cart__header">
          <div className="cart__header__title">
            <div className="title">Your Basket</div>
            <div className="subtitle">You have {num} items in your basket.</div>
          </div>
          <div className="cart__header__button">
            <button className="button">Checkout</button>
          </div>
        </div>
        <div className="cart__body">
          <div className="cart__body__items">
            <div className="cart__body__items__item">
              <div className="cart__body__items__item__image">
                <img src={Image} alt="" />
                <span>Name</span>
              </div>
              <div className="cart__body__items__item__quantity">
                <div className="quantity">
                  <HiMinusSm
                    onClick={() => {
                      numItem > 1 && setNumItem(numItem - 1);
                    }}
                    className="minus"
                  />
                  <span className="number">{numItem}</span>
                  <HiPlusSm
                    onClick={() => {
                      setNumItem(numItem + 1);
                    }}
                    className="plus"
                  />
                </div>
              </div>
              <div className="cart__body__items__item__price">
                <span>$ 8.9</span>
              </div>
              <div className="cart__body__items__item__remove">
                <HiX />
              </div>
            </div>
            <div className="cart__body__items__item">
              <div className="cart__body__items__item__image">
                <img src={Image} alt="" />
                <span>Name</span>
              </div>
              <div className="cart__body__items__item__quantity">
                <div className="quantity">
                  <HiMinusSm
                    onClick={() => {
                      numItem > 1 && setNumItem(numItem - 1);
                    }}
                    className="minus"
                  />
                  <span className="number">{numItem}</span>
                  <HiPlusSm
                    onClick={() => {
                      setNumItem(numItem + 1);
                    }}
                    className="plus"
                  />
                </div>
              </div>
              <div className="cart__body__items__item__price">
                <span>$ 8.9</span>
              </div>
              <div className="cart__body__items__item__remove">
                <HiX />
              </div>
            </div>
          </div>
          <div className="cart__body__subtotal">
            <div className="cart__body__subtotal__title">
              <span>Subtotal</span>
            </div>
            <div className="cart__body__subtotal__info">
              <div className="info">
                <span>Subtotal:</span>
                <span>$ 8.9</span>
              </div>
              <div className="info">
                <span>Shipping:</span>
                <span>$ 8.9</span>
              </div>
              <div className="info">
                <span>Discount:</span>
                <span>$ 8.9</span>
              </div>
              <div className="total">
                <span>Total:</span>
                <span>$ 8.9</span>
              </div>
            </div>
            <div className="cart__body__subtotal__button">
              <div className={classNames("button", "btn-checkout")}>
                <HiShoppingCart className="icon" />
                <span>COD</span>
              </div>
              <div className={classNames("button", "btn-icon")}>
                <img src={Paypal} alt="" />
              </div>
              <div className={classNames("button", "btn-icon")}>
                <img src={Visa} alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return <div className="cart">{num === 0 ? <BasketNull /> : <Basket />}</div>;
};

export default Cart;
