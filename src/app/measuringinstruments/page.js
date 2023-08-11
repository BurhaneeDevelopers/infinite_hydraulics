"use client";
import React from "react";
import { useEffect } from "react";
import Banner from "@/components/Banner";

const MeasuringInstruments = () => {
  return (
    <div>
      <Banner
        title={"Measuring Instruments"}
        img={"/measuringInstruments.jpg"}
      />

      {/* <!-- Products --> */}
      <div class="my-10">
        <div class="mx-auto max-w-xl text-center my-10">
          <h2 class="text-3xl tex-[#07031A] font-bold sm:text-5xl">
            Measuring Instruments
          </h2>

          <p class="mt-4 text-[#4F8A8B] max-w-lg mx-auto">
            Measuring Instruments are useful for measuring the physical quantity
            of real-world objects and events. They are applicable for various
            sectors like physical science, quality assurance, and engineering.
            Electrical, electronic and mechanical are different types of
            measuring instruments.We deal in different types of Measuring
            Instruments
          </p>
        </div>

        <div
          class="flex flex-wrap justify-center my-10 gap-10 px-10 sm:px-0"
          id="products"
        >
          {/* <!-- Product-1 --> */}
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic1">
            <img
              src="/Products/vernier-calipers.jpg"
              alt="Adapters"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Measuring Instruments
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Pressure & Temperature Gauge
              </h3>

              <div class="flex justify-between items-center">
                <a href="#" class="mt-1.5 text-sm text-indigo-700 underline">
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
              src="/Products/dial-indicator.jpg"
              alt=""
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Measuring Instruments
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Oil Level Indicator
              </h3>

              <div class="flex justify-between items-center">
                <a href="#" class="mt-1.5 text-sm text-indigo-700 underline">
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
              src="/Products/vernier-calipers.jpg"
              alt="Adapters"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Measuring Instruments
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Vernier Calipers
              </h3>

              <div class="flex justify-between items-center">
                <a href="#" class="mt-1.5 text-sm text-indigo-700 underline">
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
          {/* <!-- Product-1 --> */}

          {/* <!-- Product-2 --> */}
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic2">
            <img
              src="/Products/dial-vernier-callipers.jpg"
              alt=""
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Measuring Instruments
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Digital Vernier Calipers
              </h3>

              <div class="flex justify-between items-center">
                <a href="#" class="mt-1.5 text-sm text-indigo-700 underline">
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
          {/* <!-- Product-2 --> */}

          {/* <!-- Product-3 --> */}
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic3">
            <img
              src="/Products/height-gauge.jfif"
              alt=""
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Measuring Instruments
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Height Gauge
              </h3>

              <div class="flex justify-between items-center">
                <a href="#" class="mt-1.5 text-sm text-indigo-700 underline">
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
          {/* <!-- Product-3 --> */}

          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic3">
            <img
              src="/Products/outside-micrometer.jpg"
              alt=""
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Measuring Instruments
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Outside Micrometer
              </h3>

              <div class="flex justify-between items-center">
                <a href="#" class="mt-1.5 text-sm text-indigo-700 underline">
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
              src="/Products/magnetic-stand.jpg"
              alt=""
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Measuring Instruments
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Magnetic Stand
              </h3>

              <div class="flex justify-between items-center">
                <a href="#" class="mt-1.5 text-sm text-indigo-700 underline">
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
              src="/Products/baumer-pressure-gauges.webp"
              alt=""
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Measuring Instruments
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Pressure Gauge
              </h3>

              <div class="flex justify-between items-center">
                <a href="#" class="mt-1.5 text-sm text-indigo-700 underline">
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
              src="/Products/clamp-meter.jpeg"
              alt=""
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Measuring Instruments
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Clamp Meter
              </h3>

              <div class="flex justify-between items-center">
                <a href="#" class="mt-1.5 text-sm text-indigo-700 underline">
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
              src="/Products/multimeter.webp"
              alt=""
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Measuring Instruments
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">Multimeter</h3>

              <div class="flex justify-between items-center">
                <a href="#" class="mt-1.5 text-sm text-indigo-700 underline">
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
          <div class="flex gap-12 justify-center items-center sm-flex-col">
            <img
              loading="lazy"
              class="w-40 object-contain"
              src="https://yuken-usa.com/wp-content/uploads/2021/11/YukenTranspar.gif"
            />

            <img
              class="w-40 object-contain"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LW2g4vlJFvAsOCJfoVkiJwyDniCDwbXwF5FWEZGejgeZ0idgdK7jvdMZudvMMQSUGCw&usqp=CAU"
            />

            <img class="w-40 object-contain" src="/Brands/meco.png" />

            <img
              class="w-40 object-contain"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjOHxIDgP2wIpCDQNChZunyu6B1B0wKx4a6UP1OrLJzbxReTht1y1J4bNprI9ycs-Vg&usqp=CAU"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MeasuringInstruments;
