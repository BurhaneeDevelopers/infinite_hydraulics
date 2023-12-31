"use client";
import React from "react";
import { useEffect } from "react";
import Banner from "@/components/Banner";

const PipesTubes = () => {
  return (
    <div>
      <Banner title={"Pipes & Tubes"} img={"/PTBanner.jpg"} />

      {/* <!-- Products --> */}
      <div className="my-10">
        <div className="mx-auto max-w-xl text-center my-10">
          <h2 className="text-3xl tex-[#07031A] font-bold sm:text-5xl">
            Pipes & Tubes
          </h2>

          <p className="mt-4 text-[#4F8A8B] max-w-lg mx-auto">
            pipes are pressure rated and intended to be used for the
            transference of fluids or gas. Tubes, on the other hand, are used in
            structural applications
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center my-10 gap-10 px-10 sm:px-0"
          id="products"
        >
          {/* <!-- Product-1 --> */}
          <div className="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic1">
            <img
              src="/Products/Hydraulic-Seamless-Pipes.jpg"
              alt="Adapters"
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Pipes & Tubes
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Hydraulic Seemless Pipe
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
                  href="/Catalogue.pdf#page=35"
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
              src="/Products/Heavy-Pressure-PVC-Pipes.jpg"
              alt=""
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Pipes & Tubes
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                PVC / CPVC / UPVC Pipes
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
                  href="/Catalogue.pdf#page=35"
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
              src="/Products/ss-pipes.jpg"
              alt=""
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Pipes & Tubes
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                MS/SS Pipes
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
                  href="/Catalogue.pdf#page=35"
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
        </div>
      </div>
      {/* <!-- Products --> */}

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
          {/* <!-- <marquee behavior="scroll" direction="horizontal" scrollamount="20"> --> */}
          <div className="flex gap-12 justify-center items-center sm-flex-col">
            <img
              loading="lazy"
              className="w-40 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/2231px-Tata_logo.svg.png"
            />

            <img
              loading="lazy"
              className="w-40 object-contain"
              src="https://www.supreme.co.in/dist/img/logo.png"
            />
            <img
              loading="lazy"
              className="w-40 object-contain"
              src="/Brands/Jindal_logo_and_steel_power.jpg"
            />

            <img
              loading="lazy"
              className="w-40 object-contain"
              src="/Brands/ashirvad-logo.png"
            />

            <img
              loading="lazy"
              className="w-40 object-contain"
              src="/Brands/astral-logo.png"
            />
          </div>
          {/* <!-- </marquee>
         --> */}
        </section>
      </div>
    </div>
  );
};

export default PipesTubes;
