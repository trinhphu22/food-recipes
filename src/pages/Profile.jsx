import React from "react";
import { Link } from "react-router-dom";
import { userObject } from "../components/Header/Header";

import Avatar from "../assets/images/avt1.jpeg";
import { GiPokecog } from "react-icons/gi";

const Profile = () => {
  console.log("object", userObject);
  return (
    <div className="profile">
      <div className="profile__card">
        <div className="profile__card__image">
          <img src={Avatar} alt="avatar" />
        </div>
        <div className="profile__card__info">
          <div className="profile__card__info__user">Lirin</div>
          <div className="profile__card__info__email">
            <span>
              <strong>Email: </strong>
              admin@gmail.com
            </span>
          </div>
          <div className="profile__card__info__type">
            <span>
              <strong>Account Type: </strong>
              Admin
            </span>
          </div>
          <div className="profile__card__info__phone">
            <span>
              <strong>Phone Number: </strong>
              0123456789
            </span>
          </div>
          <div className="profile__card__info__address">
            <span>
              <strong>Address: </strong>
              13th Street. 47 W 13th St, New York, NY 10011, USA. 20 Cooper
              Square. 20 Cooper Square, New York, NY 10003, USA. 2nd Street Dor
            </span>
          </div>
          <div className="profile__card__info__abstract">
            <p>about</p>
          </div>
          <div className="profile-button">
            <div className="profile__card__info__settings">
              {/* <GiPokecog className="icon" /> */}
              <span>Edit Profile</span>
            </div>
            <div className="profile__card__info__settings">
              <span>Change Password</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
