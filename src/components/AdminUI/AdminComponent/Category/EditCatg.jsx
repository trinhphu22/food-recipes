import React, { useEffect, useState } from "react";

import { collection, addDoc, doc, setDoc } from "@firebase/firestore";

import { db } from "../../../../config/firebaseConfig";
// import { storage } from "../config/firebase-config";

import { IoMdClose } from "react-icons/io";
import PreviewImage, { handleUpload } from "../../../common/PreviewImage";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const EditCatg = (props) => {
  const { isOpen, toggleDrawer, item } = props;

  const [image, setImage] = useState(null);
  const [category, setCategory] = useState();

  const clearInputs = () => {
    setCategory("");
    setImage("");
  };

  useEffect(() => {
    clearInputs();
  }, [isOpen]);

  // Thêm dữ liệu vào db

  const handleCategory = async (img) => {
    const collectionRef = collection(db, "Category"); //Ghi hoặc đọc db trong collection và tạo id tự động
    const payload = {
      category: category,
      image: img,
      published: true,
    }; //Gán giá trị mới vào db
    await addDoc(collectionRef, payload);
    clearInputs();
  };

  // Chỉnh sửa dữ liệu

  const handleUpdate = async (img) => {
    const docRef = doc(db, "Category", item.id);
    const payload = {
      category: category ? category : item.category,
      image: img ? img : item.image,
      published: item.published,
    };
    await setDoc(docRef, payload);
    clearInputs();
  };

  const handleAdd = () => {
    handleUpload({ image, Func: handleCategory });
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
          <div className="drawer__header__title">Update Category</div>
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
            <div className="title">Category Image</div>
            <PreviewImage
              Image={item?.image}
              image={image}
              setImage={setImage}
            />
          </div>
          <div className="card-sys__item">
            <div className="title">Category</div>
            <div className="content">
              <div className="input-container">
                <input
                  className="input"
                  type="text"
                  defaultValue={item?.category}
                  onChange={(e) => setCategory(e.target.value)}
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
        {item ? (
          <button
            onClick={() => {
              handleEdit();
              toggleDrawer();
            }}
            className="btn btn-update"
          >
            Update Product
          </button>
        ) : (
          <button
            onClick={() => {
              handleAdd();
              toggleDrawer();
            }}
            className="btn btn-update"
          >
            Add Product
          </button>
        )}
      </div>
    </Drawer>
  );
};

export default EditCatg;
