"use client";
import React from "react";
import { useEffect } from "react";
import Banner from "@/components/Banner";

const HydraulicsEquipments = () => {
  return (
    <div>
      <Banner
        title={"Hydraulic Equipments"}
        img={"/hydraulicsequipments.jpg"}
      />

      {/* <!-- Products --> */}
      <div className="my-10">
        <div className="mx-auto max-w-xl text-center my-10">
          <h2 className="text-3xl tex-[#07031A] font-bold sm:text-5xl">
            Hydraulic Equipments
          </h2>

          <p className="mt-4 text-[#4F8A8B] max-w-lg mx-auto">
            Hydraulic systems consist of numerous items, including the Hydraulic
            Floor Jack, Hydraulic Bottle Jack, Hydraulic Powerpack and many
            more. The design of these components often varies to fit the
            complexity of hydraulic system applications.
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center my-10 gap-10 px-10 sm:px-0"
          id="products"
        >
          {/* <!-- Product-1 --> */}
          <div className="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic1">
            <img
              src="/Products/floor-jack.webp"
              alt="Hydraulic Floor Jack"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Equipments
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Hydraulic Floor Jack
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
                  href="/Catalogue.pdf#page=21"
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
              src="/Products/hydraulic-botle-jack.webp"
              alt="Hydraulic Bottle Jack"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Equipments
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Hydraulic Bottle Jack
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
                  href="/Catalogue.pdf#page=21"
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
              src="/Products/hydraulic-powerpack.webp"
              alt="Hydraulic Powerpack"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Equipments
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Hydraulic Powerpack
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
                  href="/Catalogue.pdf#page=21"
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
              src="/Products/hydraulic-hand-pump.jpg"
              alt="Hydraulic Powerpack"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Equipments
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Hydraulic Hand Operated Pumps
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
                  href="/Catalogue.pdf#page=21"
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
              src="/Products/hydraulic-filters.jpeg"
              alt="Hydraulic Powerpack"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Equipments
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Hydraulic Filters
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
                  href="/Catalogue.pdf#page=22"
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
              src="/Products/hydraulic-cylinders.avif"
              alt="Hydraulic Powerpack"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Equipments
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Hydraulic Cylinders
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
                  href="/Catalogue.pdf#page=22"
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
              src="/Products/hose-crimping-machine.webp"
              alt="Hydraulic Crimping Machine"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Equipments
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Crimping Machine
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
                  href="/Catalogue.pdf#page=22"
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

          <div className="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic AgriHose">
            <img
              src="../Products/Hydraulic-Hose-Protective-Sleeves.jpg"
              alt="Hose Protective Sleeves"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Equipments
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900 heading">
                Hose Protective Sleeves
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
                  href="/Catalogue.pdf#page=22"
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

          <div className="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic AgriHose">
            <img
              src="../Products/Penta-Hand-Operated-Grease-Dispensers.jpg"
              alt="Whip Check Arrestor"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Equipments
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900 heading">
                Hand Operated Grease Dispensers
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
                  href="/Catalogue.pdf#page=23"
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

          <div className="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic AgriHose">
            <img
              src="../Products/Penta-Pneumatic-Barrel-Oil-Pump.webp"
              alt="Whip Check Arrestor"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Equipments
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900 heading">
                Pneumatic Barrel Oil Pump
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
                  href="/Catalogue.pdf#page=23"
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

          <div className="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic AgriHose">
            <img
              src="../Products/penta-axle-stand.jpg"
              alt="Whip Check Arrestor"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Equipments
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900 heading">
                Axle Stand
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
                  href="/Catalogue.pdf#page=23"
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

          <div className="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic AgriHose">
            <img
              src="../Products/penta-foam-sprayer.jpg"
              alt="Whip Check Arrestor"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Equipments
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900 heading">
                Foam Sprayer
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
                  href="/Catalogue.pdf#page=23"
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

          <div className="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic AgriHose">
            <img
              src="../Products/hydraulic-whip-checks.webp"
              alt="Whip Check Arrestor"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Equipments
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900 heading">
                Whip Check Arrestor
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
                  href="/Catalogue.pdf#page=24"
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

          <div className="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic AgriHose">
            <img
              src="../Products/spiral-sleeves.jpg"
              alt="Whip Check Arrestor"
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div className="relative bg-white p-6">
              <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Hydraulic Equipments
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900 heading">
                Spiral Sleeves
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
                  href="/Catalogue.pdf#page=24"
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

        <section className="flex justify-center items-center">
          {/* <!-- <marquee behavior="scroll" direction="horizontal" scrollamount="20"> --> */}
          <div className="flex gap-12 justify-center items-center sm-flex-col">
            <img
              loading="lazy"
              className="w-40 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Parker.svg/1200px-Parker.svg.png"
            />

            <img
              loading="eager"
              className="w-40 object-contain"
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTu4pJh4hEZ6Eth90hNExq_m-DjwsUWqoseD0ZmerxMpn_oC9Nc&psig=AOvVaw1CX-geekT0fAiY3gWTrjcD&ust=1686335128149000&source=images&cd=vfe&ved=2ahUKEwjm-8aDprT_AhVVitgFHSzOCAoQr4kDegUIARDKAQ"
            />

            <img
              loading="eager"
              className="w-40 object-contain"
              src="https://www.donaldson.com/content/dam/donaldson/shared-assets/brands-logos/Donaldson-Logo-Horizontal-Reversed.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg"
            />

            <img
              loading="eager"
              className="w-40 object-contain"
              src="/Brands/man-logo.png"
            />

            <img
              loading="eager"
              className="w-40 object-contain"
              src="/Brands/catterpillar.png"
            />

            <img
              loading="eager"
              className="w-40 object-contain"
              src="/Brands/penta-logo.png"
            />
          </div>
          {/* <!-- </marquee> --> */}
        </section>
      </div>

      {/* <!-- Products --> */}
    </div>
  );
};

export default HydraulicsEquipments;
