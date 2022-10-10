import React from "react";
import ReactPlayer from "react-player";
import { BsCalendar, BsChatLeft, BsHourglassSplit } from "react-icons/bs";
import { MdLocalFireDepartment, MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";

import Avatar from "../assets/images/avt1.jpeg";
import Recipe from "../components/Details/Recipe";
import Review from "../components/Details/Review";
import { HiUsers } from "react-icons/hi";

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
  return (
    <div className="blog-detail">
      <div className="blog-detail__title">
        <span>Strawberry Cream Cheesecake</span>
      </div>
      <div className="blog-detail__user">
        <div className="user">
          <div className="user__image">
            <img src={Avatar} alt="" />
          </div>
          <div className="user__info">
            <span className="text">Recipe by </span>
            <span className="name">Kelvin Tang</span>
          </div>
        </div>
        <div className="date">
          <BsCalendar className="icon" />
          <span className="text">May 20, 2020</span>
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          exercitationem voluptatum quos quas quidem. Quisquam, quae. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          exercitationem voluptatum quos quas quidem. Quisquam, quae.
        </p>
      </div>
      <div className="blog-detail__video">
        <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      </div>
      <div className="blog-detail__card">
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
      <Recipe />
      <div className="space" />
      <Review />
    </div>
  );
};

export default BlogDetails;
