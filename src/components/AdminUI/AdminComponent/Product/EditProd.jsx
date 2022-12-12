import React, { useEffect, useState } from "react";

import { IoMdClose } from "react-icons/io";
import PreviewImage, { handleUpload } from "../../../common/PreviewImage";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
// import MultiSelect from "../../../common/MultSelect";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../../config/firebaseConfig";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { userCurrent } from "../../../Header/Header";

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

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
  const createDate = new Date().toLocaleDateString();
  const [recipeStatus, setRecipeStatus] = useState("false");

  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState();

  const [nutrients, setNutrients] = useState([]);
  const [nutrient, setNutrient] = useState();
  const [value, setValue] = useState();

  const [steps, setSteps] = useState([]);
  const [step, setStep] = useState();

  const [link, setLink] = useState();
  const [cookingTime, setCookingTime] = useState();
  const [serving, setServing] = useState();

  const clearInputs = () => {
    setProductTitle("");
    setProductPrice("");
    setProductDescription("");
    setProductDiscount("");
    setProductStatus("");
    setImage("");
    setIngredient("");
    setNutrient("");
    setValue("");
    setStep("");
    setLink("");
    setCookingTime("");
    setServing("");
  };

  useEffect(() => {
    if (product?.recipeStatus === true) {
      setIngredients(product?.ingredients);
      setNutrients(product?.nutrients);
      setSteps(product?.steps);
    }
  }, [product]);

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
      createDate,
      recipeStatus: false,
    }; //Gán giá trị mới vào db
    await addDoc(collectionRef, payload);
    clearInputs();
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
      createDate,
      recipeStatus: false,
    };
    const payloadRecipe = {
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
      createDate,
      recipeStatus: true,
      link,
      cookingTime,
      serving,
      ingredients,
      nutrients,
      steps,
      user: {
        name: userCurrent?.name,
        avatar: userCurrent?.avatar,
      },
      approved: true,
    };
    await setDoc(docRef, recipeStatus === "false" ? payload : payloadRecipe);
    clearInputs();
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

  const handleAddIngredient = () => {
    setIngredients([
      ...ingredients,
      { id: ingredients.length + 1, ingredient },
    ]);
    setIngredient("");
  };

  const handleAddNutrient = () => {
    setNutrients([...nutrients, { id: nutrients.length + 1, nutrient, value }]);
    setNutrient("");
    setValue("");
  };

  const handleAddStep = () => {
    setSteps([
      ...steps,
      {
        id: ingredients.length + 1,
        content: step,
      },
    ]);
    setStep("");
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleRemoveNutrient = (index) => {
    const newNutrients = [...nutrients];
    newNutrients.splice(index, 1);
    setNutrients(newNutrients);
  };

  const handleRemoveStep = (index) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
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
          {product && (
            <div className="card-sys__item">
              <div className="title">Recipe</div>
              <div className="content">
                <div className="select">
                  <select
                    onChange={(e) => {
                      setRecipeStatus(e.target.value);
                    }}
                  >
                    <option value="" selected disabled hidden>
                      Recipe Status
                    </option>
                    <option value={false}>False</option>
                    <option value={true}>True</option>
                  </select>
                </div>
              </div>
            </div>
          )}
          {recipeStatus === "true" && (
            <>
              <div className="card-sys__item">
                <div className="title">Link</div>
                <div className="content">
                  <div className="input-container">
                    <input
                      className="input"
                      type="text"
                      defaultValue={product?.link}
                      onChange={(e) => setLink(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="card-sys__item">
                <div className="title">Cooking time</div>
                <div className="content">
                  <div className="input-container">
                    <input
                      className="input"
                      type="text"
                      defaultValue={product?.cookingTime}
                      onChange={(e) => setCookingTime(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="card-sys__item">
                <div className="title">Servings</div>
                <div className="content">
                  <div className="input-container">
                    <input
                      className="input"
                      type="number"
                      defaultValue={product?.serving}
                      min={1}
                      onChange={(e) => setServing(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {/* Ingredient */}
              <div className="card-sys__item">
                <div className="title">Ingredient</div>
                <div className="content">
                  <div className="input-container">
                    <input
                      className="input"
                      type="text"
                      value={ingredient}
                      onChange={(e) => setIngredient(e.target.value)}
                    />
                    <div onClick={handleAddIngredient} className="minus">
                      <HiOutlinePlusSm className="icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-sys__item">
                <div className="title"></div>
                <div className="content">
                  {ingredients.map((item, index) => (
                    <div className="input-container">
                      <span className="list">{item.ingredient}</span>
                      <div
                        onClick={() => handleRemoveIngredient(index)}
                        className="minus"
                      >
                        <HiOutlineMinusSm className="icon" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Nutrient */}
              <div className="card-sys__item">
                <div className="title">Nutrient</div>
                <div className="content">
                  <div className="input-container">
                    <input
                      className="input"
                      type="text"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <input
                      className="input"
                      type="text"
                      value={nutrient}
                      onChange={(e) => setNutrient(e.target.value)}
                    />
                    <div onClick={handleAddNutrient} className="minus">
                      <HiOutlinePlusSm className="icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-sys__item">
                <div className="title"></div>
                <div className="content">
                  {nutrients.map((item, index) => (
                    <div className="input-container">
                      <span className="list">
                        {item.value} {item.nutrient}
                      </span>
                      <div
                        onClick={() => handleRemoveNutrient(index)}
                        className="minus"
                      >
                        <HiOutlineMinusSm className="icon" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Step */}
              <div className="card-sys__item">
                <div className="title">Step</div>
                <div className="content">
                  <div className="area-container">
                    <textarea
                      className="area"
                      value={step}
                      onChange={(e) => setStep(e.target.value)}
                    />
                    <div onClick={handleAddStep} className="minus">
                      <HiOutlinePlusSm className="icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-sys__item">
                <div className="title"></div>
                <div className="content">
                  {steps.map((item, index) => (
                    <div className="area-container">
                      <span className="list">{item.content}</span>
                      <div
                        onClick={() => handleRemoveStep(index)}
                        className="minus"
                      >
                        <HiOutlineMinusSm className="icon" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
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

export default EditProd;
