import React from "react";
import { Link } from "react-router-dom";
import Item from "../components/Item/Item";
import Slide from "../components/Slider/Slider";
import Image from "../assets/images/item.jpg";

const items = [
  {
    id: 1,
    collection: "italy",
    ingredient: 10,
    timeCook: 60,
    productName: "Seared Scallops with Butter",
    price: 15.99,
    rate: 3.5,
    image: Image,
  },
  {
    id: 2,
    collection: "italy",
    ingredient: 10,
    timeCook: 60,
    productName: "Seared Scallops with Butter",
    price: 15.99,
    rate: 3,
    image: Image,
  },
  {
    id: 3,
    collection: "italy",
    ingredient: 10,
    timeCook: 60,
    productName: "Seared Scallops with Butter",
    price: 15.99,
    rate: 1,
    image: Image,
  },
  {
    id: 4,
    collection: "italy",
    ingredient: 10,
    timeCook: 60,
    productName: "Seared Scallops with Butter",
    price: 15.99,
    rate: 0,
    image: Image,
  },
  {
    id: 5,
    collection: "china",
    ingredient: 10,
    timeCook: 60,
    productName: "Seared Scallops with Butter",
    price: 15.99,
    rate: 5,
    image: Image,
  },
  {
    id: 6,
    collection: "italy",
    ingredient: 10,
    timeCook: 60,
    productName: "Seared Scallops with Butter",
    price: 15.99,
    rate: 4.5,
    image: Image,
  },
  {
    id: 7,
    collection: "america",
    ingredient: 10,
    timeCook: 60,
    productName: "Seared Scallops with Butter",
    price: 15.99,
    rate: 2.5,
    image: Image,
  },
  {
    id: 8,
    collection: "italy",
    ingredient: 10,
    timeCook: 60,
    productName: "Seared Scallops with Butter",
    price: 15.99,
    rate: 1.5,
    image: Image,
  },
];

const Home = () => {
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
        {items.map((item) => (
          <Item item={item} />
        ))}
      </div>
      <Link to="/" className="home__load-more">
        <span className="btn__load-more">Load more</span>
      </Link>
    </div>
  );
};

export default Home;
