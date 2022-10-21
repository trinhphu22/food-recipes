import React from "react";
import { HiOutlineViewGrid, HiOutlineUserGroup } from "react-icons/hi";
import { RiDropboxLine, RiListUnordered } from "react-icons/ri";
import {
  GiBlackBook,
  GiCompass,
  GiFoodChain,
  GiMoneyStack,
  GiPokecog,
  GiNewspaper,
} from "react-icons/gi";

import Logo from "../../../assets/images/logo_tasty.png";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { IoLogOutOutline } from "react-icons/io5";

const _nav = [
  {
    name: "Dashboard",
    icon: <HiOutlineViewGrid className="icon" />,
  },
  {
    name: "Products",
    icon: <RiDropboxLine className="icon" />,
  },
  {
    name: "Categories",
    icon: <RiListUnordered className="icon" />,
  },
  {
    name: "Cuisines",
    icon: <GiBlackBook className="icon" />,
  },
  // {
  //   name: "Tags",
  //   icon: <GiFoodChain className="icon" />,
  // },
  {
    name: "Blogs",
    icon: <GiNewspaper className="icon" />,
  },
  {
    name: "Customers",
    icon: <HiOutlineUserGroup className="icon" />,
  },
  {
    name: "Orders",
    icon: <GiCompass className="icon" />,
  },
  {
    name: "Reports",
    icon: <GiMoneyStack className="icon" />,
  },
  {
    name: "Setting",
    icon: <GiPokecog className="icon" />,
  },
];

const Nav = ({ active, setActive }) => {
  return (
    <div className="admin__nav">
      <div className="admin__nav__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="admin__nav__subnav">
        {_nav.map((item, index) => (
          <a
            onClick={() => setActive(item.name)}
            href={`#${item.name}`}
            className={classNames(
              "admin__nav__subnav__item",
              active === item.name && "active"
            )}
          >
            {item.icon}
            <span>{item.name}</span>
          </a>
        ))}
      </div>
      <div className="admin__nav__logout">
        <Link className="btn-logout" to="/login">
          <IoLogOutOutline className="icon" />
          <span>Log out</span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
