import React from "react";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Footer from "./components/Footer";

const Main = React.lazy(() => import('./pages/Main'))
const About = React.lazy(() => import('./pages/About'))
const TermsConditions = React.lazy(() => import('./pages/TermsConditions'))
const Policies = React.lazy(() => import('./pages/Policies'))

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/policies" element={<Policies />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;