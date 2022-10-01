import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import DishType from "../pages/DishType";
import Cuisines from "../pages/Cuisines";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import FoodDetails from "../pages/FoodDetails"
// import Search from "../pages/Search";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/food-type" element={<DishType/>} />
      <Route path="/collection" element={<Cuisines/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/foods/:id" element={<FoodDetails/>} />
      {/* <Route path="/search" element={<Search/>} /> */}
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  );
};

export default Routers;
