import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import logo from "../assets/assets/MARKETS__2_-removebg-preview.png";

function Footer() {
  return (
    <footer className=" dark:bg-gray-900 my-10">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img src={logo} className="h-20 mr-3" alt="Market Magnet" />
              {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                MarketMagent
              </span> */}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-[20px] font-semibold text-gray-900 uppercase dark:text-white">
                Contact Us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 text-[18px]">FAQ</li>
                <li className="mb-4 text-[18px]">Contact Us</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-[20px] font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline text-[18px]">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline text-[18px]">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-[18px]">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <span className="text-[15px] text-gray-500 sm:text-center dark:text-gray-400">
              Stakoner- All Rights Reserved.
            </span>
            <p className="text-[14px] text-gray-500 sm:text-center dark:text-gray-400">
              Market Magnet Private Limited
            </p>
          </div>

          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
