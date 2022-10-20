import React from "react";
import { HiMoon } from "react-icons/hi";
import { IoNotificationsSharp } from "react-icons/io5";

import Avatar from "../../../assets/images/avt1.jpeg";

const Header = () => {
  const number = 5;
  return (
    <div className="admin__main__header">
      <div className="admin__main__header__icon">
        <HiMoon />
      </div>
      <div className="admin__main__header__icon">
        <IoNotificationsSharp />
        {number > 0 && <span className="number">{number}</span>}
      </div>
      <div className="admin__main__header__avatar">
        <img src={Avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
