import React, { useState } from "react";
import Category from "../components/AdminUI/AdminComponent/Category/Category";
import Cuisine from "../components/AdminUI/AdminComponent/Cuisine/Cuisine";
import Customer from "../components/AdminUI/AdminComponent/Customer/Customer";
import Dashboard from "../components/AdminUI/AdminComponent/Dashboard";
import Order from "../components/AdminUI/AdminComponent/Order";
import Blog from "../components/AdminUI/AdminComponent/Recipe/Blog";
import Product from "../components/AdminUI/AdminComponent/Product/Product";
import Report from "../components/AdminUI/AdminComponent/Report";
import Setting from "../components/AdminUI/AdminComponent/Setting";
import Tag from "../components/AdminUI/AdminComponent/Tag";
import Header from "../components/AdminUI/Header/Header";
import Nav from "../components/AdminUI/Navbar/Nav";
import FoodDetails from "./FoodDetails";
import BlogDetails from "./BlogDetails";

const Admin = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="admin">
      <Nav active={active} setActive={setActive} />
      <div className="admin__main">
        <Header />
        {active === "Dashboard" && <Dashboard />}
        {active === "Products" && <Product setActive={setActive} />}
        {active === "Product-Detail" && <FoodDetails />}
        {active === "Categories" && <Category />}
        {active === "Cuisines" && <Cuisine />}
        {/* {active === "Tags" && <Tag />} */}
        {active === "Recipes" && <Blog setActive={setActive} />}
        {active === "Recipe-Detail" && <BlogDetails />}
        {active === "Customers" && <Customer />}
        {active === "Orders" && <Order />}
        {active === "Turnover" && <Report />}
        {active === "Setting" && <Setting />}
      </div>
    </div>
  );
};

export default Admin;
