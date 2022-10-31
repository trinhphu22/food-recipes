import React from "react";

import { IoMdClose } from "react-icons/io";
import PreviewImage from "../../../common/PreviewImage";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const EditCuis = ({ isOpen, toggleDrawer, item }) => {
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
        <div className="drawer__header__title">Update Cuisine</div>
        <div className="drawer__header__subtitle">
        Updated your Product cuisine and necessary information from here
        </div>
      </div>
      <div className="drawer__header__close" onClick={toggleDrawer}>
        <IoMdClose className="icon" />
      </div>
    </div>
    <div className="drawer__body">
      <div className="card-sys">
        <div className="card-sys__item">
          <div className="title">Country Image</div>
          <PreviewImage Image={item?.image} />
        </div>
        <div className="card-sys__item">
          <div className="title">Country Name</div>
          <div className="content">
            <div className="input-container">
              <input
                className="input"
                type="text"
                defaultValue={item?.title}
              />
            </div>
          </div>
        </div>
        <div className="card-sys__item">
          <div className="title">Published</div>
          <div className="content">
            <div className="select">
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="drawer__footer">
      <button className="btn btn-cancel" onClick={toggleDrawer}>
        Cancel
      </button>
      <button className="btn btn-update">
        {item ? "Update Product" : "Add Product"}
      </button>
    </div>
  </Drawer>
  )
}

export default EditCuis