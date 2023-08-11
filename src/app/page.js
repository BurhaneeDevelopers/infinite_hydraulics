"use client";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 32,
      autoplay: {
        delay: 8000,
      },
      breakpoints: {
        640: {
          centeredSlides: true,
          slidesPerView: 1.25,
        },
        1024: {
          centeredSlides: false,
          slidesPerView: 1.5,
        },
      },
      navigation: {
        nextEl: ".next-button",
        prevEl: ".prev-button",
      },
    });

    return () => {
      swiper.destroy(); // Clean up the Swiper instance when the component unmounts
    };
  }, []);
  return (
    <>
      <div class="bg-[url(/Hero.jpg)] bg-cover bg-fixed bg-center h-screen">
        <section class="h-screen bg-black/50">
          <div class="mx-auto max-w-screen-xl px-4 py-32 flex h-screen items-center">
            <div class="mx-auto text-center">
              <h1 class="text-4xl xs:text-5xl font-extrabold sm:text-6xl lg:text-7xl text-white heading">
                Infinite Hydraulics Solutions
              </h1>

              <p class="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl sm:leading-relaxed text-white">
                Authorized Dealers for
                <span class="text-indigo-100 font-extrabold"> POLYHOSE </span>
              </p>

              <div class="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  class="block rounded px-12 py-3 text-lg font-medium text-gray-900 shadow focus:outline-none focus:ring sm:w-auto transition-all duration-500 ease-in-out bg-[#FBD46D]/90 hover:text-gray-100 hover:bg-gray-600"
                  href="#About"
                >
                  Get Started
                </a>

                <button class="learn-more button flex items-center">
                  <a href="tel:+918939801621">
                    <span class="circle bg-gray-600" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text text-gray-100 text-lg -translate-y-1">
                      Call us
                    </span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <!-- About  --> */}
      <section id="About">
        <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div class="relative z-10 lg:py-16 bg-transparent">
              <div class="relative h-64 sm:h-80 lg:h-full bg-transparent">
                {/* <!-- <img alt="House"
                            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            // class="absolute inset-0 h-full w-full object-cover" /> --> */}
                <div class="absolute inset-0 h-full w-full bg-[url(/Hero.jpg)] bg-fixed bg-cover bg-center"></div>
              </div>
            </div>

            <div class="relative flex items-center bg-gray-200">
              <span class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-200"></span>

              <div class="p-8 sm:p-16 lg:p-24">
                <h2 class="text-2xl font-bold sm:text-3xl lg:text-5xl heading">
                  Know who we are!
                  <div class="">
                    <span class="inline-block w-40 h-1 bg-[#4F8A8B] rounded-full"></span>
                    <span class="inline-block w-3 h-1 ml-1 bg-[#4F8A8B] rounded-full"></span>
                    <span class="inline-block w-1 h-1 ml-1 bg-[#4F8A8B] rounded-full"></span>
                  </div>
                </h2>

                <p class="mt-4 text-gray-600">
                  We have begun this new business and promise to be your
                  one-stop shop for all hydraulics and pneumatics needs. We
                  believe that customer service is essential, and your mission
                  is to provide quality products to our clients.
                </p>

                <div class="flex justify-center">
                  <a
                    href="/pages/aboutus.html"
                    class="mt-8 inline-block rounded text-gray-900 bg-[#FBD46D] px-12 py-3 text-lg font-medium focus:outline-none focus:ring transition-all ease-in-out hover:text-gray-100 hover:bg-gray-600"
                  >
                    {/* Lets GO --> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About  --> */}

      <div
        class="flex flex-wrap justify-center my-10 gap-10 px-10 sm:px-0"
        id="products"
      >
        {/* <!-- Product-1 --> */}
        <div class="group relative overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl hover:scale-105 transition-all ease-in-out duration-200">
          <img
            src="/hoses.png"
            alt=""
            class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
          />
          <div class="relative bg-white p-6">
            <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
              Products
            </span>

            <h3 class="mt-4 text-lg font-medium text-gray-900">
              Hydraulics Hoses
            </h3>

            {/* <!-- <p class="mt-1.5 text-sm text-gray-700">$14.99</p> --> */}

            <div class="mt-4">
              <a
                href="Pages/HydraulicHoses.html"
                class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
              >
                View Products
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Product-1 --> */}

        {/* <!-- Product-2 --> */}
        <div class="group relative overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl transition-all ease-in-out duration-200">
          <img
            src="/fittings.jpg"
            alt=""
            class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
          />
          <div class="relative bg-white p-6">
            <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
              Products
            </span>

            <h3 class="mt-4 text-lg font-medium text-gray-900">
              Hydraulics Fittings
            </h3>

            {/* <!-- <p class="mt-1.5 text-sm text-gray-700">$14.99</p> --> */}

            <div class="mt-4">
              <a
                href="pages/hydraulic-Fittings.html"
                class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
              >
                View Products
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Product-2 --> */}

        {/* <!-- Product-3 --> */}
        <div class="group relative overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl shadow-xl transition-all ease-in-out duration-200">
          <img
            src="/industrial-valves.png"
            alt=""
            class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-xl"
          />
          <div class="relative bg-white p-6">
            <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
              Products
            </span>

            <h3 class="mt-4 text-lg font-medium text-gray-900">Pneumatics</h3>

            {/* <!-- <p class="mt-1.5 text-sm text-gray-700">$14.99</p> --> */}

            <div class="mt-4">
              <a
                href="pages/industrial-Valves.html"
                class="block w-full rounded bg-[#FBD46D] text-center p-4 text-sm font-medium transition hover:scale-105"
              >
                View Products
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Product-3 --> */}
      </div>

      {/* <!-- Products --> */}

      {/* <!-- CTA  --> */}
      <section class="my-10">
        <div class="bg-[url(/products/pneumatics.jpg)] bg-cover bg-center bg-no-repeat mt-10 overflow-hidden">
          <div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
            <div class="text-center mx-auto flex flex-col items-center">
              <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl lg:text-6xl">
                Infinite Hydraulics
              </h2>

              <p class="hidden max-w-lg text-white/90 md:block md:text-lg md:leading-relaxed">
                one-stop shop for all hydraulics and pneumatics needs
              </p>

              <div class="mt-4 sm:mt-8">
                <a
                  href=""
                  class="inline-block rounded-full text-gray-800 bg-[#FBD46D] px-12 py-3 text-sm font-medium transition hover:text-gray-100 hover:bg-gray-600"
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
      <section class="bg-gray-200 py-20">
        <div class="flex flex-col items-center text-center justify-center">
          <h2 class="text-2xl font-semibold text-gray-800 capitalize lg:text-5xl">
            Our Capturing Market Sectors
          </h2>

          <div class="">
            <span class="inline-block w-40 h-1 bg-[#FBD46D] rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-[#FBD46D] rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-[#FBD46D] rounded-full"></span>
          </div>
        </div>
      </section>
      {/* <!-- Extra Section  --> */}

      {/* <!-- Contact  --> */}
      <section class="py-20">
        <div class="flex flex-col items-center text-center justify-center mb-10">
          <h2 class="text-2xl font-semibold text-gray-800 capitalize lg:text-5xl">
            Let's Connect
          </h2>

          <div class="">
            <span class="inline-block w-40 h-1 bg-[#FBD46D] rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-[#FBD46D] rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-[#FBD46D] rounded-full"></span>
          </div>
        </div>
        <div class="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg md:flex-row md:h-48">
          <div class="md:flex md:items-center md:justify-center md:w-1/2 md:bg-[#FBD46D]">
            <div class="px-6 py-6 md:px-8 md:py-0">
              <h2 class="text-lg font-bold text-gray-700 text-left">
                Connect<span class="text-[#4F8A8B]"> With </span> Us
              </h2>

              <p class="mt-2 text-sm text-gray-600">
                Infinite Hydraulic Solutions specialised in energy conveyance
                product design, development, production, and distribution.
              </p>
            </div>
          </div>

          <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
            <form class="max-[500px]:w-full">
              <div class="flex flex-col p-1.5 overflow-hidden border rounded-lg lg:flex-row focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-none focus-within:ring-blue-100 focus:outline-none">
                <input
                  class="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent max-[500px]:mb-5"
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                />

                <button class="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#4F8A8B] rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <!-- Contact  --> */}

      {/* <!-- Testimonial  --> */}
      <section class="bg-gray-200 pt-14">
        <div class="flex flex-col items-center text-center justify-center">
          <h2 class="text-2xl font-semibold text-gray-800 capitalize lg:text-5xl">
            See What Our Customers
            <br />
            Have To Say
          </h2>

          <div class="">
            <span class="inline-block w-40 h-1 bg-[#FBD46D] rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-[#FBD46D] rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-[#FBD46D] rounded-full"></span>
          </div>
        </div>
        <div class="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24">
          <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-16">
            <div class="sm:w-full">
              <h3 class="text-3xl font-bold tracking-tight sm:text-4xl text-start">
                Don't just take our word for it...
                <br class="hidden sm:block lg:hidden" />
                Read reviews from our customers
              </h3>

              <p class="mt-4 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas veritatis illo placeat harum porro optio fugit a culpa
                sunt id!
              </p>

              <div class="hidden lg:mt-8 lg:flex lg:gap-4">
                <button class="prev-button rounded-full border border-600 border-[#4F8A8B] p-3 text-600 text-[#4F8A8B] hover:bg-600 hover:bg-[#4F8A8B] hover:text-white">
                  <span class="sr-only">Previous Slide</span>
                  <svg
                    class="h-5 w-5 -rotate-180 transform"
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

                <button class="next-button rounded-full border border-600 border-[#4F8A8B] p-3 text-600 text-[#4F8A8B] hover:bg-600 hover:bg-[#4F8A8B] hover:text-white">
                  <span class="sr-only">Next Slide</span>
                  <svg
                    class="h-5 w-5"
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

            <div class="-mx-6 lg:col-span-2 lg:mx-0">
              <div class="swiper-container !overflow-hidden">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <blockquote class="flex h-full flex-col justify-between bg-white p-12">
                      <div>
                        <div class="flex gap-0.5 text-500 text-[#4F8A8B]">
                          <svg
                            class="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            class="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            class="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            class="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            class="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>

                        <div class="mt-4">
                          <p class="text-2xl font-bold text-600 text-[#4F8A8B] sm:text-3xl">
                            Stayin' Alive
                          </p>

                          <p class="mt-4 leading-relaxed text-gray-500">
                            No, Rose, they are not breathing. And they have no
                            arms or legs … Where are they? You know what? If we
                            come across somebody with no arms or legs, do we
                            bother resuscitating them? I mean, what quality of
                            life do we have there?
                          </p>
                        </div>
                      </div>

                      <footer class="mt-8 text-sm text-gray-500">
                        &mdash; Michael Scott
                      </footer>
                    </blockquote>
                  </div>

                  <div class="swiper-slide">
                    <blockquote class="flex h-full flex-col justify-between bg-white p-12">
                      <div class="flex gap-0.5 text-500 text-[#4F8A8B]">
                        <svg
                          class="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          class="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          class="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          class="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          class="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>

                      <div class="mt-4">
                        <p class="text-2xl font-bold text-600 text-[#4F8A8B] sm:text-3xl">
                          Stayin' Alive
                        </p>

                        <p class="mt-4 leading-relaxed text-gray-500">
                          No, Rose, they are not breathing. And they have no
                          arms or legs … Where are they? You know what? If we
                          come across somebody with no arms or legs, do we
                          bother resuscitating them? I mean, what quality of
                          life do we have there?
                        </p>
                      </div>

                      <footer class="mt-8 text-sm text-gray-500">
                        &mdash; Michael Scott
                      </footer>
                    </blockquote>
                  </div>

                  <div class="swiper-slide">
                    <blockquote class="flex h-full flex-col justify-between bg-white p-12">
                      <div class="flex gap-0.5 text-500 text-[#4F8A8B]">
                        <svg
                          class="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          class="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          class="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          class="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          class="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>

                      <div class="mt-4">
                        <p class="text-2xl font-bold text-600 text-[#4F8A8B] sm:text-3xl">
                          Stayin' Alive
                        </p>

                        <p class="mt-4 leading-relaxed text-gray-500">
                          No, Rose, they are not breathing. And they have no
                          arms or legs … Where are they? You know what? If we
                          come across somebody with no arms or legs, do we
                          bother resuscitating them? I mean, what quality of
                          life do we have there?
                        </p>
                      </div>

                      <footer class="mt-8 text-sm text-gray-500">
                        &mdash; Michael Scott
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8 flex justify-center gap-4 lg:hidden">
            <button
              aria-label="Previous slide"
              class="prev-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
            >
              <svg
                class="h-5 w-5 -rotate-180 transform"
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

            <button
              aria-label="Next slide"
              class="next-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
            >
              <svg
                class="h-5 w-5"
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
      </section>
      {/* <!-- Testimonial  --> */}
    </>
  );
}