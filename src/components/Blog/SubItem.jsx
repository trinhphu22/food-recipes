import React from "react";

import Image from "../../assets/images/image1.jpeg";

const SubItem = () => {
  return (
    <div className="blog__sub">
      <div className="blog__sub__image">
        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export default SubItem;
