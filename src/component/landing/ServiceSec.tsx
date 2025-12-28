import React from "react";
import PromoCard from "../PromoCard";

function ServiceSec() {
  return (
    <div className="my-10 md:my-20 ">
      <div className="container mx-auto  px-4 sm:px-6 md:px-10 lg:px-20 font-montserrat">
        <p className="text-[20px] ">Qorem ipsum dolor elit.</p>
        <div className="flex justify-between">
          <p className="text-[35px] font-bold">Special Promotions</p>
          <div className="gap-3 hidden md:flex">
            <img className="w-10 h-10" src="/images/l-arrow.png" alt="" />
            <img className="w-10 h-10" src="/images/r-arrow.png" alt="" />
          </div>
        </div>
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="w-full ">
            <PromoCard />
          </div>
          <div>
            <PromoCard />
          </div>
          <div>
            <PromoCard />
          </div>
          <div>
            <PromoCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSec;
