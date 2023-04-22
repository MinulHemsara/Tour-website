import React from "react";

const Plan = () => {
  return (
    <>
      <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
        <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
          <img
            className="row-span-4 object-cover w-full h-full p-2"
            src="https://www.srilanka.travel/image/travel-new-images/elephant-new.png"
            alt="/"
          />
          <img
            className="row-span-2 object-cover w-full h-full p-2"
            src="https://images.pexels.com/photos/1998438/pexels-photo-1998438.jpeg"
            alt="/"
          />
          <img
            className="row-span-2 object-cover w-full h-full p-2"
            src="https://images.pexels.com/photos/4169723/pexels-photo-4169723.jpeg"
            alt="/"
          />
          <img
            className="row-span-2 object-cover w-full h-full p-2"
            src="https://images.pexels.com/photos/14621285/pexels-photo-14621285.jpeg"
            alt="/"
          />
          <img
            className="row-span-3 object-cover w-full h-full p-2"
            src="https://images.pexels.com/photos/4169720/pexels-photo-4169720.jpeg"
            alt="/"
          />
        </div>
        <div className="flex flex-col h-full justify-center">
          <h3 className="text-5xl md:text-6xl font-bold">Plan your trip</h3>
          <p className="text-2xl py-6">Uncover Island Wonders.</p>
          <p className="pb-6">
            Discover the allure of an island getaway with its turquoise waters,
            sandy beaches, snorkeling, rainforest hikes, cultural experiences,
            and more.
          </p>
          <div>
            <button className="border-black mr-4 hover:shadow-xl">
              {" "}
              Learn More{" "}
            </button>
            <button className="bg-black text-white border-black hover:shadow-xl">
              {" "}
              Book Your Trip{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
