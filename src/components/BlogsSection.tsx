import BlogCard from "./BlogCard";
import BlogCardData from "../constants/BlogCardData";
import BlogCardInterface from "../interface/BlogCardInterface";
import React from "react";

export default function BlogsSection() {
  return (
    <>
      <h1 className="py-10 text-[2.6rem] md:text-[3.2rem] font-bold p-1 text-black">
        Blogs & articles
      </h1>

      <div className="w-full flex flex-row flex-wrap justify-center items-center">
        {BlogCardData.map((blog: BlogCardInterface, index) => {
          return (
            <BlogCard
              image={blog.image}
              title={blog.title}
              date={blog.date}
              link={blog.link}
              key={index}
            />
          );
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
