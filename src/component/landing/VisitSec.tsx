import React from "react";

function VisitSec() {
  return (
    <section className="my-20">
      <div className="bg-lightGreen">
        <div className="bg-brandGreen w-full relative overflow-hidden flex items-center mt-10">
          {/* --- desktop map --- */}
          <div className="hidden lg:block absolute right-0 bottom-0 h-full w-1/2 bg-lightGreen">
            <img
              className="absolute right-0 bottom-0 h-full w-full object-cover"
              src="/images/map.png"
              alt="Background Decoration"
            />

            <div className="relative h-full flex items-center pl-[5%]">
              <div className="text-white font-montserrat max-w-xl">
                <p className="text-lg lg:text-[35px] font-bold">
                  Visit Our Store
                </p>
                <p className="text-[17px] mt-4">
                  Dorem ipsum dolor sit amet, consectetur Nunc vulputate libero
                  et velit interdum, ac aliquet odio mattis. Class aptent taciti
                  sociosqu ad litora inceptos himenaeos.
                </p>
                <div className="cursor-pointer uppercase w-50 p-2 text-center rounded-[10px] my-5 bg-lightGreen text-[15px]">
                  Get Direction
                </div>
              </div>
            </div>
          </div>
          {/* ------------------ desktop map end ---------------------------------- */}

          <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 font-montserrat relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* --- download section --- */}
              <div className="flex flex-col justify-center text-white my-10">
                <p className="text-2xl font-bold md:text-[35px] leading-tight ">
                  Download Our Mobile App
                </p>

                <p className="text-base md:text-[17px] mt-2 md:mt-4 opacity-80">
                  Dorem ipsum dolor sit amet, consectetur Nunc vulputate libero
                  et velit interdum, ac aliquet odio mattis. Class aptent taciti
                  sociosqu ad litora inceptos himenaeos.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 md:mt-10 w-full">
                  <div className="block text-center justify-center items-center rounded-[15px]">
                    <img
                      src="/images/qr1.png"
                      alt="Bajaj"
                      className="max-w-full h-auto"
                    />
                    <p>ios</p>
                  </div>

                  <div className=" block text-center items-center rounded-[15px] ">
                    <img
                      src="/images/qr2.png"
                      alt="Bajaj"
                      className="max-w-full h-auto"
                    />
                    <p>Android</p>
                  </div>
                </div>
                <div className=" w-50 p-2 text-center rounded-[10px] my-5 bg-lightGreen">
                  Learn More
                </div>
              </div>

              {/* ---mobile map --- */}
              <div className="lg:hidden flex flex-col justify-center text-white mb-10">
                <p className="text-2xl font-bold leading-tight">
                  Visit Our Store
                </p>
                <p className="text-base mt-2 opacity-80">
                  Dorem ipsum dolor sit amet, consectetur Nunc vulputate libero
                  et velit interdum, ac aliquet odio mattis. Class aptent taciti
                  sociosqu ad litora inceptos himenaeos.
                </p>
                <div className="mt-4 overflow-hidden h-40 w-full relative">
                  <img
                    src="/images/map.png"
                    className="w-full h-full object-cover"
                    alt="Map"
                  />
                </div>
                <div className="cursor-pointer uppercase w-full sm:w-50 p-2 text-center rounded-[10px] mt-5 bg-lightGreen text-[15px]">
                  Get Direction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisitSec;
