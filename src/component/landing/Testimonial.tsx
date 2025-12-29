"use client"; // Add this if you are using Next.js App Router

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "../TestimonialCard";
import Autoplay from "embla-carousel-autoplay";
// 1. The data we generated earlier
const testimonials = [
  {
    id: 1,
    name: "Nadeesha Silva",
    testimonial:
      "The creative and interactive approach at Kiddies Coders has transformed my son’s attitude towards learning. He used to struggle with his computing at school, but now he’s always eager to practice and improve. The activities and games make learning fun and effective, and it’s wonderful to see his confidence grow with each session.",
    image: "/images/nadeesha.png",
  },
  {
    id: 2,
    name: "Chaminda Weerakoon",
    testimonial:
      "Before joining Kiddies Coders, my son was shy and hesitant to communicate in English. Now, he confidently expresses himself both at home and in school. The personalized attention and supportive atmosphere at Kiddies Coders have been instrumental in helping him overcome his fears and develop a true love for learning.",
    image: "/images/chaminda.png",
  },
  {
    id: 3,
    name: "Kumari Wickramasinghe",
    testimonial:
      "The teachers at Kiddies Coders are exceptional! They take the time to understand each child’s unique needs and provide guidance that helps them excel. My son has grown so much in his confidence and he now enjoys school much more than before. I highly recommend Kiddies Coders to any parent.",
    image: "/images/kumari.png",
  },
  {
    id: 4,
    name: "James Anderson",
    testimonial:
      "Before joining Kiddies Coders, my son was shy and hesitant to communicate in English. Now, he confidently expresses himself both at home and in school. The personalized attention and supportive atmosphere at Kiddies Coders have been instrumental in helping him overcome his fears and develop a true love for learning.",
    image: "/images/chaminda.png",
  },
];

function Testimonial() {
  // 2. Initialize Embla Carousel
  // align: 'start' ensures the first item aligns to the left
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
  // 3. Create the scroll functions for your buttons
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="my-10 md:my-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 font-montserrat">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-7">
          <p className="text-[35px] font-bold leading-tight">
            What Our Candidates Say About Us
          </p>
          <div className="gap-3 hidden md:flex">
            <div className="text-[12px] cursor-pointer border w-60 md:w-30 h-10 text-lightGreen text-center p-2 bg-white rounded-[30px] font-bold hover:bg-gray-50 transition-colors">
              More Reviews
            </div>
          </div>
        </div>

        {/* 4. Embla Carousel Viewport */}
        <div className="overflow-hidden px-2" ref={emblaRef}>
          <div className="flex -ml-4">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4"
              >
                <TestimonialCard
                  name={item.name}
                  image={item.image}
                  description={item.testimonial}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="gap-3 justify-center mt-10 flex">
          {/* Left Button */}
          <button onClick={scrollPrev} type="button">
            <img
              className="bg-brandGreen rounded-full w-10 h-10 object-cover p-2 cursor-pointer hover:bg-lightGreen transition-colors"
              src="/images/left-arrow.png"
              alt="Previous"
            />
          </button>

          {/* Right Button */}
          <button onClick={scrollNext} type="button">
            <img
              className="w-10 h-10 rounded-full bg-brandGreen p-2 cursor-pointer hover:bg-lightGreen transition-colors"
              src="/images/abc.png"
              alt="Next"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
