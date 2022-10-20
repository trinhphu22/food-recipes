import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/images/logo_tasty.png";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";

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
        <div className="line" />
        <a className="icon">
          <AiOutlineSearch />
        </a>
        <div className="line" />
        <Link to="/login" className="icon">
          <AiOutlineUser />
        </Link>
      </div>
    </div>
    // </Container>
    // </header>
  );
};

export default Header;
