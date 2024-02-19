import React from "react";

export default function Gallery() {
  return (
    <>
      <div className="py-8 md:py-14 md:w-[80%] m-auto">
        <div className="flex w-full justify-between items-center flex-col md:flex-row">
          <h1 className="text-black font-bold text-[28px] mx-auto md:text-[3rem] ml-2 w-fit head-shade">
            Gallery
          </h1>
          <a
            href={"/"}
            className="bg-[#E93B3B] hover:bg-red-600 w-fit shadow-lg text-white text-sm px-4 md:text-xl font-semibold p-2 md:px-6 rounded-3xl "
          >
            See all &rarr;
          </a>
        </div>
        <div className="flex justify-around items-center py-2 md:py-8  w-full">
          <img
            src={require("../assets/architecture/image-1.png").default}
            width={100}
            height={100}
            alt="building img"
            className="w-[63%]"
          />
          <img
            src={require("../assets/architecture/image-2.png").default}
            width={60}
            height={60}
            alt="building img"
            className="w-[31%] "
          />
        </div>
        <div className="flex justify-around items-center py-2 md:py-8 w-full">
          <img
            src={require("../assets/architecture/image-3.png").default}
            width={100}
            height={100}
            alt="building img"
            className="w-[31%]"
          />
          <img
            src={require("../assets/architecture/image-4.png").default}
            width={60}
            height={60}
            alt="building img"
            className="w-[62%] "
          />
        </div>
        <img
          src={require("../assets/architecture/image-5.png").default}
          width={100}
          height={100}
          alt="building img"
          className="w-[100%] mt-1"
        />
        <div className="flex my-4 justify-center">
          <a
            href={"https://justcall.io/calendar/DesignElementary"}
            className="bg-[#E93B3B] hover:bg-red-600 shadow-lg mx-auto text-white text-sm px-4 md:text-xl font-semibold p-2 md:px-6 rounded-3xl "
          >
            Book free consultation &rarr;
          </a>
        </div>
      </div>
    </>
  );
}
