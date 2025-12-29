import React from "react";

function HeroSection() {
  return (
    <div className="relative w-full min-h-[90vh] bg-black overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src="/images/bg-image.png"
        alt=""
      />

      <div className="relative container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="relative grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2 top-[60px] font-montserrat text-white">
          {/* Left Side: Text */}
          <div className="mt-[102px] relative z-10">
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
            <div className="uppercase bg-lightGreen w-50 text-center text-[15px] p-1 mt-7 rounded-[10px] cursor-pointer text-black font-bold">
              Discover home
            </div>
          </div>

          {/* Right Side: Engine & Green Glow */}
          <div className="hidden lg:flex w-full h-full relative items-center justify-center">
            {/* --- glow effect --- */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lightGreen rounded-full blur-[600px] opacity-90"></div>

            <img
              className="relative z-10 w-full h-full md:object-contain drop-shadow-2xl"
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
