import BlogCard from "./BlogCard";
import BlogCardData from "../constants/BlogCardData";
import BlogCardInterface from "../interface/BlogCardInterface";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function BlogsSection({
  title = "Blogs & articles",
  readMore = false,
}: {
  title?: string;
  readMore?: boolean;
}) {
  return (
    <>
      <h1
        className={`text-black font-bold text-[28px] mx-auto md:text-[3rem] mb-3 ml-2 w-fit head-shade ${
          title !== "Blogs & articles" ? " head-shade" : ""
        }`}
      >
        {title}
      </h1>

      <div className="w-full flex flex-row flex-wrap justify-center items-center">
        {BlogCardData.sort(
          (a: BlogCardInterface, b: BlogCardInterface) =>
            Number(new Date(b.date)) - Number(new Date(a.date))
        ).map((blog: BlogCardInterface, index) => {
          if (index > 5 && readMore) return null;
          return <BlogCard {...blog} key={index} />;
        })}
      </div>
      {readMore && (
        <div className="flex justify-center py-14 ">
          <a
            href="/blogs"
            className="bg-[#E93B3B] text-white text-md font font-semibold p-2.5 px-8 rounded-full tracking-wider flex justify-center items-center"
          >
            Read More <IoIosArrowForward className="text-white text-3xl ml-2" />
          </a>
        </div>
      )}
    </>
  );
}
