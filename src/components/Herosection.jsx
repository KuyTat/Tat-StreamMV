import React from "react";
import Bg from "../assets/image/BgHero.JPEG";
const Herosection = () => {
  return (
    <>
      <div
        className="h-screen bg-no-repeat bg-cover"
        style={{
          background: `url(${Bg})`,
        }}>
        Hero
      </div>
    </>
  );
};

export default Herosection;
