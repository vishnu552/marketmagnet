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
                <span className="text-[#fb923c] text-5xl tracking-widest ">
                  MARKET MAGNET
                </span>
                <h1 class="animated-text">
                  We invest in the companies of tomorrow to Alternative
                  Investment Opportunity Marketplace for Retail Investors.{" "}
                </h1>
                <p className=" text-[#fb923c] text-3xl tracking-widest mt-4">
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
