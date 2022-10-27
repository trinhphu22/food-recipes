import Tippy from "@tippyjs/react";
import React from "react";

//import styles 👇
import "tippy.js/dist/tippy.css"; // optional
import "tippy.js/animations/shift-away.css"; // animation
import "tippy.js/themes/material.css"; // theme

const Popup = ({ children, content }) => {
  return (
    <Tippy
      className="tippy"
      arrow={false}
      animation="shift-away"
      duration={500}
      content="123"
    >
      {children}
    </Tippy>
  );
};

export default Popup;
