import React, { useEffect, useState } from "react";

import { IoMdClose } from "react-icons/io";
import PreviewImage, { handleUpload } from "../../../common/PreviewImage";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import MultiSelect from "../../../common/MultSelect";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../../config/firebaseConfig";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const EditProd = (props) => {
  const { isOpen, toggleDrawer, product, categories, cuisines } = props;

  const [selectCategory, setSelectCategory] = useState();
  const [selectCuisine, setSelectCuisine] = useState();
  const [productTitle, setProductTitle] = useState();
  const [productPrice, setProductPrice] = useState();
  const [productDescription, setProductDescription] = useState();
  const [productDiscount, setProductDiscount] = useState();
  const [image, setImage] = useState(null);
  const [productStatus, setProductStatus] = useState();
  // const [image, setImage] = useState(null);

  const clearInputs = () => {
    setProductTitle("");
    setProductPrice("");
    setProductDescription("");
    setProductDiscount("");
    setProductStatus("");
    setImage("");
  };

  useEffect(() => {
    clearInputs();
  }, [isOpen]);

  // Thêm dữ liệu vào db

  const handleProduct = async (img) => {
    const collectionRef = collection(db, "Products"); //Ghi hoặc đọc db trong collection và tạo id tự động
    const payload = {
      image: img,
      title: productTitle,
      cuisine: selectCuisine,
      category: selectCategory,
      price: productPrice,
      description: productDescription,
      discount: productDiscount,
      status: productStatus,
      published: true,
    }; //Gán giá trị mới vào db
    await addDoc(collectionRef, payload);
    // clearInputs();
    toggleDrawer();
  };

  const handleUpdate = async (img) => {
    const docRef = doc(db, "Products", product.id);
    const payload = {
      image: img ? img : product.image,
      title: productTitle ? productTitle : product.title,
      cuisine: selectCuisine ? selectCuisine : product.cuisine,
      category: selectCategory ? selectCategory : product.category,
      price: productPrice ? productPrice : product.price,
      description: productDescription
        ? productDescription
        : product.description,
      discount: productDiscount ? productDiscount : product.discount,
      status: productStatus ? productStatus : product.status,
      published: true,
    };
    await setDoc(docRef, payload);
    // clearInputs();
    toggleDrawer();
  };

  const handleAdd = () => {
    handleUpload({ image, Func: handleProduct });
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
            <PreviewImage
              Image={product?.image}
              image={image}
              setImage={setImage}
            />
          </div>
          <div className="card-sys__item">
            <div className="title">Product Title/Name</div>
            <div className="content">
              <div className="input-container">
                <input
                  className="input"
                  type="text"
                  defaultValue={product?.title}
                  onChange={(e) => {
                    setProductTitle(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="card-sys__item">
            <div className="title">Product Description</div>
            <div className="content">
              <div className="area-container">
                <textarea
                  className="area"
                  defaultValue={product?.description}
                  onChange={(e) => {
                    setProductDescription(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="card-sys__item">
            <div className="title">Category</div>
            <div className="content">
              <div className="select">
                {/* <MultiSelect
                  options={categories.length > 0 ? categories : []}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                /> */}
                <select
                  onChange={(e) => {
                    setSelectCategory(e.target.value);
                  }}
                >
                  <option value="" selected disabled hidden>
                    Category
                  </option>
                  {categories.map((item) => (
                    <option selected={product?.category} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="card-sys__item">
            <div className="title">Cuisine</div>
            <div className="content">
              <div className="select">
                <select
                  onChange={(e) => {
                    setSelectCuisine(e.target.value);
                  }}
                >
                  <option value="" selected disabled hidden>
                    Cuisine
                  </option>
                  {cuisines.map((item) => (
                    <option selected={product?.cuisine} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="card-sys__item">
            <div className="title">Price</div>
            <div className="content">
              <div className="input-container">
                <input
                  className="input"
                  type="text"
                  defaultValue={product?.price}
                  onChange={(e) => {
                    setProductPrice(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="card-sys__item">
            <div className="title">Discount</div>
            <div className="content">
              <div className="input-container">
                <input
                  className="input"
                  type="text"
                  defaultValue={product?.discount}
                  onChange={(e) => {
                    setProductDiscount(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="card-sys__item">
            <div className="title">Status</div>
            <div className="content">
              <div className="select">
                <select
                  onChange={(e) => {
                    setProductStatus(e.target.value);
                  }}
                >
                  <option value="" selected disabled hidden>
                    Status
                  </option>
                  <option value="Selling">Selling</option>
                  <option value="Sold Out">Sold Out</option>
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
        {product ? (
          <button
            onClick={() => {
              handleEdit();
            }}
            className="btn btn-update"
          >
            Update Product
          </button>
        ) : (
          <button
            onClick={() => {
              handleAdd();
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

export default EditProd;
