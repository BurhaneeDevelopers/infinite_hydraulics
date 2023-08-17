"use client";
import React from "react";
import { useEffect } from "react";
import Banner from "@/components/Banner";

const HydraulicHoses = () => {
  const handleFilter = (tag) => {
    const cards = document.querySelectorAll("#products .hydraulic");
    cards.forEach((card) => {
      if (tag === "all" || card.classList.contains(tag)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  };
  return (
    <div>
      <Banner title={"Hydraulic Hoses"} img={"/banner.jpg"} />

      {/* <!-- Products --> */}
      <div class="my-10">
        <div class="mx-auto max-w-xl text-center my-10">
          <h2 class="text-3xl tex-[#07031A] font-bold sm:text-5xl">
            Hydraulic Hoses
          </h2>

          <p class="mt-4 text-[#4F8A8B] max-w-lg mx-auto">
            A hydraulic hose is a specialist type of hose that you&apos;ll find in
            many commercial and industrial settings. Hydraulic hoses are
            typically constructed from flexible rubber or wire, and feature a
            series of layers to give the hose its strength and durability.
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-2">
          <button
            class="p-4 px-8 bg-gray-300 rounded-xl text-lg"
            onClick={() => handleFilter("all")}
          >
            All
          </button>
          <button
            class="p-4 px-8 bg-gray-200 rounded-md lg:text-lg md:w-1/5 lg:w-1/6"
            onClick={() => handleFilter("RubberHose")}
          >
            Rubber Hoses
          </button>
          <button
            class="p-4 px-8 bg-gray-200 rounded-md lg:text-lg md:w-1/5 lg:w-1/6"
            onClick={() => handleFilter("HighPressureHose")}
          >
            HP Spiral Hoses
          </button>
          <button
            class="p-4 px-8 bg-gray-200 rounded-md lg:text-lg md:w-1/5 lg:w-1/6"
            onClick={() => handleFilter("WaterHose")}
          >
            Water Blast Hoses
          </button>
          <button
            class="p-4 px-8 bg-gray-200 rounded-md lg:text-lg md:w-1/5 lg:w-1/6"
            onClick={() => handleFilter("ThermoHose")}
          >
            Thermo Plastic Hoses
          </button>
          <button
            class="p-4 px-8 bg-gray-200 rounded-md lg:text-lg md:w-1/5 lg:w-1/6"
            onClick={() => handleFilter("ChemicalHose")}
          >
            Chemical Hoses
          </button>
          <button
            class="p-4 px-8 bg-gray-200 rounded-md lg:text-lg md:w-1/5 lg:w-1/6"
            onClick={() => handleFilter("CompositeHose")}
          >
            Composite Hoses
          </button>
          <button
            class="p-4 px-8 bg-gray-200 rounded-md lg:text-lg md:w-1/5 lg:w-1/6"
            onClick={() => handleFilter("TeflonHose")}
          >
            SS Teflon Hoses
          </button>
          <button
            class="p-4 px-8 bg-gray-200 rounded-md lg:text-lg md:w-1/5 lg:w-1/6"
            onClick={() => handleFilter("BelowHose")}
          >
            SS Below Hoses
          </button>
          <button
            class="p-4 px-8 bg-gray-200 rounded-md lg:text-lg md:w-1/5 lg:w-1/6"
            onClick={() => handleFilter("IndustrialHose")}
          >
            Industrial Hoses
          </button>
          <button
            class="p-4 px-8 bg-gray-200 rounded-md lg:text-lg md:w-1/5 lg:w-1/6"
            onClick={() => handleFilter("AgriHose")}
          >
            Agricultural Hoses
          </button>
        </div>

        <div
          class="flex flex-wrap justify-center my-10 gap-10 px-10 sm:px-0"
          id="products"
        >
          {/* <!-- Product-1 --> */}
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic RubberHose">
            <img
              src="../Products/Hoses/RubberHose_Hydraulic.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                R1 Rubber Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <a
                  href="/Catalogue/IHS-Catalogue.pdf#page=01"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Product-1 --> */}

          {/* <!-- Product-2 --> */}
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic RubberHose">
            <img
              src="../Products/Hoses/R2_RubberHose.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                R2 Rubber Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <a
                  href="/Catalogue/IHS-Catalogue.pdf#page=01"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Product-2 --> */}

          {/* <!-- Product-3 --> */}
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic RubberHose">
            <img
              src="../Products/Hoses/SlimPilot_Hose.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Slim Pilot Rubber Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <a
                  href="/Catalogue/IHS-Catalogue.pdf#page=01"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Product-3 --> */}
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic RubberHose">
            <img
              src="../Products/Hoses/09Series_RubberHose.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                09 Series Rubber Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <a
                  href="/Catalogue/IHS-Catalogue.pdf#page=01"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </a>
              </div>
            </div>
          </div>
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic RubberHose">
            <img
              src="../Products/Hoses/R5_RubberHose_Hydraulic_PH146.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                R5 Rubber Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <a
                  href="/Catalogue/IHS-Catalogue.pdf#page=01"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </a>
              </div>
            </div>
          </div>
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic RubberHose">
            <img
              src="../Products/Hoses/R5CXT_RubberHose_Hydraulic_PH186.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                R5C Rubber Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <a
                  href="/Catalogue/IHS-Catalogue.pdf#page=01"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </a>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic RubberHose">
            <img
              src="../Products/Hoses/R3_RubberHose_Hydraulic_PH150.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                R3 Rubber Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <a
                  href="/Catalogue/IHS-Catalogue.pdf#page=01"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </a>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic RubberHose">
            <img
              src="../Products/Hoses/R6_RubberHose_Hydraulic_PH147.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                R6 Rubber Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <a
                  href="/Catalogue/IHS-Catalogue.pdf#page=01"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </a>
              </div>
            </div>
          </div>

          {/* <!-- High Pressure Hoses --> */}
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic HighPressureHose">
            <img
              src="../Products/Hoses/R12_RubberHose_Hydraulic_PH177.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                R12 High Pressure Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <a
                  href="/Catalogue/IHS-Catalogue.pdf#page=01"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </a>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic HighPressureHose">
            <img
              src="../Products/Hoses/R13_RubberHose_Hydraulic_PH178.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                R13 High Pressure Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <a
                  href="/Catalogue/IHS-Catalogue.pdf#page=01"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </a>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic HighPressureHose">
            <img
              src="../Products/Hoses/R15_RubberHose_Hydraulic_PH279.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                R15 High Pressure Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <a
                  href="/Catalogue/IHS-Catalogue.pdf#page=01"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </a>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic HighPressureHose">
            <img
              src="../Products/Hoses/4SP_RubberHose_Hydraulic_PH277.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                4SP High Pressure Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <a
                  href="/Catalogue/IHS-Catalogue.pdf#page=01"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </a>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic HighPressureHose">
            <img
              src="../Products/Hoses/4SH_RubberHose_Hydraulic_PH278.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                4SH High Pressure Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <a
                  href="/Catalogue/IHS-Catalogue.pdf#page=01"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Water Blast Hoses --> */}

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic WaterHose">
            <img
              src="../Products/Hoses/30K_WaterBlast_RubberHose_Hydraulic_PH280.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                30K Water Blast Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <a
                  href="/Catalogue/IHS-Catalogue.pdf#page=01"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </a>
              </div>
            </div>
          </div>
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic WaterHose">
            <img
              src="../Products/Hoses/40K_WaterBlast_RubberHose_Hydraulic_PH281.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                40K Water Blast Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <a
                  href="/Catalogue/IHS-Catalogue.pdf#page=01"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </a>
              </div>
            </div>
          </div>
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic WaterHose">
            <img
              src="../Products/Hoses/45K_WaterBlast_RubberHose_Hydraulic_PH282.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                45K Water Blast Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <a
                  href="/Catalogue/IHS-Catalogue.pdf#page=01"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </a>
              </div>
            </div>
          </div>
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic WaterHose">
            <img
              src="../Products/Hoses/50K_WaterBlast_RubberHose_Hydraulic_PH283.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                50K Water Blast Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <a
                  href="/Catalogue/IHS-Catalogue.pdf#page=01"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Thermo Plastic Hoses --> */}
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic ThermoHose">
            <img
              src="../Products/Hoses/R1_THERMOPLASTIC_HYDRAULIC_PH348.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                R1 Thermo Plastic Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic ThermoHose">
            <img
              src="../Products/Hoses/R2_THERMOPLASTIC_HYDRAULIC_PH349.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                R2 Thermo Plastic Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic ThermoHose">
            <img
              src="../Products/Hoses/R7_THERMOPLASTIC_HYDRAULIC_PH148.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                R7 Thermo Plastic Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic ThermoHose">
            <img
              src="../Products/Hoses/R8_THERMOPLASTIC_HYDRAULIC_PH149.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                R8 Thermo Plastic Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic ThermoHose">
            <img
              src="../Products/Hoses/JackHose_THERMOPLASTIC_INDUSTRIAL_PH350.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Jack Thermo Plastic Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic ThermoHose">
            <img
              src="../Products/Hoses/PaintSpray_THERMOPLASTIC_INDUSTRIAL_PH342.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">Paint Hose</h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic ThermoHose">
            <img
              src="../Products/Hoses/GreenPaint_THERMOPLASTIC_INDUSTRIAL_PH340.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Green Teflon Paint Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic ThermoHose">
            <img
              src="../Products/Hoses/GreaseHose_THERMOPLASTIC_INDUSTRIAL_PH320.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Grease Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic ThermoHose">
            <img
              src="../Products/Hoses/Minimize-Hose.webp"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Minimize Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic ThermoHose">
            <img
              src="../Products/Hoses/CNGHose_THERMOPLASTIC_INDUSTRIAL_PH324.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                CNG Thermo Plastic Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic ThermoHose">
            <img
              src="../Products/Hoses/MoistureBlock_THERMOPLASTIC_INDUSTRIAL_PH758.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Moisture Block Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          {/* <!-- Chemical Hose --> */}
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic ChemicalHose">
            <img
              src="../Products/Hoses/XLPE_ChemicalHose_RubberHose_Industrial_PH642.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Xlpe Chemical Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic ChemicalHose">
            <img
              src="../Products/Hoses/CarbonFree_RubberHose_Industrial_PH555.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Carbon Free Chemical Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic ChemicalHose">
            <img
              src="../Products/Hoses/UHMWPE_chemicalHose_RubberHose_Industrial_PH648.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Uhmwpe Chemical Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          {/* <!-- Composite Hoses --> */}
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic CompositeHose">
            <img
              src="../Products/Hoses/TankerHose_COMPOSITE_PH802.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Tanker Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic CompositeHose">
            <img
              src="../Products/Hoses/OilHose_COMPOSITE_PH802.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">Oil Hose</h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic CompositeHose">
            <img
              src="../Products/Hoses/AviationFuelHose_COMPOSITE_PH803.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Aviation Fuel Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic CompositeHose">
            <img
              src="../Products/Hoses/DockPGHose_COMPOSITE_PH810.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Dock PG Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic CompositeHose">
            <img
              src="../Products/Hoses/OildockHose_COMPOSITE_PH811.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Oil Dock Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          {/* <!-- SS Teflon Hoses --> */}
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic TeflonHose">
            <img
              src="../Products/Hoses/R14WiredHose_Thermoplastichose_PH179.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                PTFE Teflon Hose 1wire
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic TeflonHose">
            <img
              src="../Products/Hoses/R142WiredHose_Thermoplastichose_PH381.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                PTFE Teflon Hose 2wire
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic TeflonHose">
            <img
              src="../Products/Hoses/PTFEGasHose_PH382.jpeg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                PTFE Gas Teflon Hose 2wire
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic TeflonHose">
            <img
              src="../Products/Hoses/PTFEConvulatedHose_Thermoplastichose_PH370.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Convulated Teflon Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          {/* <!-- SS Below Hoses --> */}

          {/* <!-- Industrial Hoses --> */}
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic IndustrialHose">
            <img
              src="../Products/Hoses/CompressedAirBriadedHose_RubberHose_Industrial_PH440.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Rock Drill Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic IndustrialHose">
            <img
              src="../Products/Hoses/SteamHose_RubberHose_Industrial_PH471.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">Steam Hose</h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic IndustrialHose">
            <img
              src="../Products/Hoses/OilFuelSectionDischargeHose_RubberHose_Industrial_PH611.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Oil Suction & Discharge Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic IndustrialHose">
            <img
              src="../Products/Hoses/WaterSuctiondischargeHose_RubberHose_Industrial_PH601.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Water Suction & Discharge Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic IndustrialHose">
            <img
              src="../Products/Hoses/CementPlasterHose_RubberHose_Industrial_PH621.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Cement Feeding & Discharge Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic IndustrialHose">
            <img
              src="../Products/Hoses/SandSlurryHose_RubberHose_Industrial_PH647.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Sand Blasting Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic IndustrialHose">
            <img
              src="../Products/Hoses/AirBrakeHose_RubberHose_Hydraulic_PH540.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">Brake Hose</h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>
          {/* <!-- Agriculture Hoses --> */}
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic AgriHose">
            <img
              src="../Products/Hoses/PneumaticToolHose_Thermoplastichose_PH360.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Pneumatic Tool Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic AgriHose">
            <img
              src="../Products/Hoses/SuperSprayHose_Thermoplastichose_PH361.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Super Spray Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic AgriHose">
            <img
              src="../Products/Hoses/WeldingHose_Thermoplastichose_PH362.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Welding Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic AgriHose">
            <img
              src="../Products/Hoses/AirWaterHose_Thermoplastichose_PH365.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Air / Water Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic AgriHose">
            <img
              src="../Products/Hoses/PVCBraidedHose_Thermoplastichose_PH367.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900 heading2">
                PVC Braided Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic AgriHose">
            <img
              src="../Products/Hoses/MultipurposeHose_Thermoplastichose_PH368.jpg"
              alt=""
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900 heading">
                Multipurpose Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic IndustrialHose">
            <img
              src="../Products/Hoses/Thunder-hose.webp"
              alt="Thunder Hose"
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900 heading">
                Thunder Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic IndustrialHose">
            <img
              src="../Products/Hoses/silicone-flexible-high-temperature-hose.webp"
              alt="Silicon Hose"
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900 heading">
                Silicon Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic IndustrialHose">
            <img
              src="../Products/Hoses/pu-duct-hose.webp"
              alt="PU Duct Hose"
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900 heading">
                PU Duct Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic AgriHose">
            <img
              src="../Products/Hoses/green-pvc-suction-hose.jpg"
              alt="Green Suction Hose"
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900 heading">
                Green Suction Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic BelowHose">
            <img
              src="../Products/Hoses/below-hose.webp"
              alt="SS Below Hose"
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hoses
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900 heading">
                SS Below Hose
              </h3>

              <div class="flex justify-between items-center">
                <p class="mt-1.5 text-sm text-gray-700 hidden">$14.99</p>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  class="mt-1.5 text-sm text-green-800 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Contact Us {"-->"}
                </a>
              </div>

              <div class="mt-4">
                <label
                  for="my-modal-5"
                  class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
                >
                  Show Details
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Products --> */}

      <div class="p-20 md:p-12">
        <div class="flex flex-col items-center text-center justify-center mb-10 md:mb-0">
          <h2 class="text-2xl font-semibold text-gray-800 capitalize lg:text-5xl">
            Authorised Dealer
          </h2>

          <div class="">
            <span class="inline-block w-40 h-1 bg-[#FBD46D] rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-[#FBD46D] rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-[#FBD46D] rounded-full"></span>
          </div>
        </div>
        <section class="flex justify-center items-center">
          <div class="flex justify-center items-center" loading="lazy">
            <img
              class="aspect-square object-contain"
              src="https://www.polyhose.com/wp-content/uploads/2018/05/main-logo.png"
            />
          </div>
        </section>
      </div>

      <div class="sm:pb-10 sm:px-10 md:px-20 md:pb-20 p-5">
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

        <section class="justify-center items-center">
          {/* <!-- <marquee behavior="scroll" direction="horizontal" scrollamount="20"> --> */}
          <div class="flex gap-12 justify-center items-center sm-flex-col">
            <img
              class="w-40 object-contain"
              src="https://www.manuli-hydraulics.com/wp-content/uploads/2021/05/Manuli_Hydraulics_HP_Logo-1.png"
            />

            <img
              class="w-40 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Parker.svg/1200px-Parker.svg.png"
            />

            <img
              class="w-40 object-contain"
              src="https://logos-world.net/wp-content/uploads/2022/07/Gates-Emblem.png"
            />
          </div>
          {/* <!-- </marquee> --> */}
        </section>
      </div>
    </div>
  );
};

export default HydraulicHoses;
