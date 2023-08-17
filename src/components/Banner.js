import React from "react";

const Banner = ({ title, img }) => {
  return (
    <div>
      {/* <!-- Banner --> */}
      <div className=" h-80 w-full flex justify-center items-center">
        <div className="">
          <img
            className="object-cover object-center absolute inset-0 h-80 w-full flex justify-center items-center -z-10 bg-norepeat"
            src={img}
            alt=""
          />
        </div>
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
                  {title}
                </a>
              </li>
            </ol>
          </nav>
        </div>
        {/* <!-- CONTENT  --> */}
      </div>
      {/* <!-- Banner  --> */}
    </div>
  );
};

export default Banner;
