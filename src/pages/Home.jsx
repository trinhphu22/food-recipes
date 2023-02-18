import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Items } from "../components/Api/data";
import Item from "../components/Item/Item";
import Slide from "../components/Slider/Slider";
import { db } from "../config/firebaseConfig";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "Products"), (snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
            ingredientsTotal: doc.data().ingredients
              ? doc.data().ingredients.length
              : null,
          }))
        );
      }),
    []
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    onSnapshot(
      query(collection(db, "Products"), where("status", "==", "Selling")),
      (snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
            ingredientsTotal: doc.data().ingredients
              ? doc.data().ingredients.length
              : null,
          }))
        );
      }
    );
  }, []);

  return (
    <div className="home">
      <Slide />
      <div className="home__title">Curated recipes for you</div>
      <div className="home__subtitle">
        <p>
          Why not try one of these brand-new recipes, freshly made by Home Good
          Food Middle East.
        </p>
      </div>
      <div className="home__container">
        {products.map((item) => (
          <Item item={item} />
        ))}
      </div>
      <Link to="/categories/1" className="home__load-more">
        <span className="btn__load-more">Load more</span>
      </Link>
    </div>
  );
};

export default Home;
