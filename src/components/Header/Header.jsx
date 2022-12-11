import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/images/logo_tasty.png";
import { AiOutlineSearch } from "react-icons/ai";

import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../config/firebaseConfig";
import HeaderRight from "./HeaderRight";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { BiSearch } from "react-icons/bi";

export const userObject = JSON.parse(localStorage.getItem("user"));
export const userCurrent = JSON.parse(localStorage.getItem("userCurrent"));
export const userCurrentID = JSON.parse(localStorage.getItem("userCurrentID"));

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
  // const [select, setSelect] = useState("Home");
  const [isSearch, setIsSearch] = useState(false);
  const [profile, setProfile] = useState([]);
  const [active, setActive] = useState(false);
  const [user, setUser] = useState({});

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
                localStorage.setItem("userCurrent", JSON.stringify(doc.data()));
                localStorage.setItem("userCurrentID", JSON.stringify(doc.id));
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
    <>
      <div className="header">
        <Link to="/" className="header__logo">
          <img src={Logo} alt="logo" />
        </Link>

        {/* ======= menu ======= */}
        <div className="header__navigation">
          {nav_links.map((item, index) => (
            <NavLink
              to={item.path}
              // onClick={() => setSelect(item.display)}
              className={
                // select === item.display
                // ? "header__navigation__select"
                "header__navigation__items"
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
          <div
            onClick={() => setIsSearch((_search) => !_search)}
            className="icon"
          >
            <AiOutlineSearch />
          </div>
          {/* <div className="line" /> */}
          {profile.length > 0 ? (
            <HeaderRight
              user={user}
              id={profile[0].id}
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
      {/* ======= search ======= */}
      {isSearch && (
        <div className="search-header">
          <div className="search-header__container">
            <input
              className="search-header__container__input"
              type="text"
              placeholder="Search..."
            />
            <div className="search-header__container__icon">
              <BiSearch className="icon" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
