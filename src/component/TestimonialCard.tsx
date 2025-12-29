import React from "react";

interface TestimonialProps {
  image: string;
  name: string;
  description: string;
}

function TestimonialCard({ name, image, description }: TestimonialProps) {
  return (
    <div className=" rounded-2xl border border-green-500 bg-white p-10 shadow-sm">
      {/* Text */}
      <p className="text-sm md:text-[15px] leading-relaxed text-gray-700">
        {description}
      </p>

      {/* Avatar + name + stars */}
      <div className="mt-5 flex items-center">
        <div className="h-25 w-25 overflow-hidden rounded-full  border-gray-200">
          <img
            src={image}
            alt="Nadeesha Silva"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="ml-3">
          <div className="mb-1 flex space-x-1 text-green-500">
            {Array.from({ length: 5 }).map((_, idx) => (
              <img className="w-3 h-3" src="/images/star.png" alt="" />
            ))}
          </div>

          <p className="text-sm md:text-[18px] font-semibold text-gray-900 leading-tight">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
