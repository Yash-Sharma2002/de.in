import React from "react";
import BlogsSection from "../components/BlogsSection";
import ArchitectureData from "../constants/ArchitectureData";
import TextWIthBack from "../components/TextWIthBack";
import Steps from "../components/Steps";
import Title from "../components/Title";


export default function ArchitecturePage() {
  return (
    <>
      <Title title="Architecture Deisgn | Design Elementary" />
      {/* section 1 */}
      <div className="flex w-[95%] md:w-[80%] justify-around py-4 md:py-10 m-auto">
        {/* 1 */}
        <div className="md:w-[50%] w-full text-black">
          <h1 className="text-2xl leading-8 md:text-[3rem] font-semibold md:leading-[56px] tracking-wide">
            Crafting <br /> Timeless Spaces, <br />
            Redefining <br />
            Living.
          </h1>
          <p className="text-sm py-6">
            Share Where a Every Detail Tells a Story of Elegance and <br />
            innovation
          </p>
          <div className="py-2">
            <a
              href={"/consultation"}
              className="bg-[#E93B3B] shadow-lg text-white text-sm md:text-lg font-semibold p-1 px-4 md:p-2 md:px-6 rounded-3xl mr-2"
            >
              Book a consultation &rarr;
            </a>
          </div>
          <div className="flex py-10 justify-between">
            {/* 6180 */}
            <div>
              <div className="text-[#3B3A5D] text-center font-bold text-lg md:text-2xl py-1">
                6,180
              </div>
              <p className="text-sm md:text-base text-center">
                In property sales
              </p>
            </div>
            {/* 99 */}
            <div>
              <div className="text-[#3B3A5D] text-center font-bold text-lg md:text-2xl py-1">
                99%
              </div>
              <p className="text-sm md:text-base text-center">
                Customer satisfaction
              </p>
            </div>
            {/* 25k+ */}
            <div>
              <div className="text-[#3B3A5D] text-center font-bold text-lg md:text-2xl py-1">
                25k+
              </div>
              <p className="text-sm md:text-base text-center">
                Property Transaction
              </p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="w-[50%] scale-50 mb-8 md:scale-100 hidden md:block">
          <div className="flex justify-center">
            <img
              src="/architecture/architecture1.png"
              alt="Vector"
              width={230}
              height={230}
              className="z-10 w-auto"
            />
            <img
              src="/architecture/architecture2.png"
              alt="Vector"
              width={50}
              height={50}
              className="z-10 ml-2 w-[160px] h-[155px]"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/architecture/architecture4.png"
              alt="Vector"
              width={50}
              height={50}
              className="z-10 mt-2 w-[160px] h-[155px]"
            />
            <img
              src="/architecture/architecture3.png"
              alt="Vector"
              width={230}
              height={230}
              className="z-10 ml-2 relative w-auto bottom-16"
            />
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="flex justify-center ">
        <div
          style={{ backgroundImage: "url('/architecture/architecture5.png')" }}
          className="bg-cover bg-center md:py-8 md:w-[79%] m-auto "
        >
          <h1 className="text-[35px] mt-6 md:mt-0 md:text-[4rem] text-black font-[Italiana] pl-4 md:pl-20">
            Design Your Home <span className="font-bold">₹11 / Sq.Ft</span>
          </h1>
          <p className="md:text-lg text-white w-1/2 py-6 ml-[30px] md:ml-[84px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do{" "}
            <br /> eiusmod tempor incididunt ut labore et dolore
          </p>
          <a
            href={"/consultation"}
            className="bg-[#E93B3B] shadow-lg ml-[30px] md:ml-[84px] text-white text-sm md:text-xl font-semibold p-2 px-4 md:px-6 rounded-3xl mr-2"
          >
            Book free consultation &rarr;
          </a>
        </div>
      </div>

      {/* Section 3 */}
      <div className="py-14 ">
        <h1 className="font-bold md:text-[40px] text-[28px] text-center text-black">
          Ready To Transform Your Space ?
        </h1>
        <p className="p-8 md:py-14 leading-7 text-sm text-[20px] text-center text-black">
          Embark on a design journey with ArchElite. Explore our portfolio,
          schedule a consultation, and <br /> collaborate on a unique concept.
          Receive a detailed proposal, refine the design, and celebrate <br />{" "}
          the transformation of your space. Ready to begin? Contact us for a
          personalized consultation.
        </p>
        <div className="flex justify-center md:justify-[unset] md:w-10/12 w-11/12 m-auto mt-4">
          <img
            src="/architecture/architecture7.png"
            width={50}
            height={500}
            alt="image"
            className="w-[50%] hidden md:block"
          />
          <div>
            <Steps
              img="/architecture/1.png"
              title="Explore Inspiring Designs"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ad quibusdam id aspernatur quos."
            />

            <Steps
              img="/architecture/2.png"
              title="Explore Inspiring Designs"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ad quibusdam id aspernatur quos."
            />

            <Steps
              img="/architecture/3.png"
              title="Explore Inspiring Designs"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ad quibusdam id aspernatur quos."
            />

            <Steps
              img="/architecture/4.png"
              title="Explore Inspiring Designs"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ad quibusdam id aspernatur quos."
            />

            <Steps
              img="/architecture/5.png"
              title="Explore Inspiring Designs"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ad quibusdam id aspernatur quos."
            />
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="py-10 w-[95%] md:w-[80%] m-auto">
        <h1 className="text-black font-bold mb-5 text-[2rem]">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ArchitectureData.map((item, index) => {
            return <TextWIthBack {...item} key={index} clasName="w-full" />;
          })}
        </div>
      </div>

      <div className="border border-black py-4 md:py-10  bg-[#1B454D] relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
        <div className="flex flex-col justify-center items-center">
          <img
            src="/architecture/logo1.png"
            className="w-10 md:w-14"
            width={60}
            height={60}
            alt="image"
          />
          <div className="text-center py-2 md:py-4">Sustainable Design</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src="/architecture/logo2.png"
            className="w-10 md:w-14 h-10 md:h-14"
            width={60}
            height={60}
            alt="image"
          />
          <div className="text-center py-2 md:py-4">25% More Space</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src="/architecture/logo3.png"
            className="w-10 md:w-14 h-10 md:h-14"
            width={60}
            height={60}
            alt="image"
          />
          <div className="text-center py-2 md:py-4">
            Unlimited Design Option
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src="/architecture/logo4.png"
            className="w-10 md:w-14 h-10 md:h-14"
            width={60}
            height={60}
            alt="image"
          />
          <div className="text-center py-2 md:py-4">360{'"'} View</div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="py-8 md:py-14 md:w-[80%] m-auto">
        <h1 className="text-black font-bold text-[2rem] ml-2">Galary</h1>
        <div className="flex justify-around items-center py-8">
          <img
            src="/architecture/building1.png"
            width={100}
            height={100}
            alt="building img"
            className="w-[60%]"
          />
          <img
            src="/architecture/bulding2.png"
            width={60}
            height={60}
            alt="building img"
            className="w-[30%] md:h-[34rem]"
          />
          <div className="bg-[#479E82] h-10 w-10 cursor-pointer md:h-14 md:w-14 rounded-full text-white  md:text-[26px] flex justify-center items-center">
            {">"}
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href={"/consultation"}
            className="bg-[#E93B3B] hover:bg-red-600 shadow-lg ml-[84px] text-white text-sm px-4 md:text-xl font-semibold p-2 md:px-6 rounded-3xl mr-2"
          >
            Book free consultation &rarr;
          </a>
        </div>
      </div>

      <div className="w-11/12 md:w-10/12 mx-auto">
        <BlogsSection />
      </div>

      {/* 9th section */}
      <div className="border border-black mt-10 bg-[#1B454D] py-2">
        <img
          src="/architecture/vector1.png"
          alt="Vector"
          width={300}
          height={300}
          className="w-[10%]  absolute bottom-0 left-0 z-10"
        />
        <div className="md:ml-48 flex justify-between scale-75 md:scale-100 mt-2">
          <h1 className="font-bold text-[36px] md:text-3xl text-white my-3">
            What our Customer Says
          </h1>
          {/* <div className="mr-10 flex justify-evenly items-center w-40">
            <div className="h-10 w-10 rounded-full bg-[#7AD9BA] flex justify-center items-center text-[#005B3E] text-xl">
              &larr;
            </div>
            <div className="h-10 w-10 rounded-full bg-[#F69D98] flex justify-center items-center text-[#005B3E] text-xl">
              &rarr;
            </div>
          </div> */}
        </div>
        {/* 1 */}
        <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <div className=" w-72 md:w-80 bg-white rounded-r-[50px] rounded-tl-[50px] text-black p-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. De
              maiores ab dicta cupiditate expedita eum maxime molestias commodi
              ducimus saepe aut magni quos ea eius.
            </div>
            <div className="flex items-center justify-center w-68 mt-4">
              <img
                src="/architecture/photo.jpg"
                width={70}
                height={70}
                alt="profilepic"
                className="rounded-full border-2 border-[#7AD9BA]"
              />
              <p className="text-[#F1F052] ml-4 text-xl ">Victor Murphy</p>
            </div>
          </div>
          {/* 2 */}
          <div className="hidden md:block ml-4">
            <div className="h-60 w-80 bg-white rounded-r-[50px] rounded-tl-[50px] text-black p-6">
              Lorem ipsum dolor sit amet, consectetur adipisicingvoluptates
              possimus nostrum vitae iusto repudiandae magni mollitia vero sint
              corrupti pariatur sapiente enim alias? Inventore, magni? Quis,
              saepe atque?
            </div>
            <div className="flex items-center justify-center w-68 mt-4">
              <img
                src="/architecture/photo.jpg"
                width={70}
                height={70}
                alt="profilepic"
                className="rounded-full border-2 border-[#7AD9BA]"
              />
              <p className="text-[#F1F052] ml-4 text-xl ">Victor Murphy</p>
            </div>
          </div>
          {/* 3 */}
          <div className="ml-4">
            <div className="h-40  w-72 md:w-80 bg-white rounded-r-[50px] rounded-tl-[50px] text-black p-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              tempore fugiat distinctio eius quisluptatibus neque repellendus
              cumque!
            </div>
            <div className="flex items-center justify-center w-68 mt-4">
              <img
                src="/architecture/photo.jpg"
                width={70}
                height={70}
                alt="profilepic"
                className="rounded-full border-2 border-[#7AD9BA]"
              />
              <p className="text-[#F1F052] ml-4 text-xl ">Victor Murphy</p>
            </div>
          </div>
          <img
            src="/architecture/vector2.png"
            alt="Vector"
            width={500}
            height={500}
            className="w-[10%]  absolute bottom-0 right-0 z-10 hidden md:block"
          />
        </div>
      </div>
    </>
  );
}
