import TestimonialsInterface from "../interface/TestimonialsInterface";
import React from "react";

export default function Steps(props: TestimonialsInterface) {
  return (
    <>
      <div className="text-black flex justify-start cursor-pointer px-[10px] md:pl-[120px] py-[10px] md:py-[10px]  relative architecture-step"  >
        {
          typeof props.img === "string" ?
            <img
              src={props.img}
              width={20}
              height={20}
              alt={props.title as string}
              className={`mx-2 z-0 w-auto ${props.number===1?'md:mr-[2.2rem] mr-[9px]':''}`}
            />
            :
            <div className={`mx-2 z-0 w-auto ${props.number===1?'md:mr-[2.2rem] mr-[9px]':''}`}>
              {props.img}
            </div>
        }

<div>
  
        <h1 className="md:text-lg font-semibold">{props.title}</h1>
        <p className="text-sm md:text-[16px] py-4">{props.description}</p>
</div>
      </div>
    </>
  );
}
