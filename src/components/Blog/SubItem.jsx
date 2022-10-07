import React from "react";

import Image from "../../assets/images/image1.jpeg";

const SubItem = () => {
  return (
    <div className="blog__sub__card">
      <div className="blog__sub__card__image">
        <img src={Image} alt="" />
      </div>
      <div className="blog__sub__card__info">
        <span className="timeless">30 minutes or less</span>
        <span className="title">
          The Hitchhiker's Guide To Best 50 Desserts In The World.....
        </span>
      </div>
    </div>
  );
};

export default SubItem;
