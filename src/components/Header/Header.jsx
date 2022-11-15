import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/images/logo_tasty.png";
import { AiOutlineSearch } from "react-icons/ai";

import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../config/firebaseConfig";
import HeaderRight from "./HeaderRight";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const userObject = JSON.parse(localStorage.getItem("user"));

const nav_links = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Dish Type",
    path: "/food-type",
  },
  {
    display: "Cuisines",
    path: "/collection",
  },
  {
    display: "Recipes",
    path: "/blog",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const [select, setSelect] = useState("Home");
  const [profile, setProfile] = useState([]);
  const [active, setActive] = useState(false);
  const [user, setUser] = useState({});

  // console.log("first 321", userObject);

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser("");
    }
  });

  localStorage.setItem("user", JSON.stringify(user));

  // Đọc dữ liệu từ auth

  useEffect(
    () =>
      onSnapshot(collection(db, "Account"), (snapshot) => {
        setProfile(
          snapshot.docs.filter((doc) => {
            if (userObject) {
              if (doc.data().email === user?.email) {
                return {
                  ...doc.data(),
                  id: doc.id,
                };
              }
            }
            return false;
          })
        );
      }),
    [user]
  );

  const logOut = () => {
    signOut(auth);
  };

  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <img src={Logo} alt="logo" />
      </Link>

      {/* ======= menu ======= */}
      <div className="header__navigation">
        {nav_links.map((item, index) => (
          <NavLink
            to={item.path}
            onClick={() => setSelect(item.display)}
            className={
              select === item.display
                ? "header__navigation__select"
                : "header__navigation__items"
            }
            key={index}
          >
            <div>{item.display}</div>
          </NavLink>
        ))}
      </div>

      {/* ======= nav right icons ======= */}
      <div className="header__nav-right">
        {/* <div className="line" /> */}
        <div className="icon">
          <AiOutlineSearch />
        </div>
        {/* <div className="line" /> */}
        {profile.length > 0 ? (
          <HeaderRight
            user={user}
            id = {profile[0].id}
            profile={profile[0].data()}
            active={active}
            setActive={setActive}
            logOut={logOut}
          />
        ) : (
          <HeaderRight />
        )}
      </div>
    </div>
  );
};

export default Header;
