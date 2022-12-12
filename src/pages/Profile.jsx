import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import Avatar from "../assets/images/avt1.jpeg";
import { userCurrent, userCurrentID } from "../components/Header/Header";
import ChangePassword from "../components/Profile/ChangePassword";
import EditProfile from "../components/Profile/EditProfile";
import { db } from "../config/firebaseConfig";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [profile, setProfile] = useState([]);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  useEffect(() => {
    // window.scroll(0, 0);
    onSnapshot(collection(db, "Account"), (snapshot) => {
      setProfile(
        snapshot.docs.filter((doc) => {
          if (doc.id === userCurrentID) {
            return {
              ...doc.data(),
              id: doc.id,
            };
          }
          return false;
        })
      );
    });
  }, []);

  return (
    <div className="profile">
      {profile.length > 0 && (
        <div className="profile__card">
          <div className="profile__card__image">
            <img src={profile[0]?.data().avatar} alt="avatar" />
          </div>
          <div className="profile__card__info">
            <div className="profile__card__info__user">
              {profile[0]?.data().name}
            </div>
            <div className="profile__card__info__email">
              <span>
                <strong>Email: </strong>
                {profile[0]?.data().email}
              </span>
            </div>
            <div className="profile__card__info__type">
              <span>
                <strong>Account Type: </strong>
                {profile[0]?.data().role}
              </span>
            </div>
            <div className="profile__card__info__phone">
              <span>
                <strong>Phone Number: </strong>
                {profile[0]?.data().phoneNumber}
              </span>
            </div>
            <div className="profile__card__info__address">
              <span>
                <strong>Address: </strong>
                {profile[0]?.data()?.addresses[0]?.address}
              </span>
            </div>
            <div className="profile__card__info__abstract">
              <p>{profile[0]?.data().about}</p>
            </div>
            <div className="profile-button">
              <div
                onClick={() => toggleDrawer()}
                className="profile__card__info__settings"
              >
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
      )}
      <EditProfile
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
        image={Avatar}
        user={profile.length > 0 && profile[0]?.data()}
      />
      <ChangePassword hide={hide} visible={visible} />
    </div>
  );
};

export default Profile;
