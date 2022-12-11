import React, { useEffect, useState } from "react";

import { IoMdClose } from "react-icons/io";
import PreviewImage, { handleUpload } from "../../../common/PreviewImage";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../../config/firebaseConfig";
import { userCurrent } from "../../../Header/Header";

const EditBlog = (props) => {
  const { isOpen, toggleDrawer, item } = props;

  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState();

  const [nutrients, setNutrients] = useState([]);
  const [nutrient, setNutrient] = useState();
  const [value, setValue] = useState();

  const [steps, setSteps] = useState(item ? item?.steps : []);
  const [step, setStep] = useState();

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [link, setLink] = useState();
  const [cookingTime, setCookingTime] = useState();
  const [serving, setServing] = useState();
  const createDate = new Date().toLocaleDateString();

  useEffect(() => {
    if (item) {
      setIngredients(item.ingredients);
      setNutrients(item.nutrients);
      setSteps(item.steps);
    }
  }, [item]);

  const clearInputs = () => {
    setIngredient("");
    setNutrient("");
    setValue("");
    setStep("");
    setImage("");
    setTitle("");
    setDescription("");
    setLink("");
    setCookingTime("");
    setServing("");
  };

  useEffect(() => {
    clearInputs();
  }, [isOpen]);

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

  // Thêm dữ liệu vào db

  const handleRecipes = async (img) => {
    const collectionRef = collection(db, "Recipes"); //Ghi hoặc đọc db trong collection và tạo id tự động
    const payload = {
      image: img,
      title,
      description,
      link,
      cookingTime,
      serving,
      ingredients,
      nutrients,
      steps,
      user: {
        name: userCurrent.name,
        avatar: userCurrent.avatar,
      },
      createDate,
      approved: true,
    }; //Gán giá trị mới vào db
    await addDoc(collectionRef, payload);
    toggleDrawer();
  };

  const handleUpdate = async (img) => {
    const docRef = doc(db, "Recipes", item.id);
    const payload = {
      image: img ? img : item.image,
      title: title ? title : item.title,
      description: description ? description : item.description,
      link: link ? link : item.link,
      cookingTime: cookingTime ? cookingTime : item.cookingTime,
      serving: serving ? serving : item.serving,
      ingredients: ingredients ? ingredients : item.ingredients,
      nutrients: nutrients ? nutrients : item.nutrients,
      steps: steps ? steps : item.steps,
      user: {
        name: userCurrent.name,
        avatar: userCurrent.avatar,
      },
      createDate,
      approved: true,
    };
    await setDoc(docRef, payload);
    toggleDrawer();
  };

  const handleAdd = () => {
    handleUpload({ image, Func: handleRecipes });
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
          <div className="drawer__header__title">Update Recipes</div>
          <div className="drawer__header__subtitle">
            Updated your Recipe and necessary information from here
          </div>
        </div>
        <div className="drawer__header__close" onClick={toggleDrawer}>
          <IoMdClose className="icon" />
        </div>
      </div>
      <div className="drawer__body">
        <div className="card-sys">
          <div className="card-sys__item">
            <div className="title">Image</div>
            <PreviewImage
              Image={item?.image}
              image={image}
              setImage={setImage}
            />
          </div>
          <div className="card-sys__item">
            <div className="title">Recipe Title</div>
            <div className="content">
              <div className="input-container">
                <input
                  className="input"
                  type="text"
                  defaultValue={item?.title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="card-sys__item">
            <div className="title">Recipe Description</div>
            <div className="content">
              <div className="area-container">
                <textarea
                  className="area"
                  defaultValue={item?.description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="card-sys__item">
            <div className="title">Link</div>
            <div className="content">
              <div className="input-container">
                <input
                  className="input"
                  type="text"
                  defaultValue={item?.link}
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
                  defaultValue={item?.cookingTime}
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
                  defaultValue={item?.serving}
                  min={1}
                  onChange={(e) => setServing(e.target.value)}
                />
              </div>
            </div>
          </div>
          {/* <div className="card-sys__item">
            <div className="title">Ingredients</div>
            <div className="content">
              <div className="input-container">
                <input
                  className="input"
                  type="number"
                  defaultValue={1}
                  min={1}
                  onChange={(e) => {
                    setIngredientsNumber(e.target.value);
                  }}
                />
              </div>
            </div>
          </div> */}
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
            Update Recipe
          </button>
        ) : (
          <button
            onClick={() => {
              handleAdd();
            }}
            className="btn btn-update"
          >
            Add Recipe
          </button>
        )}
      </div>
    </Drawer>
  );
};

export default EditBlog;
