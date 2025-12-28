import React from "react";

function PromoCard() {
  return (
    <div className=" rounded-[18px] bg-white shadow-md shadow-black/10 border border-gray-100 overflow-hidden font-montserrat">
      <img
        src="/images/promo1.png"
        alt="Brake special"
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="text-base font-bold text-gray-900 mb-2">
          Brake Special
        </h3>

        <p className="text-sm leading-relaxed text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>

        <div className="mt-1 inline-block rounded-[8px] bg-lightGreen px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black hover:bg-green-500 transition-colors cursor-pointer">
          Shop Now
        </div>
      </div>
    </div>
  );
}

export default PromoCard;
