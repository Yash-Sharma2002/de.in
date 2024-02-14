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
              className="mx-2 text-black hover:text-black text-xl"
              href="/about"
            >
              About us
            </a>
            <span className="hidden md:block text-black hover:text-black text-xl">
              |
            </span>
            <a
              className="mx-2 text-black hover:text-black text-xl"
              href="/contact"
            >
              Contact Us
            </a>
            <span className="hidden md:block text-black hover:text-black text-xl">
              |
            </span>
            <a
              className="mx-2 text-black hover:text-black text-xl"
              href="/policies"
            >
              Policies
            </a>
            <span className="hidden md:block text-black hover:text-black text-xl">
              |
            </span>
            <a
              className="mx-2 text-black hover:text-black text-xl"
              href="/terms-and-conditions"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
        <p className="text-[12px] font-[500] mt-3">
          © 2024 Design Elementary. All rights reserved
        </p>
      </div>
    </>
  );
}
