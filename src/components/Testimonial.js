"use client";
import React from "react";
import { useEffect } from "react";

const Testimonial = () => {
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
    <div>
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
                Don&apos;t just take our word for it...
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
                  <Slide
                    details={{
                      title: "something",
                      content:
                        "lorem20 someting lorem20 sometinglorem20 sometinglorem20 sometinglorem20 sometinglorem20 sometinglorem20 sometinglorem20 sometinglorem20 sometinglorem20 someting",
                      name: "yobuddy",
                    }}
                  />
                  
                  <Slide
                    details={{
                      title: "something",
                      content:
                        "lorem20 someting lorem20 sometinglorem20 sometinglorem20 sometinglorem20 sometinglorem20 sometinglorem20 sometinglorem20 sometinglorem20 sometinglorem20 someting",
                      name: "yobuddy",
                    }}
                  />
                  
                  <Slide
                    details={{
                      title: "something",
                      content:
                        "lorem20 someting lorem20 sometinglorem20 sometinglorem20 sometinglorem20 sometinglorem20 sometinglorem20 sometinglorem20 sometinglorem20 sometinglorem20 someting",
                      name: "yobuddy",
                    }}
                  
                  />
                  <Slide
                    details={{
                      title: "something",
                      content:
                        "lorem20 someting lorem20 sometinglorem20 sometinglorem20 sometinglorem20 sometinglorem20 sometinglorem20 sometinglorem20 sometinglorem20 sometinglorem20 someting",
                      name: "yobuddy",
                    }}
                  />

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
    </div>
  );
};

export default Testimonial;

const Slide = (props) => {
  const { title, content, name } = props.details;
  return (
    <>
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
                {title}
              </p>

              <p class="mt-4 leading-relaxed text-gray-500">{content}</p>
            </div>
          </div>

          <footer class="mt-8 text-sm text-gray-500">&mdash; {name}</footer>
        </blockquote>
      </div>
    </>
  );
};
