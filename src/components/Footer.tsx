import React from "react";
export default function Footer() {
  return (
    <>
      <div className=" py-4 text-black w-11/12 mx-auto">
        <div className=" flex justify-between items-start md:items-center flex-col md:flex-row">
          <a href="/">
            <img
              src={require("../assets/navlogo.svg").default}
              alt="Design Elementary"
              width={200}
              height={16}
            />
          </a>

          <div className="flex justify-around item-center flex-col md:flex-row mt-4 md:mt-[unset]">
          <a
              className="mx-2 text-black hover:text-black text-lg font-bold"
              href="/"
            >
              DesignAI
            </a>
            <span className="hidden md:block text-black hover:text-black text-lg font-bold">
              |
            </span>
            <a
              className="mx-2 text-black hover:text-black text-lg font-bold"
              href="/about"
            >
              About us
            </a>
            <span className="hidden md:block text-black hover:text-black text-lg font-bold">
              |
            </span>
            <a
              className="mx-2 text-black hover:text-black text-lg font-bold"
              href="/contact"
            >
              Contact Us
            </a>
            <span className="hidden md:block text-black hover:text-black text-lg font-bold">
              |
            </span>
            <a
              className="mx-2 text-black hover:text-black text-lg font-bold"
              href="/policies"
            >
              Policies
            </a>
            <span className="hidden md:block text-black hover:text-black text-lg font-bold">
              |
            </span>
            <a
              className="mx-2 text-black hover:text-black text-lg font-bold"
              href="/terms-and-conditions"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
        <div className="flex w-full justify-between items-center flex-col md:flex-row">
          <p className="text-[12px] mt-3 font-semibold">
            © 2024 Design Elementary. All rights reserved
          </p>
          <p className="text-[16px] font-[900] bg-[#005B3E] px-3 py-2 text-white mt-3 rounded-xl">Servicing Pan India</p>
        </div>
      </div>
    </>
  );
}
