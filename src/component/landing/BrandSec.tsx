import React from "react";

function BrandSec() {
  return (
    <section className="my-7">
      <div className=" bg-brandGreen">
        <div className="container mx-auto   px-4 sm:px-6 md:px-10 lg:px-20 font-montserrat">
          {" "}
          <div className="flex flex-col lg:flex-row justify-between text-center py-12 text-white gap-8 md:gap-2">
            <div className="p-2">
              <p className="text-4xl md:text-[60px] font-bold">ICON1</p>
              <p className="text-md md:text-[22px]">Delivered Packages</p>
              <p className="text-sm md:text-[18px]">
                Sorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="p-2">
              <p className="text-4xl md:text-[60px] font-bold">ICON1</p>
              <p className="text-md md:text-[22px]">Delivered Packages</p>
              <p className="text-sm md:text-[18px]">
                Sorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="p-2">
              <p className="text-4xl md:text-[60px] font-bold">ICON1</p>
              <p className="text-md md:text-[22px]">Delivered Packages</p>
              <p className="text-sm md:text-[18px]">
                Sorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-brandLightGreen w-full relative overflow-hidden py-10 lg:py-0 lg:h-[500px] flex items-center">
        <div className="hidden lg:block absolute right-0 bottom-0  h-full w-1/2">
          <img
            className="absolute right-0 bottom-0 w-auto max-w-full md:h-110"
            src="/images/rec-img.png"
            alt="Background Decoration"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 font-montserrat relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center text-brandFont">
              <p className="text-2xl font-bold md:text-[35px] leading-tight ">
                Trusted Brands
              </p>

              <p className="text-base md:text-[18px] mt-2 md:mt-4 opacity-80">
                Sorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 md:mt-16">
                <div className="bg-lightGreen p-4 flex justify-center items-center rounded-[15px] hover:scale-105 transition-transform">
                  <img
                    src="/images/bajaj-2.png"
                    alt="Bajaj"
                    className="max-w-full h-auto"
                  />
                </div>

                <div className="bg-lightGreen p-4 flex justify-center items-center rounded-[15px] hover:scale-105 transition-transform">
                  <img
                    src="/images/bajaj-1.png"
                    alt="Bajaj"
                    className="max-w-full h-auto"
                  />
                </div>

                <div className="bg-lightGreen p-4 flex justify-center items-center rounded-[15px] hover:scale-105 transition-transform">
                  <img
                    src="/images/tvs-2.png"
                    alt="TVS"
                    className="max-w-full h-auto"
                  />
                </div>

                <div className="bg-lightGreen p-4 flex justify-center items-center rounded-[15px] hover:scale-105 transition-transform">
                  <img
                    src="/images/tvs-1.png"
                    alt="TVS"
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandSec;
