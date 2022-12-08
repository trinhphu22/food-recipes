import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Slider from "react-slick";
import {
  MdLocalFireDepartment,
  MdStar,
  MdStarHalf,
  MdStarOutline,
} from "react-icons/md";
import Description from "../../../components/Details/Description";
import Review from "../../../components/Details/Review";
import Recipe from "../../../components/Details/Recipe";

import image3 from "../../../assets/images/image3.jpeg";
import image4 from "../../../assets/images/image4.jpeg";
import image5 from "../../../assets/images/image5.jpeg";
import { BsHourglassSplit } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";

const IMAGES = [
  // {
  //   image: image1,
  // },
  // {
  //   image: image2,
  // },
  {
    image: image3,
  },
  {
    image: image4,
  },
  {
    image: image5,
  },
];

const SUBPAGES = [
  {
    name: "Description",
    component: <Description />,
  },
  {
    name: "Review",
    component: <Review />,
  },
  {
    name: "Recipe",
    component: <Recipe />,
  },
];

const Cards = [
  {
    icon: <BsHourglassSplit />,
    title: "Ingredients",
    info: "10",
  },
  {
    icon: <MdLocalFireDepartment />,
    title: "Cooking",
    info: "60 minutes",
  },
  {
    icon: <HiUsers />,
    title: "For",
    info: "4 persons",
  },
];

const Tag = () => {
  const [num, setNum] = useState(1);
  const [select, setSelect] = useState("Description");

  const settings = {
    customPaging: function (i) {
      return (
        <div className="image-main">
          <img width={100} height={60} src={IMAGES[i].image} />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    adaptiveHeight: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="detail">
      <div className="detail__main">
        <div className="detail__main__image">
          <Slider {...settings}>
            {IMAGES.map((item, index) => (
              // <div key={index} className="image-card">
              <img className="image" width={100} src={item.image} alt="img" />
              // </div>
            ))}
          </Slider>
        </div>
        <div className="detail__main__info">
          <div className="detail__main__info__title">
            <span>Seared Scallops with Butter</span>
          </div>
          <div className="detail__main__info__user">
            <div className="user">
              <span>By </span>
              <Link className="user__name">John Doe</Link>
            </div>
            <div className="user__rating">
              <span className="rate">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStarHalf />
                <MdStarOutline />
              </span>
              <span className="text">(3 reviews)</span>
            </div>
          </div>
          <div className="detail__main__info__price">
            <span className="price">$ 20.00</span>
          </div>
          <div className="detail__main__info__description">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fermentum, nisl eget aliquam tincidunt, nunc elit aliquam massa,
              ut aliquam nunc nisl eget nunc. Sed fermentum, nisl eget aliquam
              tincidunt, nunc elit aliquam massa, ut aliquam nunc nisl eget
              nunc. Sed fermentum, nisl eget aliquam tincidunt, nunc elit
              aliquam massa, ut aliquam nunc nisl eget nunc.
            </span>
          </div>
          <div className="detail__main__info__quantity">
            <div className="quantity">
              <span className="quantity__title">Quantity: </span>
              <div className="quantity__number">
                <button
                  onClick={() => num > 1 && setNum(num - 1)}
                  className="quantity__number__button"
                >
                  -
                </button>
                <span className="quantity__number__value">{num}</span>
                <button
                  onClick={() => setNum(num + 1)}
                  className="quantity__number__button"
                >
                  +
                </button>
              </div>
            </div>
            <div className="add-cart">
              <button className="add-cart__button">Add to cart</button>
            </div>
          </div>
          <div className="detail__main__info__tag">
            <div className="tags">
              <span className="tag">Categories: </span>
              <span className="tag__value">Pizza, Seafood</span>
            </div>
            <div className="tags">
              <span className="tag">Tag: </span>
              <span className="tag__value">Food, Spicy</span>
            </div>
          </div>
          <div className="detail__main__info__card">
            {Cards.map((item, index) => (
              <div key={index} className="card">
                <div className="icon">{item.icon}</div>
                <div className="info">
                  <div>{item.title}</div>
                  <div>{item.info}</div>
                </div>
                <div className="line" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="detail__sub">
        {SUBPAGES.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelect(item.name)}
            className={classNames(
              "detail__sub__title",
              select === item.name && "select"
            )}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="detail__content">
        {SUBPAGES.map((item) => select === item.name && item.component)}
      </div>
    </div>
  );
};

export default Tag;
