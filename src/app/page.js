"use client";
// import Testimonial from "@/components/Testimonial";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 32,
      autoplay: {
        delay: 4000,
      },
      navigation: {
        nextEl: ".next-button",
        prevEl: ".prev-button",
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          centeredSlides: true,
        },
        1024: {
          centeredSlides: false,
          slidesPerView: 2.25,
        },
      },
    });
  }, []);

  const cards = [
    {
      title: "Automotive Industry",
      image: "/industries/automotive-industry.jpeg",
    },
    {
      title: "Oil Refinery Industry",
      image: "/industries/oil-refining.jpg",
    },
    {
      title: "Sugar Industry",
      image: "/industries/sugar-industry.jpeg",
    },
    {
      title: "Shipping Industry",
      image: "/industries/shipping-industry.jpeg",
    },
    {
      title: "Cement Industry",
      image: "/industries/cement-industry.jpeg",
    },
    {
      title: "Air Craft Industry",
      image: "/industries/aircraft-industry.jpeg",
    },
    {
      title: "Petrol Industry",
      image: "/industries/petrol-industry.jpeg",
    },
    {
      title: "Chemical Industry",
      image: "/industries/chemical-industry.jpeg",
    },
    {
      title: "Pharma Industry",
      image: "/industries/pharma-chemical-industry.jpeg",
    },
    {
      title: "Steel Industry",
      image: "/industries/steel-industry.jpeg",
    },
  ];
  return (
    <>
      <div className="bg-[url(/Hero.jpg)] bg-cover bg-fixed bg-center h-screen">
        <section className="h-screen bg-black/50">
          <div className="mx-auto max-w-screen-xl px-4 py-32 flex h-screen items-center">
            <div className="mx-auto text-center">
              <h1 className="text-4xl xs:text-5xl font-extrabold sm:text-6xl lg:text-7xl text-white heading">
                Infinite Hydraulics Solutions
              </h1>

              <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl sm:leading-relaxed text-white">
                Authorized Dealers for
                <span className="text-indigo-100 font-extrabold">
                  {" "}
                  POLYHOSE{" "}
                </span>
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="block rounded px-12 py-3 text-lg font-medium text-gray-900 shadow focus:outline-none focus:ring sm:w-auto transition-all duration-500 ease-in-out bg-[#FBD46D]/90 hover:text-gray-100 hover:bg-gray-600"
                  href="#About"
                >
                  Get Started
                </a>

                <a
                  href="tel:+918939801621"
                  className="learn-more button flex items-center"
                >
                  <span className="circle bg-gray-600" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text text-gray-100 text-lg -translate-y-1">
                    Call us
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- About  --> */}
      <section id="About">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16 bg-transparent">
              <div className="relative h-64 sm:h-80 lg:h-full bg-transparent">
                {/* <!-- <img alt="House"
                            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            // className="absolute inset-0 h-full w-full object-cover" /> --> */}
                <div className="absolute inset-0 h-full w-full bg-[url(/Hero.jpg)] bg-fixed bg-cover bg-center"></div>
              </div>
            </div>

            <div className="relative flex items-center bg-gray-200">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-200"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl lg:text-5xl heading">
                  Know who we are!
                  <div className="">
                    <span className="inline-block w-40 h-1 bg-[#4F8A8B] rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-[#4F8A8B] rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-[#4F8A8B] rounded-full"></span>
                  </div>
                </h2>

                <p className="mt-4 text-gray-600">
                  We have begun this new business and promise to be your
                  one-stop shop for all hydraulics and pneumatics needs. We
                  believe that customer service is essential, and our mission
                  is to provide quality products to our clients.
                </p>

                <div className="flex justify-center">
                  <a
                    href="/about"
                    className="mt-8 inline-block rounded text-gray-900 bg-[#FBD46D] px-12 py-3 text-lg font-medium focus:outline-none focus:ring transition-all ease-in-out hover:text-gray-100 hover:bg-gray-600"
                  >
                    Read More {"-->"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About  --> */}
      <div
        className="flex flex-wrap justify-center my-10 gap-10 px-10 sm:px-0"
        id="products"
      >
        {/* <!-- Product-1 --> */}
        <div className="group relative overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hover:scale-105 transition-all ease-in-out duration-200">
          <img
            src="/hoses.png"
            alt=""
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
          />
          <div className="relative bg-white p-6">
            <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
              Products
            </span>

            <h3 className="mt-4 text-lg font-medium text-gray-900">
              Hydraulics Hoses
            </h3>

            {/* <!-- <p className="mt-1.5 text-sm text-gray-700">$14.99</p> --> */}

            <div className="mt-4">
              <Link
                href="/hydraulic-hoses"
                className="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- Product-1 --> */}

        {/* <!-- Product-2 --> */}
        <div className="group relative overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl transition-all ease-in-out duration-200">
          <img
            src="/fittings.jpg"
            alt=""
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
          />
          <div className="relative bg-white p-6">
            <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
              Products
            </span>

            <h3 className="mt-4 text-lg font-medium text-gray-900">
              Hydraulics Fittings
            </h3>

            {/* <!-- <p className="mt-1.5 text-sm text-gray-700">$14.99</p> --> */}

            <div className="mt-4">
              <Link
                href="/hydraulic-fittings"
                className="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- Product-2 --> */}

        {/* <!-- Product-3 --> */}
        <div className="group relative overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl transition-all ease-in-out duration-200">
          <img
            src="/industrial-valves.png"
            alt=""
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
          />
          <div className="relative bg-white p-6">
            <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
              Products
            </span>

            <h3 className="mt-4 text-lg font-medium text-gray-900">
              Pneumatics
            </h3>

            {/* <!-- <p className="mt-1.5 text-sm text-gray-700">$14.99</p> --> */}

            <div className="mt-4">
              <Link
                href="/industrial-valves"
                className="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- Product-3 --> */}
      </div>
      {/* <!-- Products --> */}
      {/* <!-- CTA  --> */}
      <section className="my-10">
        <div className="bg-[url(/products/pneumatics.jpg)] bg-cover bg-center bg-no-repeat mt-10 overflow-hidden">
          <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="text-center mx-auto flex flex-col items-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl lg:text-6xl">
                Infinite Hydraulics
              </h2>

              <p className="hidden max-w-lg text-white/90 md:block md:text-lg md:leading-relaxed">
                one-stop shop for all hydraulics and pneumatics needs
              </p>

              <div className="mt-4 sm:mt-8">
                <a
                  href=""
                  className="inline-block rounded-full text-gray-800 bg-[#FBD46D] px-12 py-3 text-sm font-medium transition hover:text-gray-100 hover:bg-gray-600"
                >
                  Get Yours Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- CTA  --> */}
      {/* <!-- Extra Section  --> */}
      <section className="bg-gray-200 py-20">
        <div className="flex flex-col items-center text-center justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-5xl">
            Our Capturing Market Sectors
          </h2>

          <div className="">
            <span className="inline-block w-40 h-1 bg-[#FBD46D] rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-[#FBD46D] rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-[#FBD46D] rounded-full"></span>
          </div>
        </div>

        <div className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:me-0 lg:pe-0 lg:ps-8">
          <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
            <div className="mt-8 flex gap-4 lg:mt-0">
              <button className="prev-button rounded-full border border-[#4f8A8B] p-3 border-[#4f8A8B] hover:border-[#4f8A8B] hover:bg-[#4F8A8B] hover:text-white text-[#4f8A8B]">
                <span className="sr-only">Previous Slide</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 rtl:rotate-180"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button className="next-button rounded-full border border-[#4f8A8B] p-3 border-[#4f8A8B] hover:border-[#4f8A8B] hover:bg-[#4F8A8B] hover:text-white text-[#4f8A8B]">
                <span className="sr-only">Next Slide</span>
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="sm:-mx-6 mt-8 lg:col-span-2 lg:mx-0">
            <div className="swiper-container !overflow-hidden">
              <div className="swiper-wrapper">
                {cards.map((card, index) => (
                  <Slide key={index} title={card.title} image={card.image} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Extra Section  --> */}
      {/* <!-- Contact  --> */}
      <section className="py-20">
        <div className="flex flex-col items-center text-center justify-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-5xl">
            Let&apos;s Connect
          </h2>

          <div className="">
            <span className="inline-block w-40 h-1 bg-[#FBD46D] rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-[#FBD46D] rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-[#FBD46D] rounded-full"></span>
          </div>
        </div>
        <div className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg md:flex-row md:h-48">
          <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-[#FBD46D]">
            <div className="px-6 py-6 md:px-8 md:py-0">
              <h2 className="text-lg font-bold text-gray-700">
                Connect<span className="text-[#4F8A8B]"> With </span> Us
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                Infinite Hydraulic Solutions specialised in energy conveyance
                product design, development, production, and distribution.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
            <form className="max-[500px]:w-full">
              <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg lg:flex-row focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-none focus-within:ring-blue-100 focus:outline-none">
                <input
                  className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent max-[500px]:mb-5"
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                />

                <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#4F8A8B] rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <!-- Contact  --> */}
      {/* <Testimonial /> */}
    </>
  );
}

const Slide = ({ title, image }) => {
  return (
    <>
      <div className="swiper-slide !w-screen sm:!w-96">
        <div
          className=" no-repeat bg-cover h-96 w-screen sm:w-96 relative rounded-3xl overflow-hidden"
          style={{ backgroundImage: `url('${image}')` }}
        >
          <div className="inset-0 bg-black/30 absolute p-5 h-full justify-center items-center">
            <h3 className="text-xl text-white">{title}</h3>
          </div>
        </div>
      </div>
    </>
  );
};
