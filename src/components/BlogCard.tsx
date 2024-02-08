import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import BlogCardInterface from "../interface/BlogCardInterface";

export default function BlogCard(props: BlogCardInterface) {
  return (
    <>
      <div className="w-11/12 md:w-[30%] m-2 border border-[#d3cece] rounded-[40px] text-black">
        <img
          src={props.image}
          width={320}
          height={200}
          alt={props.title}
          className="w-11/12 mx-auto mt-4 rounded-t-3xl"
        />
        <p className="text-[20px] font-semibold py-3 px-8">{props.title}</p>

        <div className="flex justify-between items-center py-6 px-8 ">
          <p className="font-semibold">{props.date}</p>
          <a href={props.link} className="bg-[#479E82] p-2 rounded-full">
            <IoIosArrowForward className="text-white rounded-full text-3xl" />
          </a>
        </div>
      </div>
    </>
  );
}
