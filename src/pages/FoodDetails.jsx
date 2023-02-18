import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";
import Slider from "react-slick";
import {
  MdLocalFireDepartment,
  MdStar,
  MdStarHalf,
  MdStarOutline,
} from "react-icons/md";
import Description from "../components/Details/Description";
import Review from "../components/Details/Review";
import Recipe from "../components/Details/Recipe";

import { BsHourglassSplit } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { Rating } from "../components/common/Rating";
import { userCurrentID } from "../components/Header/Header";

const FoodDetails = () => {
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

  const { id } = useParams();

  const [num, setNum] = useState(1);
  const [select, setSelect] = useState("Description");
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [totalRating, setTotalRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    onSnapshot(collection(db, "Products"), (snapshot) => {
      setProducts(
        snapshot.docs.filter((doc) => {
          if (doc.id === id) {
            return {
              ...doc.data(),
              id: doc.id,
            };
          }
          return false;
        })
      );
    });
  }, [id]);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "Reviews"), where("productID", "==", id)),
      (snapshot) =>
        setReviews(
          snapshot.docs.map((doc) => {
            setTotalRating((_prev) => _prev + doc.data().rate);
            setTotalReviews((_prev) => _prev + 1);
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        )
    );
  }, [id]);

  const handleAdd = async (id, choose, quantity) => {
    const collectionRef = collection(db, "Carts"); //Ghi hoặc đọc db trong collection và tạo id tự động
    const payload = {
      userID: userCurrentID,
      productID: id,
      image: choose.image,
      title: choose.title,
      price: choose.price,
      quantity: quantity,
    }; //Gán giá trị mới vào db
    await addDoc(collectionRef, payload);
  };

  const total =
    reviews.length > 0 && Number((totalRating / totalReviews).toFixed(1));

  const settings = {
    customPaging: function (i) {
      return (
        <div className="image-main">
          <img width={100} height={60} src={products[0].data().image} alt="" />
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
      {products.length > 0 && (
        <>
          <div className="detail__main">
            <div className="detail__main__image">
              <Slider {...settings}>
                <img
                  className="image"
                  width={100}
                  src={products[0].data().image}
                  alt=""
                />
                <img
                  className="image"
                  width={100}
                  src={products[0].data().image}
                  alt=""
                />
                <img
                  className="image"
                  width={100}
                  src={products[0].data().image}
                  alt=""
                />
              </Slider>
            </div>
            <div className="detail__main__info">
              <div className="detail__main__info__title">
                <span>{products[0].data().title}</span>
              </div>
              <div className="detail__main__info__user">
                {/* <div className="user">
                  <span>By </span>
                  <Link className="user__name">
                    {products[0].data().user.name}
                  </Link>
                </div> */}
                <div className="user__rating">
                  <Rating item={total} />
                  <span className="text">({totalReviews} reviews)</span>
                </div>
              </div>
              <div className="detail__main__info__price">
                <span className="price">$ {products[0].data().price}</span>
              </div>
              <div className="detail__main__info__description">
                <span>{products[0].data().description}</span>
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
                      onClick={() => {
                        setNum(num + 1);
                      }}
                      className="quantity__number__button"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleAdd(products[0].id, products[0].data(), num)
                  }
                  className="add-cart"
                >
                  <button className="add-cart__button">Add to cart</button>
                </div>
              </div>
              <div className="detail__main__info__tag">
                <div className="tags">
                  <span className="tag">Category: </span>
                  <span className="tag__value">
                    {products[0].data().category}
                  </span>
                </div>
                <div className="tags">
                  <span className="tag">Cuisine: </span>
                  <span className="tag__value">
                    {products[0].data().cuisine}
                  </span>
                </div>
              </div>
              {products[0].data().recipeStatus && (
                <div className="detail__main__info__card">
                  <div className="card">
                    <div className="icon">
                      <BsHourglassSplit />
                    </div>
                    <div className="info">
                      <div>Ingredients</div>
                      <div>{products[0].data().ingredients.length}</div>
                    </div>
                    <div className="line" />
                  </div>
                  <div className="card">
                    <div className="icon">
                      <MdLocalFireDepartment />
                    </div>
                    <div className="info">
                      <div>Cooking</div>
                      <div>{products[0].data().cookingTime} minutes</div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="icon">
                      <HiUsers />
                    </div>
                    <div className="info">
                      <div>For</div>
                      <div>{products[0].data().serving} persons</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="detail__sub">
            <div
              onClick={() => setSelect("Description")}
              className={classNames(
                "detail__sub__title",
                select === "Description" && "select"
              )}
            >
              Description
            </div>
            <div
              onClick={() => setSelect("Review")}
              className={classNames(
                "detail__sub__title",
                select === "Review" && "select"
              )}
            >
              Review
            </div>
            {products[0].data().recipeStatus === true && (
              <div
                onClick={() => setSelect("Recipe")}
                className={classNames(
                  "detail__sub__title",
                  select === "Recipe" && "select"
                )}
              >
                Recipe
              </div>
            )}
          </div>
          <div className="detail__content">
            {select === "Description" && (
              <Description description={products[0].data().description} />
            )}
            {select === "Review" && <Review productID={products[0].id} />}
            {products[0].data().recipeStatus === true &&
              select === "Recipe" && <Recipe item={products[0].data()} />}
          </div>
        </>
      )}
    </div>
  );
};

export default FoodDetails;
