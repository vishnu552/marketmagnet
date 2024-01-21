import React, { useState } from "react";
import Button from "./button";
import banner from "../assets/assets/9176945_6685.jpg";

const ImageSlider = () => {
  return (

    <section className="mt-[70px] bg-[#f9f9f9]">

      <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">

        <h1 className="relative top-[7rem] sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">Run successful remote and 
        <br className="lg:block hidden" /> 

        
        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Hybrid teams</span>.</h1>
        <div className="lg:flex">

          <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12 ">
            
            <p className=" relative top-[5rem] sm:text-3xl text-gray-700 dark:text-gray-300 lg:w-11/12">
              DailyBot takes chat and collaboration to the next level: daily standups, team check-ins, surveys, kudos, best companion bot for your virtual watercooler, 1:1 intros, motivation tracking and more.
            </p>

            <span className="relative top-[5rem] block font-semibold text-2xl text-gray-500 dark:text-gray-400">The best companion bot for your chat app.</span>

            <button
            className="btn-primary relative top-[4rem] w-[160px] hover:bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300"
            onClick={() => navigate("/login")}
          >
            Join Us
          </button>
          
          </div>

          <div className="mt-12 md:mt-0  -right-10 lg:w-7/12">

            <div className="relative w-full bottom-[7rem]">

              <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg" className="relative w-full landing-img2" alt="wath illustration" loading="lazy" width="320" height="280" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
