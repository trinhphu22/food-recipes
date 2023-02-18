import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Rodal from "rodal";

// include styles
import "rodal/lib/rodal.css";
import { db } from "../../config/firebaseConfig";
import { userCurrent, userCurrentID } from "../Header/Header";

const COD = (props) => {
  const { hide, visible, carts, total } = props;

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const createDate = new Date().toLocaleDateString();

  const navigate = useNavigate();

  const clearInputs = () => {
    setName("");
    setPhoneNumber("");
    setAddress("");
  };

  // Thêm dữ liệu vào db

  const handleAdd = async () => {
    const collectionRef = collection(db, "Orders"); //Ghi hoặc đọc db trong collection và tạo id tự động
    const payload = {
      idUser: userCurrentID,
      name: name ? name : userCurrent.name,
      phoneNumber: phoneNumber ? phoneNumber : userCurrent.phoneNumber,
      address: address ? address : userCurrent.addresses[0].address,
      carts: carts,
      total: total,
      method: "COD",
      status: "Pending",
      createDate: createDate,
    }; //Gán giá trị mới vào db
    await addDoc(collectionRef, payload);
    clearInputs();
    navigate("/");
  };

  const handleDelete = async (id) => {
    const docRef = doc(db, "Carts", id);
    deleteDoc(docRef);
  };

  const handleOrder = () => {
    handleAdd()
      .then(() => {
        for (let i = 0; i < carts.length; i++) {
          handleDelete(carts[i].id);
        }
      })
      .finally(() => {
        hide();
        alert("Complete Order");
      });
  };

  return (
    <Rodal
      width={800}
      height={500}
      visible={visible}
      showCloseButton={false}
      customStyles={{ borderRadius: "10px" }}
    >
      <div className="modal">
        <div className="modal__info">
          <div className="modal__info__title title">
            <span className="icon">Cash On Delivery </span>
          </div>
        </div>
        <div className="modal__input">
          <div className="title">Email</div>
          <div className="content">
            <div className="input-container">
              <input
                disabled
                className="input"
                type="text"
                value={userCurrent.email}
              />
            </div>
          </div>
        </div>
        <div className="modal__input">
          <div className="title">Full Name</div>
          <div className="content">
            <div className="input-container">
              <input className="input" type="text" value={userCurrent.name} />
            </div>
          </div>
        </div>

        <div className="modal__input">
          <div className="title">Phone Number</div>
          <div className="content">
            <div className="input-container">
              <input
                className="input"
                type="text"
                value={userCurrent.phoneNumber}
              />
            </div>
          </div>
        </div>
        <div className="modal__input">
          <div className="title">Address</div>
          <div className="content">
            <div className="select">
              <select
                onChange={(e) => {
                  // setProductStatus(e.target.value);
                }}
              >
                {userCurrent.addresses.map((item, index) => (
                  <option selected value="Selling">
                    {item.address}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="modal__buttons">
          <button className="btn btn-cancel" onClick={hide}>
            Cancel
          </button>
          <button
            onClick={() => {
              // handleAdd();
              handleOrder();
            }}
            className="btn btn-delete"
          >
            Checkout
          </button>
        </div>
      </div>
    </Rodal>
  );
};

export default COD;
