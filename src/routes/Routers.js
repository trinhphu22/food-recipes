import React, { useEffect, useState } from "react";
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
import Header, { userCurrentID } from "../components/Header/Header";
import FoodMenu from "../pages/FoodMenu";
import Profile from "../pages/Profile";
import Order from "../pages/Order";
import Recipe from "../pages/Recipe";
import { HiShoppingCart } from "react-icons/hi";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const Routers = () => {
  const BasicLayout = () => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
      window.scrollTo(0, 0);
      onSnapshot(
        query(collection(db, "Carts"), where("userID", "==", userCurrentID)),
        (snapshot) =>
          setCarts(
            snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          )
      );
    }, []);

    return (
      <>
        <Header />
        <Outlet />
        <Footer />
        <Link to={`/cart/${userCurrentID}`} className="cart-icon">
          <HiShoppingCart className="icon" />
          {carts.length > 0 && <span className="number">{carts.length}</span>}
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
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/order-management/:id" element={<Order />} />
        <Route path="/recipe-management/:id" element={<Recipe />} />
      </Route>
      <Route path="/cart/:id" element={<CartLayout />}>
        <Route index element={<Cart />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default Routers;
