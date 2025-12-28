import React from "react";

function ContactSec() {
  return (
    <section className="my-20">
      <div className="container mx-auto   px-4 sm:px-6 md:px-10 lg:px-20 font-montserrat">
        <div className="relative rounded-[10px] overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="/images/mec-bg.png"
            alt=""
          />
          <img
            className="absolute    object-cover right-[-130] h-70"
            src="/images/Vector.png"
            alt=""
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-2  font-montserrat">
            <div className=" w-full h-full flex justify-center p-10">
              <img
                src="/images/call-man.png"
                alt=""
                className="object-cover rounded-[20px] shadow-lg "
              />
            </div>
            <div className="text-white lg:mt-10 sm:mt-[-30] font-motserrat p-5">
              <p className="text-[35px] leading-tight font-bold">
                Need Help? <br /> Call Us Now!
              </p>
              <p className="md:text-[16px] my-7">
                Dorem ipsum dolor sit amet, consectetur Nunc vulputate libero et
                velit interdum, ac aliquet odio mattis. Class aptent taciti
                sociosqu ad litora inceptos himenaeos.
              </p>
              <div className="text-[15px] uppercase w-50 p-2 text-center mt-5 bg-lightGreen text-whit cursor-pointer  rounded-[5px]">
                Call : +94 11 234 5678
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSec;
