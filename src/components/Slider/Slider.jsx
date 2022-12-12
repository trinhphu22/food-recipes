import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import Item from "./components/Item";

import image1 from "../../assets/images/image1.jpeg";
import image2 from "../../assets/images/image2.jpeg";
import image3 from "../../assets/images/image3.jpeg";
import image4 from "../../assets/images/image4.jpeg";
import image5 from "../../assets/images/image5.jpeg";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const IMAGES = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
  {
    image: image4,
  },
  {
    image: image5,
  },
];

const Slide = () => {
  const [products, setProducts] = useState([]);

  const settings = {
    adaptiveHeight: true,
    arrows: false,
    // slidesToShow: 2,
    slidesToScroll: 1,
    // className: "center",
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
  };

  useEffect(() => {
    onSnapshot(
      // Lọc dữ liệu có trạng thái cho phép đăng ("status" == true)
      query(collection(db, "Products"), where("recipeStatus", "==", true)),
      (snapshot) =>
        setProducts(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
            ingredientsTotal: doc.data().ingredients.length,
          }))
        )
    );
  }, []);

  return (
    <Slider {...settings}>
      {products.slice(0, 4).map((item, index) => (
        <Item item={item} />
      ))}
    </Slider>
  );
};

export default Slide;
