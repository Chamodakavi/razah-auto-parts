"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import PromoCard from "../PromoCard";

function ServiceSec() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const promotions = [
    {
      id: 1,
      image: "/images/promo1.png",
      title: "Engine Components",
      description:
        "Genuine engine parts for all major brands. Get 10% off on complete overhaul kits this week.",
    },
    {
      id: 2,
      image: "/images/promo2.png",
      title: "Brake Systems",
      description:
        "Stay safe with premium brake pads and discs. Free safety inspection included with every purchase.",
    },
    {
      id: 3,
      image: "/images/promo3.png",
      title: "Service Bundles",
      description:
        "Oil filters, air filters, and spark plugs. Save 15% when you buy the full periodic service kit.",
    },
    {
      id: 4,
      image: "/images/promo4.png",
      title: "Body & Accessories",
      description:
        "Upgrade your ride with new lights, mirrors, and bumpers. Wide range of models available now.",
    },
    {
      id: 5,
      image: "/images/promo3.png",
      title: "Body & Accessories",
      description:
        "Upgrade your ride with new lights, mirrors, and bumpers. Wide range of models available now.",
    },
  ];

  return (
    <div className="my-10 md:my-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 font-montserrat">
        <p className="text-[20px]">Qorem ipsum dolor elit.</p>
        <div className="flex justify-between items-center mb-7">
          <p className="text-[35px] font-bold">Special Promotions</p>

          {/* Desktop/Tablet Buttons */}
          <div className="gap-3 hidden md:flex">
            <button onClick={scrollPrev} type="button">
              <img
                className="w-10 h-10 cursor-pointer hover:opacity-75 transition-opacity"
                src="/images/l-arrow.png"
                alt="Previous"
              />
            </button>
            <button onClick={scrollNext} type="button">
              <img
                className="w-10 h-10 cursor-pointer hover:opacity-75 transition-opacity"
                src="/images/r-arrow.png"
                alt="Next"
              />
            </button>
          </div>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {promotions.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 pl-6"
              >
                <div className="w-full">
                  <PromoCard
                    title={item.title}
                    image={item.image}
                    description={item.description}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Only Buttons */}
        <div className="flex justify-center gap-4 mt-8 md:hidden">
          <button onClick={scrollPrev} type="button">
            <img
              className="w-10 h-10 cursor-pointer hover:opacity-75 transition-opacity"
              src="/images/l-arrow.png"
              alt="Previous"
            />
          </button>
          <button onClick={scrollNext} type="button">
            <img
              className="w-10 h-10 cursor-pointer hover:opacity-75 transition-opacity"
              src="/images/r-arrow.png"
              alt="Next"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceSec;
