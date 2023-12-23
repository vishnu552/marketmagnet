import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
function Why() {
  return (
    <div className="mt-20" data-aos="fade-up">
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div class="text-center pb-12">
          <h2 class="text-base text-bold text-black">
            We have the best equipment
          </h2>
          <h1 class="font-bold text-3xl md:text-4xl lg:text-6xl font-heading text-[#3a41bd]">
            Check our awesome team members
          </h1>
        </div>


        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">

          


         
          <div class="w-full bg-gray-200 rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80" alt="photo" />
            </div>
            <div class="text-center">
              <p class="text-2xl text-gray-900 font-bold mb-2">Prakash Sharma</p>
              <p class="text-[12px] text-gray-900 font-normal">Founder &amp; Chief Executive Officer</p>
            </div>
            <div className="flex gap-10 mt-5">
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
          <div class="w-full bg-gray-200 rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" />
            </div>
            <div class="text-center">
              <p class="text-2xl text-gray-900 font-bold mb-2">Rakesh Shankar</p>
              <p class="text-[12px] text-gray-900 font-normal">Chief Business Officer</p>
            </div>
            <div className="flex gap-10 mt-5">
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
          <div class="w-full bg-gray-200 rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" />
            </div>

            <div class="text-center">
              <p class="text-2xl text-gray-900 font-bold mb-2">Surendra Kumar</p>
              <p class="text-[12px] text-gray-900 font-normal">Chief Marketing Officer</p>
            </div>

            <div className="flex gap-10 mt-5">
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
          <div class="w-full bg-gray-200 rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80" alt="photo" />
            </div>

            <div class="text-center">
              <p class="text-2xl text-gray-900 font-bold mb-2">Vikash K Naik</p>
              <p class="text-[12px] text-gray-900 font-normal">Chief Sales Officer</p>
            </div>

            <div className="flex gap-10 mt-5">
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
      </section>
    </div>
  );
}

export default Why;
