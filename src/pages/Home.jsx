import React from "react";
import { Link } from "react-router-dom";

import { Items } from "../components/Api/data";
import Item from "../components/Item/Item";
import Slide from "../components/Slider/Slider";

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
        {Items.map((item) => (
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
