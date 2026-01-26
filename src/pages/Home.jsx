import React from "react";
import { useParams } from "react-router-dom";
import Herosection from "../components/Herosection";

const Home = () => {
  return (
    <>
      <div>
        <Herosection></Herosection>
      </div>
      <div className="text-red-600 font-bold ">Error404</div>
    </>
  );
};

export default Home;
