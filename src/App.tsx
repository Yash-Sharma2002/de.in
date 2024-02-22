import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";

const Main = React.lazy(() => import("./pages/Main"));
const About = React.lazy(() => import("./pages/About"));
const TermsConditions = React.lazy(() => import("./pages/TermsConditions"));
const Policies = React.lazy(() => import("./pages/Policies"));

function App() {
  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=+916363759171&text=Hello,%20I%20would%20like%20to%20know%20more%20about%20Your%Designs"
        className=" fixed top-[70%] left-12 z-[1000] rounded-r-md  p-[8px] md:top-[50%]"
        style={{ transform: "translate(-76%)" }}
      >
        <img
          src={require("./assets/whatsapp.png").default}
          alt="whatsapp"
          className="w-[55px] bg-white rounded-full"
        />
      </a>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
