import React, { useState } from "react";
import Categories from "../components/AdminUI/AdminComponent/Categories";
import Cuisines from "../components/AdminUI/AdminComponent/Cuisines";
import Customers from "../components/AdminUI/AdminComponent/Customers";
import Dashboard from "../components/AdminUI/AdminComponent/Dashboard";
import Orders from "../components/AdminUI/AdminComponent/Orders";
import Products from "../components/AdminUI/AdminComponent/Products";
import Reports from "../components/AdminUI/AdminComponent/Reports";
import Setting from "../components/AdminUI/AdminComponent/Setting";
import Tags from "../components/AdminUI/AdminComponent/Tags";
import Header from "../components/AdminUI/Header/Header";
import Nav from "../components/AdminUI/Navbar/Nav";

const Admin = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="admin">
      <Nav active={active} setActive={setActive} />
      <div className="admin__main">
        <Header />
        {active === "Dashboard" && <Dashboard />}
        {active === "Products" && <Products />}
        {active === "Categories" && <Categories />}
        {active === "Cuisines" && <Cuisines />}
        {active === "Tags" && <Tags />}
        {active === "Customers" && <Customers />}
        {active === "Orders" && <Orders />}
        {active === "Reports" && <Reports />}
        {active === "Setting" && <Setting />}
      </div>
    </div>
  );
};

export default Admin;
