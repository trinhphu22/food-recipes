import React from "react";
import { HiOutlineMinusSm } from "react-icons/hi";
import { Recipes } from "../../../Api/data";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { IoMdClose } from "react-icons/io";

const RecipeProd = ({ isOpen, toggleDrawer, item }) => {
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
          <div className="drawer__header__title">Update Product Recipe</div>
          <div className="drawer__header__subtitle">
            Updated your product recipe and necessary information from here
          </div>
        </div>
        <div className="drawer__header__close" onClick={toggleDrawer}>
          <IoMdClose className="icon" />
        </div>
      </div>
      <div className="drawer__body">
        <div className="card-sys">
          <div className="card-sys__item">
            <div className="title">Ingredients</div>
            <div className="content">
              <div className="input-container">
                <input
                  className="input"
                  type="number"
                  defaultValue={Recipes?.ingredients?.length}
                  // value={sum}
                  min={1}
                  // onChange={(e) => setSum(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="card-sys__item">
            <div className="title">Ingredient</div>
            <div className="content">
              {Recipes.ingredients.map((item, index) => (
                <div className="input-container">
                  <input
                    className="input"
                    type="text"
                    defaultValue={item.name ? item.name : ""}
                  />
                  <div className="minus">
                    <HiOutlineMinusSm className="icon" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card-sys__item">
            <div className="title">Nutritional Ingredients</div>
            <div className="content">
              <div className="input-container">
                <input
                  className="input"
                  type="number"
                  defaultValue={Recipes?.nutrients?.length}
                  min={1}
                />
              </div>
            </div>
          </div>
          <div className="card-sys__item">
            <div className="title">Nutrition</div>
            <div className="content">
              {Recipes.nutrients.map((item, index) => (
                <div className="input-container">
                  <input
                    className="input"
                    type="text"
                    defaultValue={item.nutrition ? item.nutrition : ""}
                  />
                  <input
                    className="input"
                    type="text"
                    defaultValue={item.value ? item.value : ""}
                  />
                  <div className="minus">
                    <HiOutlineMinusSm className="icon" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card-sys__item">
            <div className="title">Steps</div>
            <div className="content">
              <div className="input-container">
                <input
                  className="input"
                  type="number"
                  defaultValue={Recipes?.steps?.length}
                  // value={sum}
                  min={1}
                  // onChange={(e) => setSum(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="card-sys__item">
            <div className="title">Instruction</div>
            <div className="content">
              {Recipes.steps.map((item, index) => (
                <div className="area-container">
                  <div className="step">{item.step}</div>
                  <textarea
                    className="area"
                    name=""
                    id=""
                    defaultValue={item.content}
                  />
                  <div className="minus">
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
        <button className="btn btn-update">
          {item ? "Update Recipe" : "Add Recipe"}
        </button>
      </div>
    </Drawer>
  );
};

export default RecipeProd;
