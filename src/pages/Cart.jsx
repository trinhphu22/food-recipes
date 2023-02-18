import classNames from "classnames";
import React, { useEffect, useState } from "react";
import {
  HiMinusSm,
  HiOutlineLogin,
  HiPlusSm,
  HiShoppingCart,
  HiX,
} from "react-icons/hi";

import Image from "../assets/images/image4.jpeg";
import Paypal from "../assets/images/paypal.png";
import Visa from "../assets/images/credit.png";
import COD from "../components/Checkout/COD";
import { PayPalButton } from "react-paypal-button-v2";
import { Link, useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../config/firebaseConfig";
import { userCurrent, userCurrentID } from "../components/Header/Header";
import { onAuthStateChanged } from "firebase/auth";

const Cart = () => {
  const [numItem, setNumItem] = useState(1);
  const [visible, setVisible] = useState(false);
  const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState({});
  const createDate = new Date().toLocaleDateString();

  const navigate = useNavigate();

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser("");
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    onSnapshot(
      query(collection(db, "Carts"), where("userID", "==", userCurrentID)),
      (snapshot) => {
        setTotal(
          snapshot.docs.reduce(
            (acc, doc) => acc + doc.data().price * doc.data().quantity,
            0
          )
        );
        setCarts(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      }
    );
  }, []);

  const handleAdd = async (details) => {
    const collectionRef = collection(db, "Orders"); //Ghi hoặc đọc db trong collection và tạo id tự động
    const payload = {
      idUser: userCurrentID,
      name: details.payer.name.given_name,
      phoneNumber: userCurrent.phoneNumber,
      address: userCurrent.addresses[0].address,
      carts: carts,
      total: total,
      method: "Paypal",
      status: "Pending",
      createDate: createDate,
    }; //Gán giá trị mới vào db
    await addDoc(collectionRef, payload);
    navigate("/");
  };

  const handleDelete = async (id) => {
    const docRef = doc(db, "Carts", id);
    deleteDoc(docRef);
  };

  const handleOrder = (details) => {
    handleAdd(details)
      .then(() => {
        for (let i = 0; i < carts.length; i++) {
          handleDelete(carts[i].id);
        }
      })
      .finally(() => {
        hide();
      });
  };

  const handleChangeQuantity = async (choose, quantity) => {
    const docRef = doc(db, "Carts", choose.id);
    const payload = {
      userID: userCurrentID,
      productID: choose.id,
      image: choose.image,
      title: choose.title,
      price: choose.price,
      quantity: choose.quantity + quantity,
    };
    await setDoc(docRef, payload);
    console.log("object", choose, quantity);
  };

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
            <div className="subtitle">
              You have {carts.length} items in your basket.
            </div>
          </div>
        </div>
        <div className="cart__body">
          <div className="cart__body__items">
            {carts.map((item) => (
              <div className="cart__body__items__item">
                <div className="cart__body__items__item__image">
                  <img src={item.image} alt="" />
                  <span>{item.title}</span>
                </div>
                <div className="cart__body__items__item__quantity">
                  <div className="quantity">
                    <HiMinusSm
                      onClick={() => {
                        // numItem > 1 && setNumItem(numItem - 1);
                        // console.log("object", item, -numItem);
                        handleChangeQuantity(item, item.quantity > 1 ? -1 : 0);
                      }}
                      className="minus"
                    />
                    <span className="number">{item.quantity}</span>
                    <HiPlusSm
                      onClick={() => {
                        // setNumItem(numItem + 1);
                        handleChangeQuantity(item, 1);
                      }}
                      className="plus"
                    />
                  </div>
                </div>
                <div className="cart__body__items__item__price">
                  <span>$ {item.price}</span>
                </div>
                <div className="cart__body__items__item__price">
                  <span>$ {(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <div
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                  className="cart__body__items__item__remove"
                >
                  <HiX />
                </div>
              </div>
            ))}
          </div>
          <div className="cart__body__subtotal">
            <div className="cart__body__subtotal__title">
              <span>Subtotal</span>
            </div>
            <div className="cart__body__subtotal__info">
              <div className="info">
                <span>Subtotal:</span>
                <span>$ {total.toFixed(2)}</span>
              </div>
              <div className="info">
                <span>Shipping:</span>
                <span>$ 0</span>
              </div>
              <div className="info">
                <span>Discount:</span>
                <span>$ 0</span>
              </div>
              <div className="total">
                <span>Total:</span>
                <span>$ {total.toFixed(2)}</span>
              </div>
            </div>
            {user ? (
              // {/* login */}
              <div className="cart__body__subtotal__button">
                <div
                  onClick={() => show()}
                  className={classNames("button", "btn-checkout")}
                >
                  <HiShoppingCart className="icon" />
                  <span>COD</span>
                </div>
                <PayPalButton
                  amount={total.toFixed(2)}
                  options={{
                    clientId:
                      "AYul7kWs3fnD4hPnuO1dPBt_zXoj3Qvh-JhKU0kDuM3VnkpUdFfkCbN0VBgZ60LXFI5VzSdihLgAmFxH",
                    currency: "USD",
                    locale: "en_US",
                  }}
                  // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                  onSuccess={(details, data) => {
                    alert(
                      "Transaction completed by " +
                        details.payer.name.given_name
                    );
                    handleOrder(details);
                    // OPTIONAL: Call your server to save the transaction
                    return fetch("/paypal-transaction-complete", {
                      method: "post",
                      body: JSON.stringify({
                        orderID: data.orderID,
                      }),
                    });
                  }}
                />
              </div>
            ) : (
              // {/* don't login */}
              <div className="cart__body__subtotal__button">
                <div className="subtitle">
                  You need to login to make payment
                </div>
                <Link
                  to="/login"
                  onClick={() => show()}
                  className={classNames("button", "btn-checkout")}
                >
                  <HiOutlineLogin className="icon" />
                  <span>Login</span>
                </Link>
              </div>
            )}
          </div>
        </div>
        <COD
          hide={hide}
          visible={visible}
          carts={carts}
          total={total.toFixed(2)}
        />
      </>
    );
  };

  return (
    <div className="cart">
      {carts.length === 0 ? <BasketNull /> : <Basket />}
    </div>
  );
};

export default Cart;
