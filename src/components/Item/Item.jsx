import React, { useEffect } from "react";
import { BsHourglassSplit } from "react-icons/bs";
import { MdLocalFireDepartment } from "react-icons/md";
import { IoIosHeart, IoIosHeartDislike } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "../common/Rating";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { userCurrentID } from "../Header/Header";

const Item = ({ item }) => {
  const [isShow, setIsShow] = useState(false);
  const [select, setSelect] = useState(false);
  const [carts, setCarts] = useState([]);
  const [productID, setProductID] = useState(null);

  // console.log("object", item);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "Carts"), where("productID", "==", productID)),
      (snapshot) =>
        setCarts(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        )
    );
  }, [productID]);

  // console.log("first", carts[0].id);

  const handleAddToCart = (choose) => {
    if (carts.length === 0) {
      handleAdd(choose);
    } else {
      handleUpdate(choose);
    }
  };

  const handleAdd = async (choose) => {
    const collectionRef = collection(db, "Carts"); //Ghi hoặc đọc db trong collection và tạo id tự động
    const payload = {
      userID: userCurrentID,
      productID: choose.id,
      image: choose.image,
      title: choose.title,
      price: choose.price,
      quantity: 1,
    }; //Gán giá trị mới vào db
    await addDoc(collectionRef, payload);
  };

  const handleUpdate = async (choose) => {
    const docRef = doc(db, "Carts", carts[0].id);
    const payload = {
      userID: userCurrentID,
      productID: choose.id,
      image: choose.image,
      title: choose.title,
      price: choose.price,
      quantity: carts.length + 1,
    };
    await setDoc(docRef, payload);
  };

  return (
    <div
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      className="item"
    >
      <img src={item.image} alt="" />
      {isShow && (
        <>
          <Link to={`/foods/${item.id}`} className="item__background" />
          <div
            onClick={() => {
              setProductID(item.id);
              handleAddToCart(item);
            }}
            className="item__add-cart"
          >
            <span className="text">Add to cart</span>
          </div>
          <Rating item={item} />
        </>
      )}
      {select ? (
        <div onClick={() => setSelect(false)} className="item__favorite-select">
          <IoIosHeartDislike />
        </div>
      ) : (
        <div onClick={() => setSelect(true)} className="item__favorite">
          <IoIosHeart />
        </div>
      )}
      <Link to={`/foods/${item.id}`} className="item__triangle" />
      <div className="item__collect">
        <span className="text">{item.cuisine}</span>
      </div>
      <div className="item__icons">
        <div className="item__icons__icon">
          <BsHourglassSplit />
          <span className="info">{item.ingredientsTotal} Ingredients</span>
        </div>
        <div className="item__icons__icon">
          <MdLocalFireDepartment />
          <span className="info">{item.cookingTime} minutes</span>
        </div>
      </div>
      <Link to={`/foods/${item.id}`} className="item__title">
        <span>{item.title}</span>
      </Link>
      <div className="item__price">
        <span>{item.price} $</span>
      </div>
    </div>
  );
};

export default Item;
