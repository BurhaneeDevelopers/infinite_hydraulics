"use client";
import React from "react";
import { useEffect } from "react";
import Banner from "@/components/Banner";

const HydraulicPumps = () => {
  return (
    <div>
      <Banner title={"Hydraulic Pumps"} img={"/banner.jpg"} />
      {/* <!-- Products --> */}
      <div class="my-10">
        <div class="mx-auto max-w-xl text-center my-10">
          <h2 class="text-3xl tex-[#07031A] font-bold sm:text-5xl">
            Hydraulic Pumps
          </h2>

          <p class="mt-4 text-[#4F8A8B] max-w-lg mx-auto">
            Hydraulics are used extensively in the automotive industry for
            everything from braking systems to power steering. However, they are
            also used in construction equipment, manufacturing machinery and
            aircraft.
          </p>
        </div>

        <div
          class="flex flex-wrap justify-center my-10 gap-10 px-10 sm:px-0"
          id="products"
        >
          {/* <!-- Product-1 --> */}
          <div class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic1">
            <img
              src="/Products/vane-pump.webp"
              alt="Vane Pumps"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Category
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">Vane Pumps</h3>

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
              src="/Products/gear-pump.webp"
              alt="Gear Pumps"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Category
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">Gear Pumps</h3>

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
              src="/Products/Hand-pump.jpg"
              alt="Hand Pumps"
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Category
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">Hand Pumps</h3>

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
              src="/Products/hydraulic-radial-piston-pump.jpeg"
              alt="Radial Piston Pumps"
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Category
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Radial Piston Pumps
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
              src="/Products/high-pressure-single-vane-pumps.webp"
              alt="High Pressure Vane Pumps"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Category
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                High Pressure Vane Pumps
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
              src="/Products/axial-piston-pump.webp"
              alt="Axial Piston Pumps"
              class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
            />
            <div class="relative bg-white p-6">
              <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                Category
              </span>

              <h3 class="mt-4 text-lg font-medium text-gray-900">
                Axial Piston Pumps
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

        <section class="justify-center items-center">
          <marquee behavior="scroll" direction="horizontal" scrollamount="20">
            <div class="flex gap-12">
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
                class="w-40 object-contain"
                src="https://logos-world.net/wp-content/uploads/2020/08/Bosch-Logo.png"
              />

              <img
                loading="lazy"
                class="w-40 object-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Logo_of_Bosch_Rexroth_AG.svg/1200px-Logo_of_Bosch_Rexroth_AG.svg.png"
              />

              <img
                loading="lazy"
                class="w-40 object-contain"
                src="https://ashishhydraulics.com/admin_panel/admin/product_images/Pumps_17-07_dowty.jpg"
              />

              <img
                loading="lazy"
                class="w-40 object-contain"
                src="https://yuken-usa.com/wp-content/uploads/2021/11/YukenTranspar.gif"
              />

              <img
                loading="lazy"
                class="w-40 object-contain"
                src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1405592987/aensyztb87zhbvqsum01.png"
              />
            </div>
          </marquee>
        </section>
      </div>
    </div>
  );
};

export default HydraulicPumps;
