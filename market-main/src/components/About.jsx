import React from "react";
import Img1 from "../assets/assets/blob vector.png";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
function About() {
  return (
    <div id="aboutus" className="w-full h-auto px-20  mb-20  p-12 text-justify">
      <h2 className="text-[#3a41bd] text-bold text-4xl md:text-6xl text-center m-10 font-sans font-semibold">
        About Us
      </h2>

      <div className="relative flex justify-center mb-20">
        <hr className="w-[100px] border-2 border-solid border-gray-400" />
      </div>

      <div className="skill-container-right">
        <img src={Img1} className="blob-style" alt="" />
      </div>

      <p className="text-gray-800 text-center text-2xl md:text-4xl font-sans mb-20">
        HubAlt,A digital marketplace strives to make the Startup
        investment space more inclusive by granting retail investors access to
        the opportunities that were previously available only to the wealthy 1%.
        At the same time, we want to make it hassle free for founders to raise
        funds from registered users. We are on a mission to transform the
        landscape of Startup investments in India
        We are a bridge between Investor and Investee. We believe that stability
        and growth can go hand in hand, and we are dedicated to helping you
        achieve both with our innovative approach by bringing promising
        Startup investment opportunities.
      </p>


      <div className="bg-gray-100">
        <h2 className="text-[#3a41bd]  text-bold text-4xl md:text-6xl text-center m-10 font-sans font-semibold">
          Our Mission
        </h2>
        <div className="relative flex justify-center mb-20">
          <hr className="w-[100px] border-2 border-solid border-gray-400" />
        </div>

        <p className="text-gray-800 text-center text-2xl md:text-4xl font-sans mb-20">
          Our mission is to bridge the gap between promising startups and investors, empowering entrepreneurs to secure the funding required to bring their innovative ideas to life
        </p>
      </div>







      <h2 className="text-[#3a41bd] text-bold text-4xl md:text-6xl text-center m-10 font-sans font-semibold">
        Our Founder
      </h2>
      <div className="relative flex justify-center mb-20">
        <hr className="w-[100px] border-2 border-solid border-gray-400" />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
        
        <div class="w-full  rounded-lg p-12 flex flex-col justify-center items-center">
          <div class="mb-8">
            <img
              class="object-center object-cover rounded-full h-36 w-36"
              src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=900&t=st=1703425651~exp=1703426251~hmac=ee8a3b09ea5ce0d9c06615a61735d093de58307b074f5005e84615ffa7a1657e"
              alt="photo"
            />
          </div>

        
          <div class="text-center">
            <p class="text-4xl text-gray-900 font-bold mb-2">
              Prakash Sharma
            </p>
            <p class="text-3xl text-gray-900 font-normal">
              Founder &amp; Chief Executive Officer
            </p>
          </div>

          <div className="flex gap-10 mt-5">
            <a
              href="https://www.linkedin.com/in/prakash-sharma-2b31673a/" target="_blank"
              className=" text-[#0077b5] hover:text-gray-900 dark:hover:text-white text-4xl"
            >
              <FaLinkedin />
            </a>

          </div>


        </div>

        <div class="w-full border-l-2  rounded-lg p-12 flex flex-col justify-center items-center">
          <div class="mb-8">
            <img
              class="object-center object-cover rounded-full h-36 w-36"
              src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=900&t=st=1703425651~exp=1703426251~hmac=ee8a3b09ea5ce0d9c06615a61735d093de58307b074f5005e84615ffa7a1657e"
              alt="photo"
            />
          </div>

        
          <div class="text-center ">
            <p class="text-4xl text-gray-900 font-bold mb-2">
              Rakesh Shankar
            </p>
            <p class="text-3xl text-gray-900 font-normal">
              Channel Head-Insurance
            </p>
          </div>

          <div className="flex gap-10 mt-5">
            <a
              href="https://www.linkedin.com/in/rakesh-shankar-9251b1245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"
              className=" text-[#0077b5] hover:text-gray-900 dark:hover:text-white text-4xl"
            >
              <FaLinkedin />
            </a>

          </div>


        </div>
      </div>

      <div className="bg-gray-100">
        <h2 className="text-[#3a41bd] text-bold text-4xl md:text-6xl text-center m-10 font-sans font-semibold">
          We are Hiring
        </h2>
        <div className="relative flex justify-center mb-20">
          <hr className="w-[100px] border-2 border-solid border-gray-400" />
        </div>

        <p className="text-gray-800 text-center text-2xl md:text-4xl font-sans mb-20">
          Are you ready to reshape fund raising for Startups in India with us. <br />
          We are eagar to hire fresh talent. <br />

          Email at <span className="underline text-bold"> info@hubalt.in</span>
        </p>
      </div>
      {/* <p className="text-gray-800 text-center text-2xl md:text-4xl font-sans mb-20">
        Our mission is to bridge the gap between promising startups and investors, empowering entrepreneurs to secure the funding required to bring their innovative ideas to life
      </p> */}



    </div>
  );
}

export default About;
