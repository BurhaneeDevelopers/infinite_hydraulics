import React from "react";

const Contact = () => {
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
                  href="../index.html"
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
                  href="javascript:void(0)"
                  className="flex h-14 items-center bg-white pl-8 pr-4 text-lg font-medium transition text-[#07031A] hover:text-gray-500"
                >
                  Contact us
                </a>
              </li>
            </ol>
          </nav>
        </div>
        {/* <!-- CONTENT  --> */}
      </div>
      {/* <!-- Banner  --> */}

      <section className="bg-white my-10">
        <div className="container px-6 py-12 mx-auto">
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-5xl">
              Contact Us
            </h2>

            <div className="">
              <span className="inline-block w-40 h-1 bg-[#FBD46D] rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-[#FBD46D] rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-[#FBD46D] rounded-full"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 px-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 text-start p-0">
                  Email
                </h2>
                <p className="mt-2 text-sm text-gray-500 ">
                  Our friendly team is here to help.
                </p>
                <p className="mt-2 text-sm text-blue-500 ">
                  <a href="mailto:sales@infinitehydraulics.in">
                    sales@infinitehydraulics.in
                  </a>
                </p>
              </div>

              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 text-start p-0">
                  Office
                </h2>
                <p className="mt-2 text-sm text-gray-500 ">
                  Come say hello at our office HQ.
                </p>
                <p className="mt-2 text-sm text-blue-500 ">
                  Old No 2, New Door No 3, Jones Street, Ground Floor, Mannady,
                  Chennai-1
                </p>
              </div>

              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 text-start p-0">
                  Phone
                </h2>
                <p className="mt-2 text-sm text-gray-500 ">
                  Mon-Sat from 9am to 7pm.
                </p>
                <p className="mt-2 text-sm text-[#4f8a8b]">
                  <a href="tel:+918939801621">+918939801621</a>
                </p>
                <p className="mt-2 text-sm text-[#4f8a8b]">
                  <a href="tel:+916383830071">+916383830071</a>
                </p>
                <p className="mt-2 text-sm text-[#4f8a8b]">
                  <a href="tel:+914442030922">+914442030922</a>
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
              <iframe
                width="100%"
                height="100%"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15544.425097852676!2d80.2875866!3d13.0924507!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f8da38d65bb%3A0x7a06817feb8341ff!2sInfinite%20Hydraulics%20Solutions!5e0!3m2!1sen!2sin!4v1691757422655!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center my-10">
        <div className="lg:w-1/2 lg:mx-10">
          <div className="flex flex-col items-center text-center justify-center">
            <h3 className="text-2xl font-semibold text-gray-800 capitalize lg:text-5xl">
              Or Quickly Contact Us
            </h3>

            <div className="">
              <span className="inline-block w-40 h-1 bg-[#FBD46D] rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-[#FBD46D] rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-[#FBD46D] rounded-full"></span>
            </div>
          </div>

          <p className="mt-4 text-gray-500 flex justify-center">
            Ask us everything and we would love to hear from you
          </p>

          <form className="mt-12">
            <div className="-mx-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label className="block mb-2 text-sm text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="flex-1 px-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm text-gray-600">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-sm text-gray-600">
                Message
              </label>
              <textarea
                className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Message"
              ></textarea>
            </div>

            <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-gray-900 capitalize transition-colors duration-300 transform bg-[#FBD46D] rounded-md hover:bg-transparent hover:border hover:border-[#FBD46D] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              get in touch
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
