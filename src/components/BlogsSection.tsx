import BlogCard from "./BlogCard";
import BlogCardData from "../constants/BlogCardData";
import BlogCardInterface from "../interface/BlogCardInterface";
import React from "react";

export default function BlogsSection(props: { title?: string }) {
  const title = props.title || "Blogs & articles";
  return (
    <>
      <h1
        className={`text-black font-bold text-[28px] mx-auto md:text-[3rem] my-3 ml-2 w-fit head-shade ${
          title !== "Blogs & articles" ? " head-shade" : ""
        }`}
      >
        {title}
      </h1>

      <div className="w-full flex flex-row flex-wrap justify-center items-center">
        {BlogCardData.map((blog: BlogCardInterface, index) => {
          return <BlogCard {...blog} key={index} />;
        })}
      </div>

      <div className="flex justify-center py-14 ">
        <button className="bg-[#E93B3B] text-white text-md font font-semibold p-2.5 px-8 rounded-full tracking-wider font-[DM Sans]">
          Read More<span>&rarr;</span>
        </button>
      </div>
    </>
  );
}
