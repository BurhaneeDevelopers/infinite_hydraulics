"use client";
import React from "react";
import Link from "next/link";

import { useEffect } from "react";
const Navbar = () => {
  useEffect(() => {
    const toggleBtn = document.getElementById("toggle-nav");
    const section = document.getElementById("nav");
    const body = document.getElementsByTagName("body")[0];

    const toggleNav = () => {
      section.classList.toggle("hidden");
      body.classList.toggle("no-scroll");
    };

    const toggleBtnClose = document.getElementById("toggle-nav-close");

    const closeNav = () => {
      section.classList.toggle("hidden");
      body.classList.remove("no-scroll");
    };

    const dropBtn = document.getElementById("drop-btn");
    const dropSection = document.getElementById("drop-section");

    const toggleDropSection = () => {
      dropSection.classList.toggle("hidden");
    };

    toggleBtn.addEventListener("click", toggleNav);
    toggleBtnClose.addEventListener("click", closeNav);
    dropBtn.addEventListener("click", toggleDropSection);

    return () => {
      toggleBtn.removeEventListener("click", toggleNav);
      toggleBtnClose.removeEventListener("click", closeNav);
      dropBtn.removeEventListener("click", toggleDropSection);
    };
  }, []);
  return (
    <div>
      <nav class="absolute shadow bg-[#262626]/40 w-full">
        <div class="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center justify-around">
          <div class="flex items-center justify-between">
            <Link href="/">
              <img
                class="w-32 h-14 aspect-square object-contain mix-blend-color-burn"
                src="/Logo.png"
                alt="Infinite hydraulic Solutions Logo"
              />
            </Link>

            <div class="md:hidden">
              <label tabindex="0" class="md:hidden" id="toggle-nav">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
          </div>

          <div class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center hidden">
            <div class="flex flex-col md:flex-row md:mx-6">
              <Link
                class="text-lg my-2 text-white transition-colors duration-300 transform hover:text-[#4f8a8b] md:mx-4 md:my-0"
                href="/"
              >
                Home
              </Link>
              <div className="dropdown dropdown-bottom dropdown-hover">
                <label
                  tabIndex={0}
                  className="text-lg my-2 text-white transition-colors duration-300 transform hover:text-[#4f8a8b] md:mx-4 md:my-0"
                >
                  Products
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow rounded-lg w-52 bg-gray-100 hover:bg-white"
                >
                  <li>
                    <Link
                      href="/hydraulic-hoses"
                      className="active:bg-transparent focus:bg-transparent active:text-black focus:text-black hover:text-gray-900"
                    >
                      Hydraulic Hoses
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/hydraulic-fittings"
                      className="active:bg-transparent focus:bg-transparent active:text-black focus:text-black hover:text-gray-900"
                    >
                      Hydraulic Fittings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hydraulic-equipment"
                      className="active:bg-transparent focus:bg-transparent active:text-black focus:text-black hover:text-gray-900"
                    >
                      Hydraulic Equipments
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hydraulic-pumps"
                      className="active:bg-transparent focus:bg-transparent active:text-black focus:text-black hover:text-gray-900"
                    >
                      Hydraulic Pumps
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="pneumatics"
                      className="active:bg-transparent focus:bg-transparent active:text-black focus:text-black hover:text-gray-900"
                    >
                      Pneumatics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/seals"
                      className="active:bg-transparent focus:bg-transparent active:text-black focus:text-black hover:text-gray-900"
                    >
                      Seals
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industrial-valves"
                      className="active:bg-transparent focus:bg-transparent active:text-black focus:text-black hover:text-gray-900"
                    >
                      Industrial Valves
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pipestubes"
                      className="active:bg-transparent focus:bg-transparent active:text-black focus:text-black hover:text-gray-900"
                    >
                      Pipes and Tubes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/measuringinstruments"
                      className="active:bg-transparent focus:bg-transparent active:text-black focus:text-black hover:text-gray-900"
                    >
                      Measuring Instruments
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/general-consumable"
                      className="active:bg-transparent focus:bg-transparent active:text-black focus:text-black hover:text-gray-900"
                    >
                      General Consumable
                    </Link>
                  </li>
                </ul>
              </div>

              <Link
                class="text-lg my-2 text-white transition-colors duration-300 transform hover:text-[#4f8a8b] md:mx-4 md:my-0"
                href="/contact"
              >
                Contact
              </Link>
              <Link
                class="text-lg my-2 text-white transition-colors duration-300 transform hover:text-[#4f8a8b] md:mx-4 md:my-0"
                href="/about"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div
        class="bg-white absolute w-64 xs:w-1/2 h-screen z-50 hidden overflow-y-scroll"
        id="nav"
      >
        <nav class="p-5 flex flex-col">
          <div class="flex justify-between items-center">
            <span>
              <img
                class="w-32 h-14 aspect-square object-contain"
                src="/Logo.png"
                alt=""
              />
            </span>
            <button
              class="bg-gray-500 text-white py-1 px-3 text-lg rounded-lg"
              id="toggle-nav-close"
            >
              x
            </button>
          </div>
          <ul class="mt-3 my-auto">
            <li class="my-10">
              <Link href="/" class="text-xl xs:text-xl text-[#4f8a8b]">
                Home
              </Link>
            </li>
            <li class="my-10" id="drop-btn">
              <div class="text-xl xs:text-xl flex items-center text-[#4f8a8b]">
                Products
                <svg
                  class="fill-current mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,8.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </div>

              <span
                class="px-1 hidden transition-all duration-500 ease-in-out"
                id="drop-section"
              >
                <span class="flex flex-col">
                  <Link
                    href="/hydraulic-hoses"
                    class="text-md my-2 text-[#4f8a8b]"
                  >
                    Hydraulic Hoses
                  </Link>
                  <Link
                    href="/hydraulic-fittings"
                    class="text-md my-2 text-[#4f8a8b]"
                  >
                    Hydraulic Fittings
                  </Link>
                  <Link
                    href="/hydraulic-equipment"
                    class="text-md my-2 text-[#4f8a8b]"
                  >
                    Hydraulic Equipments
                  </Link>
                  <Link
                    href="hydraulic-pumps/"
                    class="text-md my-2 text-[#4f8a8b]"
                  >
                    Hydraulic Pumps
                  </Link>
                  <Link
                    href="/pneumatics
                  
                  "
                    class="text-md my-2 text-[#4f8a8b]"
                  >
                    Pneumatics
                  </Link>
                  <Link href="/seals" class="text-md my-2 text-[#4f8a8b]">
                    Seals
                  </Link>
                  <Link
                    href="/industrial-valves"
                    class="text-md my-2 text-[#4f8a8b]"
                  >
                    Industrial Valves
                  </Link>
                  <Link href="/pipestubes" class="text-md my-2 text-[#4f8a8b]">
                    Piped and Tubes
                  </Link>
                  <Link
                    href="/measuringinstruments"
                    class="text-md my-2 text-[#4f8a8b]"
                  >
                    Measuring Instruments
                  </Link>
                  <Link
                    href="/general-consumable"
                    class="text-md my-2 text-[#4f8a8b]"
                  >
                    General Consumable
                  </Link>
                </span>
              </span>
            </li>
            <li class="my-10">
              <Link href="/contact" class="text-xl xs:text-xl text-[#4f8a8b]">
                Contact
              </Link>
            </li>
            <li class="my-10">
              <Link href="/about" class="text-xl xs:text-xl text-[#4f8a8b]">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* <!-- Navbar  --> */}
    </div>
  );
};

export default Navbar;
