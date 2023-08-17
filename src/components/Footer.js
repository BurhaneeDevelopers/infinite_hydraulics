import React from "react";

const Footer = () => {
  return (
    <div>
      {" "}
      {/* <!-- footer  --> */}
      <footer aria-label="Site Footer" className="bg-gray-100">
        <div className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl heading">
              Infinite <span className="text-[#4f8a8b]">Hydraulics </span>
              Solutions
            </h2>

            <p className="max-w-sm-25 mx-auto mt-4 text-gray-500">
              One-stop shop for all hydraulics and pneumatics needs!
            </p>

            <a
              href="/Catalogue.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-3 mt-8 text-sm font-medium text-[#4F8A8B] border border-[#4F8A8B] hover:border-transparent rounded-full hover:text-gray-100 hover:bg-gray-600"
            >
              View our Catalogue
            </a>
          </div>

          <div className="pt-8 mt-16 border-t border-gray-100 sm:flex sm:items-center sm:justify-between lg:mt-24">
            <nav aria-label="">
              <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </nav>

            <ul className="flex justify-center items-center gap-6 mt-8 sm:mt-0 lg:justify-end">
              <li>
                <a
                  href="tel:+918939801621"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Call</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-phone-call"
                  >
                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/+918939801621?text=Hello sir...I want to enquire more about your products in detail."
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Whatsapp</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    className="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.indiamart.com/infinite-hydraulics-solutions/profile.html"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">IndiaMart</span>

                  <img
                    src="/icons/indiamart.svg"
                    alt="Indiamart"
                    className="w-10"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
