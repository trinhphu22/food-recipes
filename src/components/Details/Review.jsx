import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { MdReply, MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";
import { AiOutlineMail, AiOutlineEdit } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { Reviews } from "../Api/data";
import { Rating } from "../common/Rating";
import { userObject, userCurrent, userCurrentID } from "../Header/Header";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../config/firebaseConfig";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

const Review = ({ productID }) => {
  const [rating, setRating] = useState(0);
  const [user, setUser] = useState("");
  const [content, setContent] = useState("");
  const createDate = new Date().toLocaleDateString(); //Lấy ngày hiện tại
  const [reviews, setReviews] = useState([]);

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser("");
    }
  });

  useEffect(() => {
    onSnapshot(
      query(collection(db, "Reviews"), where("productID", "==", productID)),
      (snapshot) =>
        setReviews(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        )
    );
  }, [productID]);

  const clearInputs = () => {
    setContent("");
  };

  const handleReview = async () => {
    const collectionRef = collection(db, "Reviews"); //Ghi hoặc đọc db trong collection và tạo id tự động
    const payload = {
      productID,
      content,
      rate: rating,
      user: {
        id: userCurrentID,
        name: userCurrent.name,
        avatar: userCurrent.avatar,
      },
      createDate,
    }; //Gán giá trị mới vào db
    await addDoc(collectionRef, payload);
    clearInputs();
  };

  // console.log("object", user.uid);

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
        {user ? (
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
                  <input
                    placeholder="Enter your name"
                    type="text"
                    disabled
                    value={userCurrent.name}
                  />
                  <HiOutlineUser className="icon" />
                </div>
                <div className="input-card__email">
                  <input
                    placeholder="Enter your email"
                    type="text"
                    disabled
                    value={userCurrent.email}
                  />
                  <AiOutlineMail className="icon" />
                </div>
              </div>
              <div className="area-card">
                <textarea
                  className="comment"
                  placeholder="Write your review"
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                />
                <AiOutlineEdit className="icon" />
              </div>
              <div className="submit">
                <button
                  onClick={() => {
                    handleReview();
                  }}
                  className="submit__button"
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="review__header__user">
            <div className="review__header__user__title">
              <span className="title">
                You must be logged in to post a comment
              </span>
            </div>
            <div className="review__header__user__comment">
              <div className="submit space">
                <Link to="/login">
                  <button className="submit__button">Login</button>
                </Link>
              </div>
            </div>
          </div>
        )}
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
      {reviews.length > 0 &&
        reviews.map((item) => (
          <div className="review__body">
            <div className="review__body__avatar">
              <div className="review__body__avatar__image">
                <img src={item.user.avatar} alt="avatar" />
              </div>
            </div>
            <div className="review__body__content">
              <span className="name">{item.user.name}</span>
              <span className="stars">
                <Rating item={item.rate} />
              </span>
              <span className="content">{item.content}</span>
              <div className="bottom">
                <span className="date">{item.createDate}</span>
                <span className="line" />
                <span className="reply">
                  <MdReply className="icon" />
                  <span className="text">Reply</span>
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Review;
