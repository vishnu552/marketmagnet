import React, { useState } from "react";
import Button from "./button";

const ImageSlider = () => {
  return (
    <section id="hero-section" className="py-5" data-aos="fade-up">
      <div className="conatiner-defualt">
        <div>
          <div className="">
            <div id="BoxWrapper">
              <div class="text-flow ml-8">
                <span className="text-[#3a41bd] text-7xl tracking-widest text-bold ">
                  Hub alt.
                </span>
                <h1 class="animated-text text-bold">
                  Investment Opportunity Marketplace for Retail Investors.
                </h1>
                <p className=" text-[#fff] text-4xl tracking-widest mt-3 text-bold">
                  Create Long term wealth by becoming Angel Investor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
