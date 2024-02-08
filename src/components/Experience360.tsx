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
          <svg width="482" height="19" viewBox="0 0 482 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M417.508 15.2012C420.199 15.019 425.759 14.1915 431.063 13.6833C441.367 12.6957 452.1 13.1775 462.242 11.4823C474.104 9.49947 413.493 8.83701 400.096 8.816C384.226 8.79498 365.628 8.83469 341.542 8.74478C295.576 8.58131 232.99 8.48439 170.875 9.30874C152.514 9.56212 134.142 9.78163 115.852 10.181C108.982 10.3351 102.101 10.4916 95.2304 10.6457C83.1792 10.9271 71.136 11.2097 59.0817 11.4607C48.8739 11.6732 36.3014 12.7498 25.3038 12.6622C12.7636 12.5618 4.02765 10.7426 1.30425 7.24676C0.294083 5.97637 -0.360913 4.11621 1.85668 3.03384C4.08612 1.94793 5.32519 1.6385 6.67861 1.3466C9.94589 0.660024 13.9826 0.126427 15.9043 0.106579C42.4171 -0.11644 72.0078 0.0773862 95.7427 0.270048C114.371 0.426513 133.04 0.573626 157.58 0.58065C186.985 0.716095 275.042 1.18315 304.438 1.1925C323.923 1.19951 343.365 1.67825 362.748 2.29709C378.875 2.81087 395.179 3.35382 411.757 3.96331C427.789 4.54362 437.315 4.58215 453.525 5.25005C456.051 5.34696 459.026 5.44388 462.242 5.56066C464.921 5.63656 468.393 5.77317 471.01 5.82338C473.638 5.86074 479.177 6.20337 481.249 9.33062C483.79 13.1648 479.176 15.2911 473.359 16.7038C470.499 17.3986 467.464 17.4103 465.759 17.4978C459.217 17.924 453.089 18.0571 448.477 17.8458C445.371 17.7022 436.063 18.1377 427.918 18.4576C421.904 18.7087 418.491 18.7472 409.163 18.4098C404.254 18.0326 404.128 16.9164 409.85 15.9788C412.403 15.6378 415.326 15.3471 417.508 15.2012Z" fill="#479E82" />
          </svg>

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
