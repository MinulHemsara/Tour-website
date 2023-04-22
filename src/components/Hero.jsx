import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg"
        alt=""
      />
      <div className="bg-black/20 absolute top-0 left-0 w-full h-screen"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>All inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Welcome to Srilanka
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Come experience the rich stories and breathtaking beauty of Sri
            Lanka, a paradise island with endless tales to share.
          </p>
          <button
            className="bg-white text-black font-semibold"
            style={{ marginTop: "7px" }}
          >
            Discover tours
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
