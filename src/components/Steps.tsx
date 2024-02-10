import TestimonialsInterface from "../interface/TestimonialsInterface";
import React from "react";

export default function Steps(props: TestimonialsInterface) {
  return (
    <>
      <div className="text-black cursor-pointer px-[10px] md:pl-[120px] py-[10px] md:py-[10px]  relative architecture-step"  >
        {
          typeof props.img === "string" ?
            <img
              src={props.img}
              width={20}
              height={20}
              alt={props.title as string}
              className="absolute md:left-[95px] z-0 w-auto"
            />
            :
            <div className="absolute md:left-[95px] z-0 w-auto">
              {props.img}
            </div>
        }


        <h1 className="md:text-lg font-semibold">{props.title}</h1>
        <p className="text-sm md:text-[16px] py-4">{props.description}</p>
      </div>
    </>
  );
}
