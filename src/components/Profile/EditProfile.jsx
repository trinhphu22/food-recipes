import { doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { db } from "../../config/firebaseConfig";
import PreviewImage, { handleUpload } from "../common/PreviewImage";
import { userCurrentID } from "../Header/Header";

const EditProfile = (props) => {
  const { isOpen, toggleDrawer, user } = props;

  const [image, setImage] = useState(null);
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [addresses, setAddresses] = useState([]);
  const [address, setAddress] = useState();
  const [about, setAbout] = useState();

  const handleAddAddress = () => {
    const newAddresses = [...addresses];
    newAddresses.push({ address });
    setAddresses(newAddresses);
    setAddress("");
  };

  const handleRemoveAddress = (index) => {
    const newAddresses = [...addresses];
    newAddresses.splice(index, 1);
    setAddresses(newAddresses);
  };

  useEffect(() => {
    if (user) {
      setAddresses(user.addresses);
    }
  }, [user]);

  // Chỉnh sửa dữ liệu

  const handleUpdate = async (img) => {
    const docRef = doc(db, "Account", userCurrentID);
    const payload = {
      avatar: img ? img : user.avatar,
      email: user.email,
      role: user.role,
      name: name ? name : user.name,
      phoneNumber: phoneNumber ? phoneNumber : user.phoneNumber,
      addresses: addresses ? addresses : user.addresses,
      about: about ? about : user.about,
    };
    await setDoc(docRef, payload);
    toggleDrawer();
  };

  const handleEdit = () => {
    if (image) {
      handleUpload({ image, Func: handleUpdate });
    } else {
      handleUpdate();
    }
  };

  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      className="drawer"
      size={700}
    >
      <div className="drawer__header">
        <div>
          <div className="drawer__header__title">Profile</div>
          <div className="drawer__header__subtitle">
            Updated your Product category and necessary information from here
          </div>
        </div>
        <div className="drawer__header__close" onClick={toggleDrawer}>
          <IoMdClose className="icon" />
        </div>
      </div>
      <div className="drawer__body">
        <div className="card-sys">
          <div className="card-sys__item">
            <div className="title">Profile Picture</div>
            <PreviewImage
              Image={user?.avatar}
              image={image}
              setImage={setImage}
            />
          </div>
          <div className="card-sys__item">
            <div className="title">Email</div>
            <div className="content">
              <div className="input-container">
                <input
                  className="input"
                  type="text"
                  value={user?.email}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="card-sys__item">
            <div className="title">Name</div>
            <div className="content">
              <div className="input-container">
                <input
                  className="input"
                  type="text"
                  defaultValue={user?.name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="card-sys__item">
            <div className="title">Phone Number</div>
            <div className="content">
              <div className="input-container">
                <input
                  className="input"
                  type="text"
                  defaultValue={user?.phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="card-sys__item">
            <div className="title">Address</div>
            <div className="content">
              <div className="input-container">
                <input
                  className="input"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <div onClick={handleAddAddress} className="minus">
                  <HiOutlinePlusSm className="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-sys__item">
            <div className="title"></div>
            <div className="content">
              {addresses.map((item, index) => (
                <div className="input-container">
                  <span className="list">{item.address}</span>
                  <div
                    onClick={() => handleRemoveAddress(index)}
                    className="minus"
                  >
                    <HiOutlineMinusSm className="icon" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card-sys__item">
            <div className="title">About</div>
            <div className="content">
              <div className="area-container">
                <textarea
                  className="area"
                  defaultValue={user?.about}
                  onChange={(e) => {
                    setAbout(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer__footer">
        <button className="btn btn-cancel" onClick={toggleDrawer}>
          Cancel
        </button>
        <button
          onClick={() => {
            handleEdit();
          }}
          className="btn btn-update"
        >
          Update Profile
        </button>
      </div>
    </Drawer>
  );
};

export default EditProfile;
