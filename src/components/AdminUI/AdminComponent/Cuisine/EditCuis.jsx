import React, { useEffect, useState } from "react";

import { IoMdClose } from "react-icons/io";
import PreviewImage, { handleUpload } from "../../../common/PreviewImage";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../../config/firebaseConfig";

const EditCuis = (props) => {
  const { isOpen, toggleDrawer, item } = props;

  const [image, setImage] = useState(null);
  const [cuisine, setCuisine] = useState();

  const clearInputs = () => {
    setCuisine("");
    setImage("");
  };

  useEffect(() => {
    clearInputs();
  }, [isOpen]);

  // Thêm dữ liệu vào db

  const handleCuisines = async (img) => {
    const collectionRef = collection(db, "Cuisines"); //Ghi hoặc đọc db trong collection và tạo id tự động
    const payload = {
      cuisine: cuisine,
      image: img,
      published: true,
    }; //Gán giá trị mới vào db
    await addDoc(collectionRef, payload);
    clearInputs();
  };

  // Chỉnh sửa dữ liệu

  const handleUpdate = async (img) => {
    const docRef = doc(db, "Cuisines", item.id);
    const payload = {
      cuisine: cuisine ? cuisine : item.cuisine,
      image: img ? img : item.image,
      published: item.published,
    };
    await setDoc(docRef, payload);
    clearInputs();
  };

  const handleAdd = () => {
    handleUpload({ image, Func: handleCuisines });
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
            <PreviewImage
              Image={item?.image}
              image={image}
              setImage={setImage}
            />
          </div>
          <div className="card-sys__item">
            <div className="title">Country Name</div>
            <div className="content">
              <div className="input-container">
                <input
                  className="input"
                  type="text"
                  defaultValue={item?.cuisine}
                  onChange={(e) => setCuisine(e.target.value)}
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
            }}
            className="btn btn-update"
          >
            Update Cuisine
          </button>
        ) : (
          <button
            onClick={() => {
              handleAdd();
            }}
            className="btn btn-update"
          >
            Add Cuisine
          </button>
        )}
      </div>
    </Drawer>
  );
};

export default EditCuis;
