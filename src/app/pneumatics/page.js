"use client";
import React from "react";
import { useEffect } from "react";
import Banner from "@/components/Banner";

const Pneumatic = () => {
  return (
    <div>
      <Banner title={"Pneumatics"} img={"/PneumaticBanner.jpg"} />

      {/* <!-- Products --> */}
      <div class=" my-10">
        <div class="mx-auto max-w-xl text-center my-10">
          <h2 class="text-3xl tex-[#07031A] font-bold sm:text-5xl">
            Pneumatics
          </h2>

          <p class="mt-4 text-[#4F8A8B] max-w-lg mx-auto">
            A pneumatic hose and tube distribute compressed air to components
            within a system, such as valves and actuators. Industrial plants and
            manufacturing facilities rely on pneumatic equipment.
          </p>
        </div>

        <div
          class="flex flex-wrap justify-center my-10 gap-10 px-10 sm:px-0"
          id="products"
        >
          {/* <!-- Product-1 --> */}
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic1">
            <img
              src="/Products/pneumatic_hoses.jpg"
              alt="Pnuematic Hoses"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Pneumatics
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Pnuematic Hoses
              </h3>

              <div class="flex justify-between items-center">
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-4"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic3">
            <img
              src="/Products/one-touch-fittings.jpg"
              alt="One Touch Fittings"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Pneumatics
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                One Touch Fittings
              </h3>

              <div class="flex justify-between items-center">
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-4"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic3">
            <img
              src="/Products/Pneumatic-Fittings.jpg"
              alt="Pneumatic Fittings"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Pneumatics
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Pneumatic Fittings
              </h3>

              <div class="flex justify-between items-center">
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-4"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic3">
            <img
              src="/Products/pneumatic-tools.webp"
              alt="Pneumatic Tools"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Pneumatics
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Pneumatic Tools
              </h3>

              <div class="flex justify-between items-center">
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-4"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic3">
            <img
              src="/Products/frl-unit.jpeg"
              alt="FRL Unit"
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Pneumatics
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">FRL Unit</h3>

              <div class="flex justify-between items-center">
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-4"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic3">
            <img
              src="/Products/air-filter-regulators.webp"
              alt="Air Filter Regulators"
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Pneumatics
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Air Filter Regulators
              </h3>

              <div class="flex justify-between items-center">
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-4"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic3">
            <img
              src="/Products/Pneumatic-Cylinders.webp"
              alt="Pneumatic Cylinders"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Pneumatics
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Pneumatic Cylinders
              </h3>

              <div class="flex justify-between items-center">
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-4"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic3">
            <img
              src="/Products/manifolds.webp"
              alt="Manifold"
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Pneumatics
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">Manifold</h3>

              <div class="flex justify-between items-center">
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-4"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic3">
            <img
              src="/Products/hand-lever-valve.jpg"
              alt="Hand Lever Valves"
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Pneumatics
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Hand Lever Valves
              </h3>

              <div class="flex justify-between items-center">
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-4"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic3">
            <img
              src="/Products/solenoid-valves.png"
              alt="Solenoid Valves"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Pneumatics
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Solenoid Valves
              </h3>

              <div class="flex justify-between items-center">
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-4"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic3">
            <img
              src="/Products/Stainless-Steel-Pipe-Fittings.webp"
              alt="Lubrication Fitting"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Pneumatics
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Lubrication Fittings
              </h3>

              <div class="flex justify-between items-center">
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-4"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic3">
            <img
              src="/Products/nylon-tubes.png"
              alt="Nylon Tubes"
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Pneumatics
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Lubrication & Nylon Tubes
              </h3>

              <div class="flex justify-between items-center">
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-4"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Products --> */}

      <div class="p-20">
        <div class="flex flex-col items-center text-center justify-center mb-10">
          <h2 class="text-2xl font-semibold text-gray-800 capitalize lg:text-5xl">
            We deal in
          </h2>

          <div class="">
            <span class="inline-block w-40 h-1 bg-[#FBD46D] rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-[#FBD46D] rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-[#FBD46D] rounded-full"></span>
          </div>
        </div>
        <section class=" flex justify-center items-center sm-flex-col">
          <div class="w-40 mr-5 my-auto">
            <img
              loading="lazy"
              class="aspect-square object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Janatics_Pneumatics_logo.png"
            />
          </div>
          <div class="w-40 ml-5 my-auto">
            <img
              loading="lazy"
              class="aspect-square object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Logo_SMC_Corporation.svg/1200px-Logo_SMC_Corporation.svg.png"
            />
          </div>
          <div class="w-40 ml-5 my-auto">
            <img
              loading="lazy"
              class="aspect-square object-contain"
              src="https://www.liblogo.com/img-logo/fe6844fd7b-festo-logo-festo-automation-pneumatic-amp-electrical-automation--automation.png"
            />
          </div>
          <div class="w-40 ml-5 my-auto">
            <img
              loading="lazy"
              class="aspect-square object-contain"
              src="/Brands/legris-logo.png"
            />
          </div>
          <div class="w-40 ml-5 my-auto">
            <img
              loading="lazy"
              class="aspect-square object-contain"
              src="/Brands/spac-logo.png"
            />
          </div>
          <div class="w-40 ml-5 my-auto">
            <img
              loading="lazy"
              class="aspect-square object-contain"
              src="/Brands/stnc-logo.png"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pneumatic;
