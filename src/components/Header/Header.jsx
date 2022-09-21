import React, { useState } from "react";

import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo_tasty.png";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";

const nav_links = [
  {
    display: "Home",
    path: "/home",
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
    display: "Blog",
    path: "/blog",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const [select, setSelect] = useState("Home");

  return (
    // <header className="header">
    // <Container>
    <div className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="logo" />
      </Link>

      {/* ======= menu ======= */}
      <div className="header__navigation">
        {nav_links.map((item, index) => (
          <div
            onClick={() => setSelect(item.display)}
            className={
              select === item.display
              ? "header__navigation__select"
              : "header__navigation__items"
            }
            key={index}
          >
            <NavLink to={item.path}>{item.display}</NavLink>
          </div>
        ))}
      </div>

      {/* ======= nav right icons ======= */}
      <div className="header__nav-right">
        <div className="line" />
        <a className="icon">
          <AiOutlineSearch />
        </a>
        <div className="line" />
        <a className="icon">
          <AiOutlineUser />
        </a>
      </div>
    </div>
    // </Container>
    // </header>
  );
};

export default Header;
