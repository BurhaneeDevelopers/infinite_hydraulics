"use client";
import React from "react";
import { useEffect } from "react";
import Banner from "@/components/Banner";
const Seals = () => {
  return (
    <div>
      <Banner title={"Seals"} img={"/rubberseals.jpg"} />

      {/* <!-- Products --> */}
    <div class=" my-10">
        <div class="mx-auto max-w-xl text-center my-10">
            <h2 class="text-3xl tex-[#07031A] font-bold sm:text-5xl">Seals</h2>

            <p class="mt-4 text-[#4F8A8B] max-w-lg mx-auto">
                Rubber seals prevent lubricating oil from leaking. The seals close spaces between stationary and moving parts and are vital in precision bearings.
            </p>
        </div>
        <div class="flex flex-wrap justify-center my-10 gap-10 px-10 sm:px-0" id="products">

            {/* <!-- Product-1 --> */}
            <div
                class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic1">
                <img src="/Products/piston-seal.webp" alt="Adapters"
                    class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl" />
                <div class="relative bg-white p-6">
                    <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                        Category
                    </span>

                    <h3 class="mt-4 text-lg font-medium text-gray-900">Piston Seals</h3>

                    <div class="flex justify-between items-center">
                        <a href="#" class="mt-1.5 text-sm text-indigo-700 underline">Contact Us {"-->"}</a>
                    </div>

                    <div class="mt-4">
                        <label for="my-modal-4"
                            class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105">
                            Show Details
                        </label>
                    </div>
                </div>
            </div>
            {/* <!-- Product-1 --> */}

            {/* <!-- Product-2 --> */}
            <div
                class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic2">
                <img src="/Products/metallic-oil-seals.webp" alt=""
                    class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl" />
                <div class="relative bg-white p-6">
                    <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                        Category
                    </span>

                    <h3 class="mt-4 text-lg font-medium text-gray-900">Oil seals</h3>

                    <div class="flex justify-between items-center">
                        <p class="mt-1.5 text-sm text-gray-700">$14.99</p>
                        <a href="#" class="mt-1.5 text-sm text-indigo-700 underline">Contact Us {"-->"}</a>
                    </div>

                    <div class="mt-4">
                        <label for="my-modal-4"
                            class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105">
                            Show Details
                        </label>
                    </div>
                </div>
            </div>
            {/* <!-- Product-2 --> */}

            {/* <!-- Product-3 --> */}
            <div
                class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic3">
                <img src="/Products/v-ring-seals.webp" alt=""
                    class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl" />
                <div class="relative bg-white p-6">
                    <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                        Category
                    </span>

                    <h3 class="mt-4 text-lg font-medium text-gray-900">Viton O Ring</h3>

                    <div class="flex justify-between items-center">
                        <p class="mt-1.5 text-sm text-gray-700">$14.99</p>
                        <a href="#" class="mt-1.5 text-sm text-indigo-700 underline">Contact Us {"-->"}</a>
                    </div>

                    <div class="mt-4">
                        <label for="my-modal-4"
                            class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105">
                            Show Details
                        </label>
                    </div>
                </div>
            </div>
            {/* <!-- Product-3 --> */}

            <div
                class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic3">
                <img src="/Products/rotary-shaft-seals.jpg" alt=""
                    class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl" />
                <div class="relative bg-white p-6">
                    <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                        Category
                    </span>

                    <h3 class="mt-4 text-lg font-medium text-gray-900">Shaft Seals</h3>

                    <div class="flex justify-between items-center">
                        <p class="mt-1.5 text-sm text-gray-700">$14.99</p>
                        <a href="#" class="mt-1.5 text-sm text-indigo-700 underline">Contact Us {"-->"}</a>
                    </div>

                    <div class="mt-4">
                        <label for="my-modal-4"
                            class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105">
                            Show Details
                        </label>
                    </div>
                </div>
            </div>

            <div
                class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic3">
                <img src="/Products/Hydraulic-seals.jpg" alt=""
                    class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl" />
                <div class="relative bg-white p-6">
                    <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                        Category
                    </span>

                    <h3 class="mt-4 text-lg font-medium text-gray-900">Hydraulic seals</h3>

                    <div class="flex justify-between items-center">
                        <p class="mt-1.5 text-sm text-gray-700">$14.99</p>
                        <a href="#" class="mt-1.5 text-sm text-indigo-700 underline">Contact Us {"-->"}</a>
                    </div>

                    <div class="mt-4">
                        <label for="my-modal-4"
                            class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105">
                            Show Details
                        </label>
                    </div>
                </div>
            </div>

            <div
                class="group relative overflow-hidden w-full xs:w-1/2 sm:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hydraulic hydraulic3">
                <img src="/Products/pneumatic-seals.webp" alt=""
                    class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl" />
                <div class="relative bg-white p-6">
                    <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                        Category
                    </span>

                    <h3 class="mt-4 text-lg font-medium text-gray-900">Pneumatic seals</h3>

                    <div class="flex justify-between items-center">
                        <p class="mt-1.5 text-sm text-gray-700">$14.99</p>
                        <a href="#" class="mt-1.5 text-sm text-indigo-700 underline">Contact Us {"-->"}</a>
                    </div>

                    <div class="mt-4">
                        <label for="my-modal-4"
                            class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105">
                            Show Details
                        </label>
                    </div>
                </div>
            </div>

        </div>
    </div>
    {/* <!-- Products --> */}
    </div>
  );
};

export default Seals;
