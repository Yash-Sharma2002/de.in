import TestimonialsInterface from "../interface/TestimonialsInterface";
import React from "react";

export default function Steps(props: TestimonialsInterface) {
  return (
    <>
      <div className="text-black cursor-pointer px-[10px] md:pl-[120px] md:py-[60px]  relative architecture-step"  >
        <img
          src={props.img}
          width={20}
          height={20}
          alt={props.title as string}
          className="absolute md:left-[95px] z-0 w-auto"
        />
        <h1 className="md:text-lg font-semibold">{props.title}</h1>
        <p className="text-sm md:text-[16px] py-4">{props.description}</p>
      </div>
    </>
  );
}
