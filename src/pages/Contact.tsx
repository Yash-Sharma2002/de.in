import React from "react";

export default function Contact() {
  return (
    <>
      <div className="w-11/12 md:w-10/12 mx-auto py-8 text-black">
      <a href="/" className="mx-auto my-3 flex justify-end">
          <img
            src={require("../assets/navlogo.svg").default}
            alt="Design Elementary"
            width={200}
            height={16}
          />
        </a>
        <h1 className="font-black text-[2rem] md:text-[3rem] my-3 font-[Italiana]">
          Contact Us
        </h1>
        <div className="">
          <div className="">
            <div className="w-full md:w-[50%]">
              <h2 className="font-bold text-xl my-3">
                Merchant Legal entity name:
              </h2>
              <p>K J MARISWAMAPPA AND SONS</p>

              <h2 className="font-bold text-xl my-3">Registered Address:</h2>
              <p>
                DOOR NO 22, 3RD CROSS, APMC YARD, BANGALORE ROAD, BALLARI,
                KARNATAKA, 583101, BELLARY[R], Karnataka, PIN: 583101
              </p>

              <h2 className="font-bold text-xl my-3">Operational Address:</h2>
              <p>
                DOOR NO 22, 3RD CROSS, APMC YARD, BANGALORE ROAD, BALLARI,
                KARNATAKA, 583101, BELLARY[R], Karnataka, PIN: 583101
              </p>
            </div>
            <div className="w-full">
              <h2 className="font-bold text-xl my-3">Email</h2>

              <a href="mailto:care@designelementary.com">
                care@designelementary.com
              </a>
            </div>
            <div className="w-full">
              <h2 className="font-bold text-xl my-3">Phone</h2>

              <a href="tel:+916363759171">+91 6363759171</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
