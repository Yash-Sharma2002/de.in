import React from "react";
import TextWithBack from "../interface/TextWithBack";

export default function TextWIthBack(props: TextWithBack) {
  return (
    <>
      <div
        className={
          "relative h-[calc(2.5/6*100vh)] w-[49%] overflow-hidden rounded-3xl " +
          props.clasName
        }
      >
        <img
          src={props.back}
          width={500}
          height={500}
          className="w-full h-full object-cover brightness-20"
          alt={props.text}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-4xl font-bold ">{props.text}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
