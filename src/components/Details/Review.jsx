import classNames from "classnames";
import React from "react";
import { MdReply, MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";
import { AiOutlineMail, AiOutlineEdit } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { Reviews } from "../Api/data";
import { Rating } from "../common/Rating";

const Review = () => {
  const [rating, setRating] = React.useState(0);

  const Rate = () => {
    return (
      <span className="rate">
        <MdStar
          className={classNames(
            "star",
            (rating === 1 ||
              rating === 2 ||
              rating === 3 ||
              rating === 4 ||
              rating === 5) &&
              "rate-selected"
          )}
          onClick={() => setRating(1)}
        />
        <MdStar
          className={classNames(
            "star",
            (rating === 2 || rating === 3 || rating === 4 || rating === 5) &&
              "rate-selected"
          )}
          onClick={() => setRating(2)}
        />
        <MdStar
          className={classNames(
            "star",
            (rating === 3 || rating === 4 || rating === 5) && "rate-selected"
          )}
          onClick={() => setRating(3)}
        />
        <MdStar
          className={classNames(
            "star",
            (rating === 4 || rating === 5) && "rate-selected"
          )}
          onClick={() => setRating(4)}
        />
        <MdStar
          className={classNames("star", rating === 5 && "rate-selected")}
          onClick={() => setRating(5)}
        />
      </span>
    );
  };

  const Progress = () => {
    return (
      <>
        <div className="card__progress">
          <span>5 star</span>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              50%
            </div>
          </div>
        </div>
        <div className="card__progress">
          <span>4 star</span>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              25%
            </div>
          </div>
        </div>
        <div className="card__progress">
          <span>3 star</span>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "45%" }}
              aria-valuenow="45"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              45%
            </div>
          </div>
        </div>
        <div className="card__progress">
          <span>2 star</span>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "65%" }}
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              65%
            </div>
          </div>
        </div>
        <div className="card__progress">
          <span>1 star</span>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "85%" }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              85%
            </div>
          </div>
        </div>
      </>
    );
  };

  const ReviewItem = ({ reply }) => {
    return (
      <div className="review__body">
        <div className="review__body__avatar">
          <div className="review__body__avatar__image">
            <img src={reply.avatar} alt="avatar" />
          </div>
        </div>
        <div className="review__body__content">
          <span className="name">{reply.name}</span>
          <span className="stars">
            <Rating item={reply} />
          </span>
          <span className="content">{reply.content}</span>
          <div className="bottom">
            <span className="date">{reply.date}</span>
            <span className="line" />
            <span className="reply">
              <MdReply className="icon" />
              <span className="text">Reply</span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="review">
      <div className="review__header">
        <div className="review__header__user">
          <div className="review__header__user__title">
            <span className="title">Add a review</span>
            <div className="shape">
              <span className="line" />
              <div className="diamond" />
            </div>
          </div>
          <div className="review__header__user__rating">
            <span className="text">Give Star:</span>
            <Rate />
          </div>
          <div className="review__header__user__comment">
            <div className="input-card">
              <div className="input-card__name">
                <input placeholder="Enter your name" type="text" />
                <HiOutlineUser className="icon" />
              </div>
              <div className="input-card__email">
                <input placeholder="Enter your email" type="text" />
                <AiOutlineMail className="icon" />
              </div>
            </div>
            <div className="area-card">
              <textarea className="comment" placeholder="Write your review" />
              <AiOutlineEdit className="icon" />
            </div>
            <div className="submit">
              <button className="submit__button">Submit Review</button>
            </div>
          </div>
        </div>
        <div className="review__header__reviews">
          <div className="card">
            <span className="card__title">Customer review</span>
            <div className="card__rating">
              <span className="card__rating__text">3.8 out of 5:</span>
              <span className="card__rating__stars">
                <MdStar className="star" />
                <MdStar className="star" />
                <MdStar className="star" />
                <MdStarHalf className="star" />
                <MdStarOutline className="star" />
              </span>
            </div>
            <Progress />
          </div>
        </div>
      </div>
      {Reviews.map((item) => (
        <div className="review__body">
          <div className="review__body__avatar">
            <div className="review__body__avatar__image">
              <img src={item.avatar} alt="avatar" />
            </div>
          </div>
          <div className="review__body__content">
            <span className="name">{item.name}</span>
            <span className="stars">
              <Rating item={item} />
            </span>
            <span className="content">{item.content}</span>
            <div className="bottom">
              <span className="date">{item.date}</span>
              <span className="line" />
              <span className="reply">
                <MdReply className="icon" />
                <span className="text">Reply</span>
              </span>
            </div>
            {item.replies.map((reply) => (
              <ReviewItem reply={reply} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
