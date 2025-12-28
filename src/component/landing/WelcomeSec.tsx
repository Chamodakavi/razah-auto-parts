import React from "react";

function WelcomeSec() {
  return (
    <section className="my-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 font-montserrat">
        <div className="relative rounded-[10px] overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="/images/mec-bg.png"
            alt=""
          />
          <img
            className=" absolute left-350 bottom-50  object-cover"
            src="/images/Vector.png"
            alt=""
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-2 font-montserrat">
            <div className="relative w-full h-130 flex justify-center">
              <img
                src="/images/mec2.png"
                alt=""
                className="absolute top-[30px] w-[260px] h-[360px] object-cover rounded-[20px] shadow-lg"
              />

              <img
                src="/images/mec1.png"
                alt=""
                className="absolute top-[140px] left-[50px] w-[260px] h-[360px] object-cover rounded-[20px] shadow-lg"
              />
            </div>
            <div className="text-white mt-1 lg:mt-25 font-motserrat p-5">
              <p className="text-[35px] leading-tight font-bold">
                Your Trusted Partner <br /> for Quality Auto Parts <br /> Since
                2009
              </p>
              <p className="md:text-[17px] my-7">
                Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis.
              </p>
              <div className="text-[15px] uppercase cursor-pointer  w-60 text-center p-2 mt-5 bg-lightGreen text-whit rounded-[5px]">
                MORE DETAILS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSec;
