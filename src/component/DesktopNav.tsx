"use client";
import { useState } from "react";

const DesktopNav = () => {
  // State to toggle mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-darkGreen h-[90px] w-full relative z-50 ">
      <div className="container mx-auto h-full font-montserrat px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex justify-between items-center h-full">
          <div className="z-30 bg-lightGreen h-[150px] w-[120px] flex items-center justify-center rounded-b-xl shadow-md">
            <img className="mt-15 p-1" src="/images/logo.png" alt="" />
          </div>

          <div className="hidden lg:flex gap-8 text-white uppercase text-sm font-medium tracking-wide">
            {/* Nav Item with Arrow */}
            <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition-colors">
              <p>Home</p>
              <img src="/images/d-arrow.png" alt="arrow" className="w-3 h-3" />
            </div>

            <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition-colors">
              <p>Brands</p>
              <img src="/images/d-arrow.png" alt="arrow" className="w-3 h-3" />
            </div>

            <div className="cursor-pointer hover:text-yellow-400 transition-colors">
              <p>Contact</p>
            </div>

            <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition-colors">
              <p>Services</p>
              <img src="/images/d-arrow.png" alt="arrow" className="w-3 h-3" />
            </div>

            <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition-colors">
              <p>About Us</p>
              <img src="/images/d-arrow.png" alt="arrow" className="w-3 h-3" />
            </div>
          </div>

          <div className="hidden lg:flex gap-4 items-center">
            <button className="text-white border border-white px-5 py-2 rounded-[5px] hover:bg-white hover:text-darkGreen transition-all uppercase text-sm font-semibold md:px-2 cursor-pointer ">
              Get a Quote
            </button>

            <button className="bg-white text-darkGreen px-6 py-2 rounded-[5px] hover:bg-darkGreen hover:text-white border transition-all uppercase text-sm font-bold  md:px-2 cursor-pointer ">
              Sign In
            </button>
          </div>

          <div className="lg:hidden flex items-center mx-4">
            <div
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[90px] left-0 w-full bg-darkGreen text-white py-4 shadow-lg flex flex-col items-center gap-4 border-t border-green-800">
          <p className="cursor-pointer hover:text-yellow-400">Home</p>
          <p className="cursor-pointer hover:text-yellow-400">Brands</p>
          <p className="cursor-pointer hover:text-yellow-400">Services</p>
          <p className="cursor-pointer hover:text-yellow-400">About Us</p>
          <div className="flex flex-col gap-3 mt-2 w-full px-10">
            <button className="border border-white py-2 rounded text-center">
              Get a Quote
            </button>
            <button className="bg-white text-darkGreen py-2 rounded text-center font-bold">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default DesktopNav;
