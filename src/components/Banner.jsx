import React from "react";
import AvengersImage from "../assets/Avengers.jpg";

function Banner() {
  return (
    <div
      className="h-[20vh]  md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(${AvengersImage})`,
      }}
    >
      <div className="text-white text-2xl w-full text-center bg-gray-900/60 p-4">
        Avengers Endgame
      </div>
    </div>
  );
}

export default Banner;
