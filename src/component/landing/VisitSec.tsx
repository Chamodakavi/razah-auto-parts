import React from "react";

function VisitSec() {
  return (
    <section className="my-20">
      <div className="bg-lightGreen">
        <div className="bg-brandGreen w-full relative overflow-hidden  flex items-center mt-10">
          <div className="hidden lg:block absolute right-0 bottom-0 h-full w-1/2">
            <img
              className="absolute right-0 bottom-0 h-full w-auto  object-cover"
              src="/images/map.png"
              alt="Background Decoration"
            />
            {/* visit data */}
            <div className="">
              {/* <div className="relative  md:top-60 left-10 lg:left-20 text-white font-montserrat "></div> */}
              <div className="relative mt-[30%] ml-[5%] text-white font-montserrat ">
                <p className="text-lg lg:text-[35px] font-bold">
                  Visit Our Store
                </p>
                <p className="text-[17px]">
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

          <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 font-montserrat relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
              {/* visit data */}
              {/* <div className="hidden">
                <img
                  className="block lg:hidden object-cover"
                  src="/images/map.png"
                  alt="Background Decoration"
                />
                <div className="relative  md:top-60 left-10 lg:left-20 text-white font-montserrat ">
                  <p className="text-lg lg:text-[35px] font-bold">
                    Visit Our Store
                  </p>
                  <p className="text-[17px]">
                    Dorem ipsum dolor sit amet, consectetur Nunc vulputate
                    libero et velit interdum, ac aliquet odio mattis. Class
                    aptent taciti sociosqu ad litora inceptos himenaeos.
                  </p>
                  <div className="cursor-pointer uppercase w-50 p-2 text-center rounded-[10px] my-5 bg-lightGreen text-[15px]">
                    Get Direction
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisitSec;
