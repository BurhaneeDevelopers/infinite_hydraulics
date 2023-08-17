"use client";
import React from "react";
import { useEffect } from "react";
import Banner from "@/components/Banner";

const IndustrialValves = () => {
  return (
    <div>
      <Banner title={"Industrial Valves"} img={"/IndustrialValveBanner.jpg"} />

      {/* <!-- Products --> */}
      <div className="my-10">
        <div className="mx-auto max-w-xl text-center my-10">
          <h2 className="text-3xl tex-[#07031A] font-bold sm:text-5xl">
            Industrial Valves
          </h2>

          <p className="mt-4 text-[#4F8A8B] max-w-lg mx-auto">
            Industrial valves are devices that are used to regulate liquids,
            gases, and slurries. The flow of liquids or gases can be controlled
            using these valves. This can be done through pipes and other
            passageways by opening, closing, and partially obstructing the
            passageway or pipe.
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center my-10 gap-10 px-10 sm:px-0"
          id="products"
        >
          {/* <!-- Product-1 --> */}
          <div className="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic1">
            <img
              src="/Products/high-pressure-ball-valve.jpg"
              alt="High Pressure Ball Valves"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Industrial Valves
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                High Pressure Ball Valves
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
                  href="/Catalogue.pdf#page=31"
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
              src="/Products/cylinderValves.jpg"
              alt="Cylinders Valve"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Industrial Valves
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Cylinders Valve
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
                  href="/Catalogue.pdf#page=31"
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

          <div className="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic1">
            <img
              src="/products/monoblock-valves.jpg"
              alt="Monoblock Valves"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Industrial Valves
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Monoblock Valves
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
                  href="/Catalogue.pdf#page=31"
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
              src="/Products/industrial-valves.webp"
              alt="Gate Valves"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Industrial Valves
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Gate Valves
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
                  href="/Catalogue.pdf#page=31"
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
              src="/Products/ball-valves.webp"
              alt="Ball Valves - Screwed End"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Industrial Valves
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Ball Valves - Screwed End
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
                  href="/Catalogue.pdf#page=32"
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
              src="/Products/flange-end-ball-valvejpeg.jpeg"
              alt="Ball Valves - Flange End"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Industrial Valves
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Ball Valves - Flange End
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
                  href="/Catalogue.pdf#page=32"
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
              src="/Products/butterfly-valves.jpg"
              alt="Butterfly Valves"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Industrial Valves
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Butterfly Valves
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
                  href="/Catalogue.pdf#page=32"
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
              src="/Products/Pneumatic-Rotary-Actuator-Valves.webp"
              alt="Pneumatic Rotary Actuator Valves"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Industrial Valves
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Pneumatic Rotary Actuator Valves
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
                  href="/Catalogue.pdf#page=32"
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
              src="/Products/check-valve-wafer-type.webp"
              alt="Wafer Type Check Valves"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Industrial Valves
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Wafer Type Check Valves
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
                  href="/Catalogue.pdf#page=33"
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
              src="/Products/non-return-valves.webp"
              alt=" Non Return Valves"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Industrial Valves
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Non Return Valves
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
                  href="/Catalogue.pdf#page=33"
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
              src="/Products/strainers.jpg"
              alt="Strainers"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Industrial Valves
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Strainers
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
                  href="/Catalogue.pdf#page=33"
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

      {/* <!--  lycris-parker Astin abcon--> */}

      <div className="sm:pb-10 sm:px-10 md:px-20 md:pb-20 p-5">
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

        <section className="justify-center items-center">
          <marquee behavior="scroll" direction="horizontal" scrollamount="20">
            <div className="flex gap-12">
              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://polyhydron.com/pplimage_misc/Logo%20Foundation.png"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Logo_of_Bosch_Rexroth_AG.svg/1200px-Logo_of_Bosch_Rexroth_AG.svg.png"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://airautomation.com/wp-content/uploads/2020/11/Nitto-Kohki-Logo.png"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://yuken-usa.com/wp-content/uploads/2021/11/YukenTranspar.gif"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="holmbury.com/app/themes/holmbury/images/logo.svg"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://gumlet.assettype.com/swarajya%2F2020-07%2F84c2ca1f-cb6d-4267-a146-d901693d57c4%2FL_T.jpg?q=75&auto=format%2Ccompress&w=400&dpr=2.6"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvf5lD5rjyaVZPCN2svtxahdFU4AK6_9aCelJIFd8zNKRZ9JtukX4LF1EKGJc4leoRJxA"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.austin-ind.com%2F&psig=AOvVaw0md_8cm7-IrkGYVuapVrPW&ust=1686374146954000&source=images&cd=vfe&ved=0CBEQjRxqGAoTCIj-_bG3tf8CFQAAAAAdAAAAABCCAQ"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://www.indusroof.com/pub/media/codazon_cache/brand/250x/wysiwyg/codazon/main-content-05/brand/zoloto-logo.png"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/eagu04ajvdtm6drkx09t"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Parker.svg/1200px-Parker.svg.png"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FAbconIndProd%2F&psig=AOvVaw0IOJhIwR8DVfY80sNK4tnz&ust=1686374019776000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMjAjfW2tf8CFQAAAAAdAAAAABAE"
              />
            </div>
          </marquee>
        </section>
      </div>
    </div>
  );
};

export default IndustrialValves;
