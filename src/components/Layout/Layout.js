import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

import Routes from "../../routes/Routers";

const Layout = () => {
  return (
    <div>
      <Routes />
      <Link to="/cart" className="cart">
        <HiShoppingCart className="icon" />
        <span className="number">1</span>
      </Link>
    </div>
  );
};

export default Layout;
