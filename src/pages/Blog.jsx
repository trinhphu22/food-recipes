import React from "react";
import { Blogs } from "../components/Api/data";
import MainBlog from "../components/Blog/MainBlog";
import SliderBlog from "../components/Blog/SliderBlog";
import SubItem from "../components/Blog/SubItem";

const Blog = () => {
  return (
    <div className="blog">
      <SliderBlog />
      <div className="blog__sub">
        <SubItem />
        <SubItem />
        <SubItem />
      </div>
      <div className="blog__main">
        {Blogs.map((item, index) => (
          <MainBlog item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
