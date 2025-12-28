import React from "react";

function HeroSection() {
  return (
    <div className="relative  w-full min-h-[90vh] bg-black ">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/bg-image.png"
        alt=""
      />
      <div className="relative container mx-auto  px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="relative grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2 top-[60px] font-montserrat text-white">
          <div className="mt-[102px]">
            <p className="uppercase text-lg md:text-[20px]">AUTO PARTS</p>
            <p className="font-bold leading-tight text-4xl md:text-6xl lg:text-[70px]">
              Premium Auto <br /> <span className="text-lightGreen">Parts</span>
            </p>
            <p className="md:text-[18px] my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              lorem tortor, maximus non suscipit feugiat, finibus a libero. Cras
              orci ante, feugiat a ante vel, pulvinar varius nisl. Praesent
              blandit.
            </p>
            <div className="uppercase bg-lightGreen w-50 text-center text-[15px] p-1 mt-7 rounded-[10px] cursor-pointer text-black">
              Discover home
            </div>
          </div>
          <div className="hidden lg:block w-full h-full ">
            <img
              className="w-full h-full md:object-contain"
              src="/images/engine.png"
              alt="engine"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
