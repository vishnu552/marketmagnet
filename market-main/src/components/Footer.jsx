import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/assets/logonav.png";

function Footer() {
  return (
    <footer className=" my-10  shadow-inner" >
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

              <ul className="text-gray-500 dark:text-gray-400 font-medium">

                <Link to="/Faq">
                  <li className="mb-4 text-[18px] cursor-pointer">
                    <a href="#faq" className="hover:underline text-2xl">
                      FAQ
                    </a>
                  </li>
                </Link>
                <Link to="/Contacts">
                  <li className="mb-4 text-[18px] cursor-pointer">
                    <a href="#" className="hover:underline text-2xl">
                      Contact Us
                    </a>
                  </li>
                </Link>
              </ul>
            </div>

            <div>

              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <Link to="/privacy">
                  <li className="mb-4">
                    <a href="#" className="hover:underline text-2xl">
                      Privacy Policy
                    </a>
                  </li>
                </Link>

                <Link to="/terms">
                  <li className="mb-4">
                    <a href="#" className="hover:underline text-2xl">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </Link>

                <Link to="/discl">
                  <li>
                    <a href="#" className="hover:underline text-2xl">
                      Disclaimer
                    </a>
                  </li>
                </Link>

              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <span className="text-[15px] text-gray-500 sm:text-center dark:text-gray-400">
              HubAlt- All Rights Reserved.
            </span>
            <p className="text-[14px] text-gray-500 sm:text-center dark:text-gray-400">
              Hubalt Venture Private Limited
            </p>
          </div>

          {/* logo */}
          {/* <div className="w-[80%] ">
            <div className="w-full gap-20 flex justify-center">
              <img src="https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/Logo1.png" className="relative top-6 w-[200px]" alt="" />

              <img src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/nw6o7plxlj6ehfcwwddx" className=" h-[100px]" alt="" />
            </div>
          </div> */}


          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a
              href="https://www.linkedin.com/company/hubalt/" target="_blank"
              className=" text-[#0077b5] hover:text-gray-900 dark:hover:text-white text-4xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@HubAltVenture" target="_blank"
              className=" text-[#cd1313] hover:text-gray-900 dark:hover:text-white text-4xl"
            >
              <FaYoutube />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
