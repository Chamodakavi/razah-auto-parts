import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0F5F26] text-white">
      <div className="container mx-auto px-4 py-10 md:py-12 lg:py-14 font-montserrat">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <img src="/images/logo.png" alt="" />
              </div>
            </div>

            <p className="text-sm md:text-[17px]">
              Join our newsletter to stay up to date on features and releases.
            </p>

            <form className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md px-3 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-white bg-white"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#0F5F26] hover:bg-gray-100 cursor-pointer"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-3 text-sm md:text-[13px] leading-relaxed">
              By subscribing you agree to with our{" "}
              <span className="underline cursor-pointer">Privacy Policy</span>{" "}
              and provide consent to receive updates from our company.
            </p>
          </div>

          <div className="md:mx-auto">
            <h4 className="text-base md:text-[20px] font-semibold mb-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-30 gap-y-2 text-sm md:text-[15px]">
              <a href="#" className="hover:underline">
                Home
              </a>
              <a href="#" className="hover:underline">
                News
              </a>
              <a href="#" className="hover:underline">
                Pages
              </a>
              <a href="#" className="hover:underline">
                CSR
              </a>
              <a href="#" className="hover:underline">
                Tracking
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
              <a href="#" className="hover:underline">
                Services
              </a>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </div>
          </div>

          <div className="ml-0 lg:ml-25">
            <h4 className="text-base md:text-[20px] font-semibold mb-4">
              Follow Us
            </h4>
            <ul className="space-y-2 text-sm md:text-[17px] cursor-pointer">
              <li className="flex items-center gap-2 ">
                <span className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center">
                  F
                </span>
                <span className=" hover:underline">Facebook</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center">
                  I
                </span>
                <span className=" hover:underline">Instagram</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center">
                  in
                </span>
                <span className=" hover:underline">LinkedIn</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center">
                  Y
                </span>
                <span className=" hover:underline">Youtube</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 bg-white text-xs md:text-[15px] text-gray-700">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-3 md:flex-row">
          <p>© 2025 RAZAH. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 underline">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
