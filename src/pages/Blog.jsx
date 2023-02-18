import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Blogs } from "../components/Api/data";
import MainBlog from "../components/Blog/MainBlog";
import SliderBlog from "../components/Blog/SliderBlog";
import SubItem from "../components/Blog/SubItem";
import { db } from "../config/firebaseConfig";

const Blog = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipesProduct, setRecipesProduct] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "Recipes"), (snapshot) => {
        setRecipes(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      }),
    []
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    onSnapshot(
      query(collection(db, "Products"), where("recipeStatus", "==", true)),
      (snapshot) => {
        setRecipesProduct(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      }
    );
  }, []);

  return (
    <>
      {recipes.length > 0 && (
        <div className="blog">
          <SliderBlog item={recipes} />
          <div className="blog__sub">
            <SubItem />
            <SubItem />
            <SubItem />
          </div>
          <div className="blog__main">
            {recipes.map((item, index) => (
              <MainBlog item={item} index={index} />
            ))}
            {recipesProduct.map((item, index) => (
              <MainBlog item={item} index={index + recipes.length} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
