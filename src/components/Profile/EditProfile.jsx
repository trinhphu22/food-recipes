import React from "react";
import { IoMdClose } from "react-icons/io";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import PreviewImage from "../common/PreviewImage";

const EditProfile = (props) => {
  const { isOpen, toggleDrawer, image } = props;

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
            <div className="title">Avatar</div>
            <PreviewImage
              Image={image}
            //   image={image}
            //   setImage={setImage}
            />
          </div>
          <div className="card-sys__item">
            <div className="title">Email</div>
            <div className="content">
              <div className="input-container">
                <input
                  className="input"
                  type="text"
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
                />
              </div>
            </div>
          </div>
          <div className="card-sys__item">
            <div className="title">About</div>
            <div className="content">
              <div className="area-container">
                <textarea className="area" name="" id="" />
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
            //   handleEdit();
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
