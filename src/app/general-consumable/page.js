"use client";
import React from "react";
import Banner from "@/components/Banner";
import { useEffect } from "react";

const GeneralConsumable = () => {
  useEffect(() => {
    const initCarousel = () => {
      const carousel = document.querySelector(".customer-logos");

      if (carousel) {
        const logosCarousel = new Carousel(carousel);
      }
    };

    // Carousel constructor function
    function Carousel(carousel) {
      const slidesToShow = 6;
      const slidesToScroll = 1;
      const autoplaySpeed = 1500;

      let currentIndex = 0;

      const slides = carousel.querySelectorAll(".slide");
      const slideWidth = 100 / slidesToShow;

      slides.forEach((slide) => {
        slide.style.width = `${slideWidth}%`;
      });

      const nextSlide = () => {
        currentIndex = (currentIndex + slidesToScroll) % slides.length;
        updateCarousel();
      };

      const updateCarousel = () => {
        slides.forEach((slide) => {
          slide.classList.remove("active");
        });

        const start = currentIndex;
        const end = (currentIndex + slidesToShow) % slides.length;

        for (let i = start; i < start + slidesToShow; i++) {
          const slideIndex = i % slides.length;
          slides[slideIndex].classList.add("active");
        }

        setTimeout(nextSlide, autoplaySpeed);
      };

      updateCarousel();
    }

    initCarousel();

    return () => {
      // Clean up any event listeners or intervals if necessary
    };
  }, []);

  return (
    <div>
      <Banner title={"General Consumable"} img={"/rubberseals.jpg"} />
      {/* <!-- Products --> */}
      <div className="my-10">
        <div className="mx-auto max-w-xl text-center my-10">
          <h2 className="text-3xl tex-[#07031A] font-bold sm:text-5xl">
            General Consumables
          </h2>

          <p className="mt-4 text-[#4F8A8B] max-w-lg mx-auto">
            Hand tools, Safety items, and Power tools play crucial roles in
            maintaining a safe and productive working environment in various
            industries.
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center my-10 gap-10 px-10 sm:px-0"
          id="products"
        >
          {/* <!-- Product-1 --> */}
          <div className="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic1">
            <img
              src="/Products/fasteners.webp"
              alt="Adapters"
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                General Consumables
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Fasteners
              </h3>

              <div className="flex justify-between items-center">
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  className="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div className="mt-4">
                <a
                  href="/Catalogue.pdf#page=39"
                  target="_blank"
                  rel="norefferer noopener"
                >
                  <label
                    for="my-modal-4"
                    className="cursor-pointer block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
                  >
                    Show Details
                  </label>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Product-1 --> */}

          {/* <!-- Product-2 --> */}
          <div className="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic2">
            <img
              src="/Products/safety-items.webp"
              alt=""
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                General Consumables
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Safety Items
              </h3>

              <div className="flex justify-between items-center">
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  className="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div className="mt-4">
                <a
                  href="/Catalogue.pdf#page=39"
                  target="_blank"
                  rel="norefferer noopener"
                >
                  <label
                    for="my-modal-4"
                    className="cursor-pointer block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
                  >
                    Show Details
                  </label>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Product-2 --> */}

          {/* <!-- Product-3 --> */}
          <div className="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic3">
            <img
              src="/Products/powertools.webp"
              alt=""
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                General Consumables
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Power Tools
              </h3>

              <div className="flex justify-between items-center">
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  className="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div className="mt-4">
                <a
                  href="/Catalogue.pdf#page=39"
                  target="_blank"
                  rel="norefferer noopener"
                >
                  <label
                    for="my-modal-4"
                    className="cursor-pointer block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
                  >
                    Show Details
                  </label>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Product-3 --> */}

          <div className="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic3">
            <img
              src="/Products/handtools.jpg"
              alt=""
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                General Consumables
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Hand Tools
              </h3>

              <div className="flex justify-between items-center">
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  className="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div className="mt-4">
                <a
                  href="/Catalogue.pdf#page=39"
                  target="_blank"
                  rel="norefferer noopener"
                >
                  <label
                    for="my-modal-4"
                    className="cursor-pointer block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
                  >
                    Show Details
                  </label>
                </a>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic3">
            <img
              src="/Products/tapes.webp"
              alt=""
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                General Consumables
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">Tapes</h3>

              <div className="flex justify-between items-center">
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  className="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div className="mt-4">
                <a
                  href="/Catalogue.pdf#page=40"
                  target="_blank"
                  rel="norefferer noopener"
                >
                  <label
                    for="my-modal-4"
                    className="cursor-pointer block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
                  >
                    Show Details
                  </label>
                </a>
              </div>
            </div>

            
          </div>

          <div className="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic3">
            <img
              src="/Products/round-bearing.jpg"
              alt=""
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                General Consumables
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">Bearings</h3>

              <div className="flex justify-between items-center">
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  className="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div className="mt-4">
                <a
                  href="/Catalogue.pdf#page=40"
                  target="_blank"
                  rel="norefferer noopener"
                >
                  <label
                    for="my-modal-4"
                    className="cursor-pointer block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
                  >
                    Show Details
                  </label>
                </a>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic3">
            <img
              src="/Products/paints.webp"
              alt=""
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                General Consumables
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">Paints</h3>

              <div className="flex justify-between items-center">
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  className="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div className="mt-4">
                <a
                  href="/Catalogue.pdf#page=40"
                  target="_blank"
                  rel="norefferer noopener"
                >
                  <label
                    for="my-modal-4"
                    className="cursor-pointer block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
                  >
                    Show Details
                  </label>
                </a>
              </div>
            </div>

            
          </div>
        </div>
      </div>
      {/* <!-- Products --> */}

      <div className="p-20">
        <div className="flex flex-col items-center text-center justify-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-5xl">
            We deal in
          </h2>

          <div className="">
            <span className="inline-block w-40 h-1 bg-[#FBD46D] rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-[#FBD46D] rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-[#FBD46D] rounded-full"></span>
          </div>
        </div>
        <section className="flex justify-center items-center gap-12">
          <div
            className="w-32 flex justify-center items-center my-auto"
            loading="lazy"
          >
            <img
              className="aspect-square object-contain"
              src="https://www.venusohs.com/wp-content/uploads/2023/01/cropped-VENUS-LOGO-New-1.jpg"
            />
          </div>
          <div
            className="w-32 flex justify-center items-center my-auto"
            loading="lazy"
          >
            <img
              className="aspect-square object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Stanley_Hand_Tools_logo.svg/2560px-Stanley_Hand_Tools_logo.svg.png"
            />
          </div>
          <div
            className="w-32 flex justify-center items-center my-auto"
            loading="lazy"
          >
            <img
              className="aspect-square object-contain"
              src="https://logos-world.net/wp-content/uploads/2020/08/Bosch-Logo.png"
            />
          </div>
          <div
            className="w-32 flex justify-center items-center my-auto"
            loading="lazy"
          >
            <img
              className="aspect-square object-contain"
              src="https://play-lh.googleusercontent.com/5AfibCNOZQmDu3FowNKlN5AtCvXNK6vuZDn9ju98htt4RQGclKv0lFXCE-Mv9q7YbQ=w600-h300-pc0xffffff-pd"
            />
          </div>
          <div
            className="w-32 flex justify-center items-center my-auto"
            loading="lazy"
          >
            <img
              className="aspect-square object-contain"
              src="https://seeklogo.com/images/T/taparia-logo-31FDB5AD69-seeklogo.com.png"
            />
          </div>
        </section>
      </div>
      {/* <!-- MODAL  --> */}
    </div>
  );
};

export default GeneralConsumable;
