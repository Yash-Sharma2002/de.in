import React from "react";
import BlogsSection from "../components/BlogsSection";

export default function Blogs() {
  return (
    <>
      <div className="w-11/12 md:w-10/12 py-3 mx-auto">
        <a href="/" className="mx-auto my-3 flex justify-end">
          <img
            src={require("../assets/navlogo.svg").default}
            alt="Design Elementary"
            width={200}
            height={16}
          />
        </a>
        <div className="my-3">
          <BlogsSection />
        </div>
      </div>
    </>
  );
}
