import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ScrollToTop from "../components/ScrollToTop";
import Detailsmv from "../pages/Detailsmv";
const AppRouters = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path="/movie" element={<Movie></Movie>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/Detailsmv/:id" element={<Detailsmv></Detailsmv>}></Route>
      </Routes>
    </>
  );
};

export default AppRouters;
