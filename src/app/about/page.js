"use client";
import React from "react";
import Head from "next/head";
import { useEffect } from "react";
const About = () => {
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
      {/* <!-- Banner --> */}
      <div className="bg-[url(/banner.jpg)] h-80 w-full flex justify-center items-center bg-cover bg-center">
        {/* <!-- CONTENT  --> */}
        <div className="bg-gray-200/10 h-80 w-full flex justify-center items-center flex-col">
          {/* <!-- <h1 className="text-white text-6xl my-2">Hydraulics< tex-[#07031A]/h1> --> */}
          <nav aria-label="Breadcrumb" className="flex">
            <ol
              role="list"
              className="flex overflow-hidden rounded-lg border border-gray-200 text-[#4F8A8B]"
            >
              <li className="flex items-center">
                <a
                  href="#"
                  className="flex h-14 items-center bg-gray-100 px-4 transition hover:text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>

                  <span className="ml-1.5 text-lg font-medium"> Home </span>
                </a>
              </li>

              <li className="relative flex items-center">
                <span className="absolute inset-y-0 -left-px h-14 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)]"></span>

                <a
                  href="#"
                  className="flex h-14 items-center bg-white pl-8 pr-4 text-lg font-medium transition text-[#07031A] hover:text-gray-500"
                >
                  About us
                </a>
              </li>
            </ol>
          </nav>
        </div>
        {/* <!-- CONTENT  --> */}
      </div>
      {/* <!-- Banner  --> */}

      {/* <!-- About  --> */}
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:grid-cols-2">
            <div className="relative flex items-center bg-gray-200">
              {/* <!-- <span
              className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-200"
            ></span> --> */}

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Know who we are!
                  <div className="">
                    <span className="inline-block w-40 h-1 bg-[#4F8A8B] rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-[#4F8A8B] rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-[#4F8A8B] rounded-full"></span>
                  </div>
                </h2>

                <p className="mt-4 text-gray-600 about">
                  At our <span>Hydraulics and Pneumatics Company</span>, our
                  focus is on providing innovative solutions that utilize the
                  power of fluids and gases to drive machinery and equipment.
                  With a team of experienced engineers and technicians, we
                  strive to provide high-quality products and services that meet
                  the needs of our clients in a variety of industries. Our
                  company has a strong reputation for expertise in the design,
                  installation, and maintenance of hydraulic and pneumatic
                  systems. We have worked with clients in manufacturing,
                  construction, agriculture, and other industries to help them
                  increase efficiency, reduce costs, and improve productivity
                  through the use of our systems. Our team is dedicated to
                  staying up-to-date on the latest technologies and trends in
                  the field, allowing you to provide cutting-edge solutions to
                  our clients, whether it&apos;s designing custom hydraulic
                  systems, installing pneumatic equipment, or providing routine
                  maintenance services, we bring a wealth of knowledge and
                  experience to every project you undertake. At our hydraulics
                  and pneumatics company, we understand the importance of
                  reliability and safety in all of our products and services.
                  Our team takes great care to ensure that every system you
                  design and install meets the highest standards of quality and
                  safety. we work closely with our clients to understand their
                  unique needs and requirements, and we tailor our solutions to
                  meet those needs in the most effective and efficient way
                  possible. Our company&apos;s commitment to excellence and
                  customer satisfaction is evident in everything you do. From
                  our state-of-the-art facilities to our experienced and
                  knowledgeable team, we are dedicated to providing the best
                  possible service to our clients. We are proud of our
                  reputation as a leader in the hydraulics and pneumatics
                  industry, and we look forward to continuing to serve our
                  clients with the same level of expertise and dedication that
                  has made you successful thus far.
                </p>

                {/* <!-- <a href="#"
                            className="mt-8 inline-block rounded text-gray-900 bg-[#FBD46D] px-12 py-3 text-sm font-medium focus:outline-none focus:ring transition-all ease-in-out hover:bg-transparent hover:border hover:border-[#FBD46D]">
                            Lets GO
                        </a> --> */}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- section_1 --> */}
        <div className="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-gray-50">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-1 flex-col">
                {/* <!-- img_01 Hoses--> */}
                <img
                  className="object-cover h-full"
                  src="/industrialhoses.jpg"
                />
              </div>
              <div className="hidden md:flex flex-1 flex-row gap-2">
                <div className="flex flex-1 flex-col">
                  {/* <!-- img_02 Pneumatics--> */}
                  <img className="object-cover h-full" src="/pneumatics.jpg" />
                </div>
                <div className="hidden md:flex flex-1 flex-col">
                  {/* <!-- img_03 Fittings--> */}
                  <img className="object-cover h-full" src="/fittings.jpg" />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="hidden md:flex flex-1 flex-row gap-2">
                <div className="flex flex-1 flex-col">
                  {/* <!-- img_04 --> */}
                  <img className="object-cover h-full" src="/pipes&tubes.jpg" />
                </div>
                <div className="hidden md:flex flex-1 flex-col">
                  {/* <!-- img_05 --> */}
                  <img className="object-cover h-full" src="/powertools.jpg" />
                </div>
              </div>
              <div className="flex flex-1 flex-col">
                {/* <!-- img_06 --> */}
                <img className="object-cover h-full" src="/rubberseals.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Services --> */}
      <section id="services">
        <div className="row">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Our Services
            <div className="">
              <span className="inline-block w-40 h-1 bg-[#4F8A8B] rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-[#4F8A8B] rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-[#4F8A8B] rounded-full"></span>
            </div>
          </h2>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <h3>Quality Products</h3>
              <p>
                We believe in providing products of uncompromised and top-notch
                quality that leave every customer gratified.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card2">
              <div className="icon-wrapper2">
                <i className="fa-solid fa-truck"></i>
              </div>
              <h3>Fastest Delivery</h3>
              <p>
                We ensure timely, safe, and express delivery of all our products
                and also, we provide quality, customer-oriented and elite
                services to ensure customer satisfaction.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <i className="fa-solid fa-hand-holding-dollar"></i>
              </div>
              <h3>Best Rates</h3>
              <p>
                We prioritizes the customer needs the most by providing products
                of extreme quality at affordable and best prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="p-10">
        <section className="flex justify-center items-center">
          <marquee behavior="scroll" direction="horizontal" scrollamount="20">
            <div className="flex gap-12">
              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://www.polyhose.com/wp-content/uploads/2018/05/main-logo.png"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Parker.svg/1200px-Parker.svg.png"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://logos-world.net/wp-content/uploads/2022/07/Gates-Emblem.png"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://www.manuli-hydraulics.com/wp-content/uploads/2021/05/Manuli_Hydraulics_HP_Logo-1.png"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://polyhydron.com/pplimage_misc/Logo%20Foundation.png"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Janatics_Pneumatics_logo.png"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Logo_SMC_Corporation.svg/1200px-Logo_SMC_Corporation.svg.png"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://www.liblogo.com/img-logo/fe6844fd7b-festo-logo-festo-automation-pneumatic-amp-electrical-automation--automation.png"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://airautomation.com/wp-content/uploads/2020/11/Nitto-Kohki-Logo.png"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Logo_of_Bosch_Rexroth_AG.svg/1200px-Logo_of_Bosch_Rexroth_AG.svg.png"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://www.flw.com/images/brands/wika/wika.jpg"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://5.imimg.com/data5/SELLER/Default/2021/2/HT/LR/XD/40491793/pump-pressure-gauge-500x500.png"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://yuken-usa.com/wp-content/uploads/2021/11/YukenTranspar.gif"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://ashishhydraulics.com/admin_panel/admin/product_images/Pumps_17-07_dowty.jpg"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://w7.pngwing.com/pngs/723/866/png-transparent-jsw-group-india-jsw-steel-ltd-chief-executive-conglomerate-india-blue-company-text-thumbnail.png"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/2231px-Tata_logo.svg.png"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://karam.in/india/wp-content/uploads/sites/3/2020/03/KARAM-Logo-white-Copy.png"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://www.venusohs.com/wp-content/uploads/2023/01/cropped-VENUS-LOGO-New-1.jpg"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Stanley_Hand_Tools_logo.svg/2560px-Stanley_Hand_Tools_logo.svg.png"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://logos-world.net/wp-content/uploads/2020/08/Bosch-Logo.png"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://play-lh.googleusercontent.com/5AfibCNOZQmDu3FowNKlN5AtCvXNK6vuZDn9ju98htt4RQGclKv0lFXCE-Mv9q7YbQ=w600-h300-pc0xffffff-pd"
              />

              <img
                loading="lazy"
                className="w-40 object-contain"
                src="https://seeklogo.com/images/T/taparia-logo-31FDB5AD69-seeklogo.com.png"
              />
            </div>
          </marquee>
        </section>
      </div>

      {/* <!-- Testimonial  --> */}
      <section className="bg-gray-200 pt-14">
        <div className="flex flex-col items-center text-center justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-5xl">
            See What Our Customers
            <br />
            Have To Say
          </h2>

          <div className="">
            <span className="inline-block w-40 h-1 bg-[#FBD46D] rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-[#FBD46D] rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-[#FBD46D] rounded-full"></span>
          </div>
        </div>
        <div className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-16">
            <div className="sm:w-full">
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl text-start">
                Don&apos;t just take our word for it...
                <br className="hidden sm:block lg:hidden" />
                Read reviews from our customers
              </h3>

              <p className="mt-4 text-gray-500">
                It's all about Customers and their Satisfactions.
              </p>

              <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                <button className="prev-button rounded-full border border-600 border-[#4F8A8B] p-3 text-600 text-[#4F8A8B] hover:bg-600 hover:bg-[#4F8A8B] hover:text-white">
                  <span className="sr-only">Previous Slide</span>
                  <svg
                    className="h-5 w-5 -rotate-180 transform"
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

                <button className="next-button rounded-full border border-600 border-[#4F8A8B] p-3 text-600 text-[#4F8A8B] hover:bg-600 hover:bg-[#4F8A8B] hover:text-white">
                  <span className="sr-only">Next Slide</span>
                  <svg
                    className="h-5 w-5"
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

            <div className="-mx-6 lg:col-span-2 lg:mx-0">
              <div className="swiper-container !overflow-hidden">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <blockquote className="flex h-full flex-col justify-between bg-white p-12">
                      <div>
                        <div className="flex gap-0.5 text-500 text-[#4F8A8B]">
                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>

                        <div className="mt-4">
                          <p className="text-2xl font-bold text-600 text-[#4F8A8B] sm:text-3xl">
                            Testimonial
                          </p>

                          <p className="mt-4 leading-relaxed text-gray-500">
                            I Have been with this company for a long time and i
                            cant praise this company enough. Their products are
                            top-notch,and their customer service is unmatched.
                          </p>
                        </div>
                      </div>

                      <footer className="mt-8 text-sm text-gray-500">
                        &mdash; Sarrah M
                      </footer>
                    </blockquote>
                  </div>

                  <div className="swiper-slide">
                    <blockquote className="flex h-full flex-col justify-between bg-white p-12">
                      <div>
                        <div className="flex gap-0.5 text-500 text-[#4F8A8B]">
                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>

                        <div className="mt-4">
                          <p className="text-2xl font-bold text-600 text-[#4F8A8B] sm:text-3xl">
                            Testimonial
                          </p>

                          <p className="mt-4 leading-relaxed text-gray-500">
                            I was a skeptical at first, but after trying their
                            services, I am a believer! They exceeded my
                            expectations and delivered results beyond what could
                            i have hoped for.
                          </p>
                        </div>
                      </div>

                      <footer className="mt-8 text-sm text-gray-500">
                        &mdash; John R
                      </footer>
                    </blockquote>
                  </div>

                  <div className="swiper-slide">
                    <blockquote className="flex h-full flex-col justify-between bg-white p-12">
                      <div>
                        <div className="flex gap-0.5 text-500 text-[#4F8A8B]">
                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>

                        <div className="mt-4">
                          <p className="text-2xl font-bold text-600 text-[#4F8A8B] sm:text-3xl">
                            Testimonial
                          </p>

                          <p className="mt-4 leading-relaxed text-gray-500">
                            The Team and the company truly cares about their
                            customers. They went above and beyond to solve my
                            issue, and I couldn't be happier with the outcome.
                          </p>
                        </div>
                      </div>

                      <footer className="mt-8 text-sm text-gray-500">
                        &mdash; Emily S
                      </footer>
                    </blockquote>
                  </div>

                  <div className="swiper-slide">
                    <blockquote className="flex h-full flex-col justify-between bg-white p-12">
                      <div>
                        <div className="flex gap-0.5 text-500 text-[#4F8A8B]">
                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>

                        <div className="mt-4">
                          <p className="text-2xl font-bold text-600 text-[#4F8A8B] sm:text-3xl">
                            Testimonial
                          </p>

                          <p className="mt-4 leading-relaxed text-gray-500">
                            The quality of their work is outstanding. I have
                            recommended to friend and family, and they have all
                            the same exceptional experience.
                          </p>
                        </div>
                      </div>

                      <footer className="mt-8 text-sm text-gray-500">
                        &mdash; David L
                      </footer>
                    </blockquote>
                  </div>

                  <div className="swiper-slide">
                    <blockquote className="flex h-full flex-col justify-between bg-white p-12">
                      <div>
                        <div className="flex gap-0.5 text-500 text-[#4F8A8B]">
                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>

                        <div className="mt-4">
                          <p className="text-2xl font-bold text-600 text-[#4F8A8B] sm:text-3xl">
                            Testimonial
                          </p>

                          <p className="mt-4 leading-relaxed text-gray-500">
                            They have encountered all of my problems and they
                            have a very responsive and friendly support team. It
                            is pleasure doing business with them.
                          </p>
                        </div>
                      </div>

                      <footer className="mt-8 text-sm text-gray-500">
                        &mdash; Maria H
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4 lg:hidden">
            <button
              aria-label="Previous slide"
              className="prev-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
            >
              <svg
                className="h-5 w-5 -rotate-180 transform"
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
              className="next-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
            >
              <svg
                className="h-5 w-5"
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

export default About;
