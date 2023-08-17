"use client";
import React, { useState, useRef, useEffect } from "react";

const CardCarousel = ({ cards }) => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 32,
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".next-button",
        prevEl: ".prev-button",
      },
      breakpoints: {
        640: {
          slidesPerView: 1.5,
          centeredSlides: true,
        },
        1024: {
          centeredSlides: false,
          slidesPerView: 2.25,
        },
      },
    });
  }, []);

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-cover h-96 w-96 relative rounded-3xl overflow-hidden mx-2"
              style={{ backgroundImage: `url('${card.image}')` }}
            >
              <div className="inset-0 bg-black/30 absolute p-5 h-full flex flex-col justify-center items-center">
                <h3 className="text-xl text-white">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={goToPreviousCard}
          className="p-3 rounded-full bg-green-500 text-white mr-2"
        >
          {"<"}
        </button>
        <button
          onClick={goToNextCard}
          className="p-3 rounded-full bg-green-500 text-white"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
