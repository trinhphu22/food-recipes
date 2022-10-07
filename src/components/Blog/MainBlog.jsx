import React from "react";
import { MdLocalFireDepartment } from "react-icons/md";
import { Rating } from "../common/Rating";

const MainBlog = ({ item, index }) => {
  return (
    <div className="blog__main__card">
      {index % 2 === 0 ? (
        <div className="left">
          <div className="blog__main__card__image">
            <img src={item.image} alt="" />
          </div>
          <div className="blog__main__card__info">
            <div className="title">
              <span>{item.title}</span>
            </div>
            <div className="timeless-rate">
              <div className="timeless">
                <MdLocalFireDepartment className="timeless__icon" />
                <span className="timeless__time">{item.timeless}</span>
              </div>
              <div className="rating">
                <Rating item={item} />
                <span className="text">({item.review} reviews )</span>
              </div>
            </div>
            <div className="description">
              <span>{item.description}</span>
            </div>
            <div className="user">
              <div className="user__image">
                <img src={item.user.avatar} alt="" />
              </div>
              <div className="user__info">
                <span className="text">Recipe by </span>
                <span className="name">{item.user.name}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="right">
          <div className="blog__main__card__image">
            <img src={item.image} alt="" />
          </div>
          <div className="blog__main__card__info">
            <div className="title">
              <span>{item.title}</span>
            </div>
            <div className="timeless-rate">
              <div className="timeless">
                <MdLocalFireDepartment className="timeless__icon" />
                <span className="timeless__time">{item.timeless}</span>
              </div>
              <div className="rating">
                <Rating item={item} />
                <span className="text">({item.review} reviews )</span>
              </div>
            </div>
            <div className="description">
              <span>{item.description}</span>
            </div>
            <div className="user">
              <div className="user__image">
                <img src={item.user.avatar} alt="" />
              </div>
              <div className="user__info">
                <span className="text">Recipe by </span>
                <span className="name">{item.user.name}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainBlog;
