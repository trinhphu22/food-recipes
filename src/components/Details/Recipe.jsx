import classNames from "classnames";
import React from "react";
import { useState } from "react";
import { BsCheck2Circle, BsCircle } from "react-icons/bs";
import { Recipes } from "../Api/data";

const Recipe = ({ item }) => {
  // const [data, setData] = useState(Recipes);

  // console.log("first", data);

  // const onClick = (parentID, id) => {
  //   console.log("first ===", parentID, "----", id);
  // };

  return (
    <div className="recipe">
      {/* <div className="recipe__title">Recipe</div> */}

      <div className="recipe__body">
        <div className="recipe__body__left">
          <div className="recipe__body__left__ingredient">
            <div className="recipe__body__title">Ingredients</div>
            <div className="recipe__body__left__ingredient__list">
              {item.ingredients.map((item, index) => (
                <div key={index} className="list">
                  <BsCircle className="icon" />
                  <div
                    className={classNames(
                      "text"
                      // click && "text-click"
                    )}
                  >
                    {item.ingredient}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="recipe__body__left__nutrient">
            <div className="recipe__body__title">Nutrition</div>
            {item.nutrients.map((item, index) => (
              <div key={index} className="recipe__body__left__nutrient__list">
                <div className="title">{item.nutrient}</div>
                <div className="value">{item.value}</div>
              </div>
            ))}
          </div>  
        </div>
        <div className="recipe__body__right">
          <div className="recipe__body__title">Instruction</div>
          {item.steps.map((item, index) => (
            <div key={index} className="recipe__body__right__list">
              <div className="step">{index + 1}</div>
              <div className="list">{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
