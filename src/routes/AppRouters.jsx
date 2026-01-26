import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
const AppRouters = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home></Home>}></Route>
      </Routes>
    </>
  );
};

export default AppRouters;
