"use client";
import React from "react";
import { useEffect } from "react";
import Banner from "@/components/Banner";

const HydrauliFittings = () => {
  return (
    <div>
      <Banner title={"Hydraulic Fittings"} img={"/banner.jpg"} />

      {/* <!-- Products --> */}
      <div class="my-10">
        <div class="mx-auto max-w-xl text-center my-10">
          <h2 class="text-3xl tex-[#07031A] font-bold sm:text-5xl">Fittings</h2>

          <p class="mt-4 text-[#4F8A8B] max-w-lg mx-auto">
            Hydraulic fittings connect conductors such as hoses, pipes and tubes
            in a hydraulic system. Most fittings have a male and female
            component that join to form a connection. These connections help
            contain and direct the flow of hydraulic fluid in the conductor
            while preventing leaks and maintaining pressure
          </p>
        </div>

        <div
          class="flex flex-wrap justify-center my-10 gap-10 px-10 sm:px-0"
          id="products"
        >
          {/* <!-- Product-1 --> */}
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic1">
            <img
              src="/Products/Adapters.jpg"
              alt="Adapters"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Fittings
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Hydrualic Hex Nipples and Fittings
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
              src="/Products/Hydraulic-Hose-Fittings.webp"
              alt="Hydraulic Fittings"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Fittings
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Hydraulic Crimp Fittings
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
              src="/Products/sae-flanges.jpg"
              alt="Pneumatic Fittings"
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Fittings
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                SAE Flanges
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

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic1">
            <img
              src="/Products/hydraulic-pipe-clamps.webp"
              alt="Hydraulic Crimp Fittings"
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Fittings
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Pipe Clamps
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
              src="/Products/gi-pipe-fittings.webp"
              alt="Pipe Fittings"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Fittings
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Pipe Fittings
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

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic1">
            <img
              src="/Products/Test-coupling-hoses.jpg"
              alt="Hydraulic Crimp Fittings"
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Fittings
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Testing coupling & Hoses
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

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic1">
            <img
              src="/Products/hose-ss-ic-pipe-fittings.jpg"
              alt="Hose IC Fittings"
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Fittings
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Hose IC Fittings
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
              src="/Products/pipe-tube-fittings.webp"
              alt="Tube Fittings"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Fittings
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Tube Fittings
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
              src="/Products/brass-fittings.webp"
              alt="Brass Fittings"
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Fittings
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Brass Fittings
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
              src="/Products/QRC.png"
              alt="QRC"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Fittings
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Quick Release Coupler
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
              alt="SS Fittings"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Fittings
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                SS Fittings
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

        <section class="flex justify-center items-center">
          {/* <!-- <marquee behavior="scroll" direction="horizontal" scrollamount="20"> --> */}
          <div class="flex gap-12 justify-center items-center sm-flex-col">
            <img
              loading="lazy"
              class="w-40 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Parker.svg/1200px-Parker.svg.png"
            />
            <img
              loading="lazy"
              class="w-40 object-contain"
              src="https://hyloc.co.in/wp-content/uploads/2021/07/Hyloc-1.png"
            />
            <img
              loading="lazy"
              class="w-40 object-contain"
              src="https://airautomation.com/wp-content/uploads/2020/11/Nitto-Kohki-Logo.png"
            />
            <img
              loading="lazy"
              class="w-40 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Logo_of_Bosch_Rexroth_AG.svg/1200px-Logo_of_Bosch_Rexroth_AG.svg.png"
            />

            <img
              loading="lazy"
              class="w-40 object-contain"
              src="https://www.tvh.com/sites/tvh/files/2022-03/eaton%20logo.png"
            />
          </div>
          {/* <!-- </marquee> --> */}
        </section>
      </div>
    </div>
  );
};

export default HydrauliFittings;
