import React from 'react'

export default function Header() {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto flex justify-between items-center py-3">
      <a href="/" className="my-3 w-auto">
          <img
            src={require("../assets/navlogo.svg").default}
            alt="Design Elementary"
            width={190}
            height={16}
          />
        </a>
        <div
        className="tooltip px-2 py-2 bg-white text-green-400 tooltip-bottom tooltip-error before:text-white"
      >
        <a
          href={"https://beta.designelementary.com/home-staging"}
          className="font-semibold active:bg-transparent text-black text-[14px] lg:text-[16px] capitalize mx-2 hover:bg-[#7afe75] py-2 px-2 rounded-md after-content "
        >
          DesignAI
         
        </a>
      </div>
      </div>
  )
}
