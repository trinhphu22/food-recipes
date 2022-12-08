import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Home from "../pages/Home";
import DishType from "../pages/DishType";
import Cuisines from "../pages/Cuisines";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import FoodDetails from "../pages/FoodDetails";
// import Search from "../pages/Search";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BlogDetails from "../pages/BlogDetails";
import Admin from "../pages/Admin";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import FoodMenu from "../pages/FoodMenu";
import Profile from "../pages/Profile";
import { HiShoppingCart } from "react-icons/hi";

const Routers = () => {
  const BasicLayout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
        <Link to="/cart" className="cart-icon">
          <HiShoppingCart className="icon" />
          <span className="number">1</span>
        </Link>
      </>
    );
  };

  const CartLayout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  const AdminLayout = () => {
    return <Outlet />;
  };

  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<Home />} />
        <Route path="/food-type" element={<DishType />} />
        <Route path="/collection" element={<Cuisines />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/foods/:id" element={<FoodDetails />} />
        {/* <Route path="/search" element={<Search/>} /> */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recipes/:id" element={<BlogDetails />} />
        <Route path="/categories/:id" element={<FoodMenu />} />
        <Route path="/cuisines/:id" element={<FoodMenu />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="/cart" element={<CartLayout />}>
        <Route index element={<Cart />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default Routers;
