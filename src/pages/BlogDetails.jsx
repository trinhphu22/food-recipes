import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { BsCalendar, BsChatLeft, BsHourglassSplit } from "react-icons/bs";
import {
  MdLocalFireDepartment,
  MdStar,
  MdStarHalf,
  MdStarOutline,
} from "react-icons/md";

import Avatar from "../assets/images/avt1.jpeg";
import Recipe from "../components/Details/Recipe";
import Review from "../components/Details/Review";
import { HiUsers } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import moment from "moment";

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

const BlogDetails = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState([]);
  const [productRecipe, setProductRecipe] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    onSnapshot(collection(db, "Recipes"), (snapshot) => {
      setRecipe(
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

  return (
    <>
      {recipe.length > 0 && (
        <div className="blog-detail">
          <div className="blog-detail__title">
            <span>{recipe[0].data().title}</span>
          </div>
          <div className="blog-detail__user">
            <div className="user">
              <div className="user__image">
                <img src={recipe[0].data().user.avatar} alt="" />
              </div>
              <div className="user__info">
                <span className="text">Recipe by </span>
                <span className="name">{recipe[0].data().user.name}</span>
              </div>
            </div>
            <div className="date">
              <BsCalendar className="icon" />
              <span className="text">
                {moment(recipe[0].data().createDate, "DD/MM/YYYY").format("ll")}
              </span>
            </div>
            <div className="chat">
              <BsChatLeft className="icon" />
              <span className="text">25</span>
            </div>
            <div className="rate">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStarHalf />
              <MdStarOutline />
            </div>
          </div>
          <div className="blog-detail__description">
            <p>{recipe[0].data().description}</p>
          </div>
          <div className="blog-detail__video">
            <ReactPlayer url={recipe[0].data().link} />
          </div>
          <div className="blog-detail__card">
            <div className="card">
              <div className="icon">
                <BsHourglassSplit />
              </div>
              <div className="info">
                <div>Ingredients</div>
                <div>{recipe[0].data().ingredients.length}</div>
              </div>
              <div className="line" />
            </div>
            <div className="card">
              <div className="icon">
                <MdLocalFireDepartment />
              </div>
              <div className="info">
                <div>Cooking</div>
                <div>{recipe[0].data().cookingTime} minutes</div>
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <HiUsers />
              </div>
              <div className="info">
                <div>For</div>
                <div>{recipe[0].data().serving} persons</div>
              </div>
            </div>
          </div>
          <Recipe item={recipe[0].data()} />
          <div className="space" />
          <Review productID={recipe[0].id} />
        </div>
      )}
    </>
  );
};

export default BlogDetails;
