import React from "react";
import { FaPlayCircle } from "react-icons/fa";

export default function Experience360() {
  return (
    <>
      <div className="w-11/12  mx-auto flex justify-between my-12 text-black items-center">
        {/* 1 */}
        <div className="md:w-[50%] w-11/12 mx-auto md:mx-[unset] md:ml-[6rem]">
          <h1 className="font-[700] leading-[120%] text-[3rem] tracking-wide">
            Experience the 360 Degree Design
          </h1>
          <p className="text-[18px] text-[#858585] py-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
            mollitia natus nisi eligendi! Totam provident cumque debitis
            adipisci dolorem voluptates placeat, enim eligendi deleniti aperiam
            ad repudiandae corrupti 
          </p>

          <a href="https://www.coohom.com/pub/tool/panorama/viewer?obsPicId=3FOCJY9TDARF&locale=en_US">
            <div className="flex py-4 items-center ">
              <div className="bg-[#FFBC11] py-2 px-6 rounded-xl font-semibold">
                Request a Project
              </div>
              <div>
                <div className="flex items-center justify-evenly ml-2">
                  <FaPlayCircle className="w-[35px] h-[35px] text-[#479E82]" />
                  <p className="ml-3">View Here</p>
                </div>
              </div>
            </div>
          </a>

          <div className="grid grid-cols-1 md:grid-cols-3 py-4 mt-4 w-[115%]">
            <div className="text-start w-fit font-bold px-2 border-l-2 my-2 border-[#E9EAEA]">
              <h1>
                1000{" "}
                <span className="ml-1 text-xl text-[#FFBC11] font-[800]">
                  +
                </span>
              </h1>
              <p className="font-semibold text-lg">Happy customers</p>
            </div>
            <div className="text-start w-fit font-bold px-2 border-l-2 my-2 border-[#E9EAEA] ">
              <h1>
                20{" "}
                <span className="ml-1 text-xl text-[#FFBC11] font-[800]">
                  +
                </span>
              </h1>
              <p className="font-semibold text-lg">Years of experience</p>
            </div>
            <div className="text-start w-fit font-bold px-2 border-l-2 my-2 border-[#E9EAEA]">
              <h1>
                120{" "}
                <span className="ml-1 text-xl text-[#FFBC11] font-[800]">
                  +
                </span>
              </h1>
              <p className="font-semibold text-lg">Award winning</p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex-col justify-center items-center relative hidden md:flex w-1/2">
          <img
            className="w-[70%] absolute z-20 -ml-[65px]"
            src={require("../assets/architecture/experience-360.png").default}
            alt="Minted"
            width={200}
            height={100}
          />
          <img
            className="w-[100%] scale-110 relative z-10 -left-[40px]"
            src={require("../assets/architecture/shaded.png").default}
            alt="Minted"
            width={200}
            height={100}
          />
        </div>
      </div>
    </>
  );
}
