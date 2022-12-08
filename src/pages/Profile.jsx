import React, { useState } from "react";
// import { userObject } from "../components/Header/Header";

import Avatar from "../assets/images/avt1.jpeg";
import ChangePassword from "../components/Profile/ChangePassword";
import EditProfile from "../components/Profile/EditProfile";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

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
            <div
              onClick={() => toggleDrawer()}
              className="profile__card__info__settings"
            >
              {/* <GiPokecog className="icon" /> */}
              <span>Edit Profile</span>
            </div>
            <div
              onClick={() => show()}
              className="profile__card__info__settings"
            >
              <span>Change Password</span>
            </div>
          </div>
        </div>
      </div>
      <EditProfile isOpen={isOpen} toggleDrawer={toggleDrawer} image={Avatar} />
      <ChangePassword hide={hide} visible={visible} />
    </div>
  );
};

export default Profile;
