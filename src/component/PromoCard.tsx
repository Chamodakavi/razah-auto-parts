import { Interface } from "node:readline";
import React from "react";

interface PromoCardprop {
  title: string;
  image: string;
  description: string;
}

function PromoCard({ title, image, description }: PromoCardprop) {
  return (
    <div className=" rounded-[18px] bg-white shadow-md shadow-black/10 border border-gray-100 overflow-hidden font-montserrat">
      <img
        src={image}
        alt="Brake special"
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>

        <p className="text-sm leading-relaxed text-gray-600 mb-4">
          {description}
        </p>

        <div className="mt-1 inline-block rounded-[8px] bg-lightGreen px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black hover:bg-green-500 transition-colors cursor-pointer">
          Shop Now
        </div>
      </div>
    </div>
  );
}

export default PromoCard;
