import React from "react";
import Bg from "../assets/image/BgHero.JPEG";
import Logo from "../assets/image/Logo.JPEG";
import Hero from "../assets/image/Hero.JPEG";
const Herosection = () => {
  return (
    <>
      <div
        className="h-screen bg-no-repeat bg-cover flex flex-col items-center"
        style={{
          background: `url(${Bg})`,
        }}>
        <div className="mt-20">
          <img src={Logo} alt="" />
        </div>
        <div className="w-2/5 mt-10">
          <img src={Hero} alt="" />
        </div>
        <div className=" text-gray-50 text-5xl w-2/5 text-center font-bold mt-9">
          <span>Find Movies You'll Love without the Hassle</span>
        </div>
      </div>
    </>
  );
};

export default Herosection;
