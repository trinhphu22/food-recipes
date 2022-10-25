import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import PreviewImage from "../../common/PreviewImage";

const Tag = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleDrawer}>Show</button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="drawer"
        size={700}
      >
        <div className="drawer__header">
          <div>
            <div className="drawer__header__title">Update Product</div>
            <div className="drawer__header__subtitle">
              Updated your product and necessary information from here
            </div>
          </div>
          <div className="drawer__header__close" onClick={toggleDrawer}>
            <IoMdClose className="icon" />
          </div>
        </div>
        <div className="drawer__body">
          <div className="card-sys">
            <div className="card-sys__item">
              <div className="title">Product Image</div>
              <PreviewImage Image={Image} />
            </div>
            <div className="card-sys__item">
              <div className="title">Product Title/Name</div>
              <div className="content">
                <div className="input-container">
                  <input className="input" type="text" />
                </div>
              </div>
            </div>
            <div className="card-sys__item">
              <div className="title">Product Description</div>
              <div className="content">
                <div className="area-container">
                  <textarea className="area" name="" id=""></textarea>
                </div>
              </div>
            </div>
            <div className="card-sys__item">
              <div className="title">Category</div>
              <div className="content">
                <div className="select">
                  <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="card-sys__item">
              <div className="title">Cuisine</div>
              <div className="content">
                <div className="select">
                  <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="card-sys__item">
              <div className="title">Price</div>
              <div className="content">
                <div className="input-container">
                  <input className="input" type="text" />
                </div>
              </div>
            </div>
            <div className="card-sys__item">
              <div className="title">Discount</div>
              <div className="content">
                <div className="input-container">
                  <input className="input" type="text" />
                </div>
              </div>
            </div>
            <div className="card-sys__item">
              <div className="title">Status</div>
              <div className="content">
                <div className="select">
                  <select name="" id="">
                    <option value="">Selling</option>
                    <option value="">Sold Out</option>
                  </select>
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
          <button className="btn btn-cancel">Cancel</button>
          <button className="btn btn-update">Update Product</button>
        </div>
      </Drawer>
    </>
  );
};

export default Tag;
