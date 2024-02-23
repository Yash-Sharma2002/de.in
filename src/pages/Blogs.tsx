import React from "react";
import BlogsSection from "../components/BlogsSection";
import Header from "../components/Header";

export default function Blogs() {
  return (
    <>
      <Header />

      <div className="w-11/12 md:w-10/12 py-3 mx-auto">
        <div className="my-3">
          <BlogsSection />
        </div>
      </div>
    </>
  );
}
