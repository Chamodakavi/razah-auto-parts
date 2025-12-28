import React from "react";
import PromoCard from "../PromoCard";
import TestimonialCard from "../TestimonialCard";

function Testimonial() {
  return (
    <div className="my-10 md:my-20 ">
      <div className="container mx-auto  px-4 sm:px-6 md:px-10 lg:px-20 font-montserrat">
        {/* <p className="text-[20px] ">Qorem ipsum dolor elit.</p> */}
        <div className="flex justify-between">
          <p className="text-[35px] font-bold">
            What Our Candidates Say About Us
          </p>
          <div className="gap-3 hidden md:flex">
            <div className="text-[12px]  cursor-pointer border w-60 md:w-30 h-10 text-lightGreen text-center p-2 mt-10 lg:mt-0 bg-white text-whit rounded-[30px] font-bold">
              More Reviews
            </div>
          </div>
        </div>
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="w-full ">
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
        </div>
        <div className="gap-3 justify-center mt-10 flex">
          <img
            className="bg-brandGreen rounded-full w-10 h-10 object-cover p-2 cursor-pointer hover:bg-lightGreen"
            src="/images/left-arrow.png"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full bg-brandGreen p-2 cursor-pointer hover:bg-lightGreen"
            src="/images/abc.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
