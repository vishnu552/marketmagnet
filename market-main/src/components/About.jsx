import React from "react";
import Img1 from "../assets/assets/blob vector.png";
function About() {
  return (
    <div id="aboutus" className="w-full h-auto px-20  mb-20  p-12 text-justify">
      <h2 className="text-[#3a41bd] text-bold text-4xl md:text-6xl text-center m-10 font-sans font-semibold">
        About Us
      </h2>

      <div className="skill-container-right">
        <img src={Img1} className="blob-style" alt="" />
      </div>

      <p className="text-gray-800 text-2xl md:text-3xl font-sans">
        Hub alt,A digital marketplace strives to make the Alternative
        investment space more inclusive by granting retail investors access to
        the opportunities that were previously available only to the wealthy 1%.
        At the same time, we want to make it hassle free for founders to raise
        funds from registered users. We are on a mission to transform the
        landscape of investments in India by offering various Alternative
        Investment Opportunity on our platform like Angel Investment,Venture
        Debt, Corporate Debt, Invoice Discounting and other Investment products.
        We are a bridge between Investor and Investee. We believe that stability
        and growth can go hand in hand, and we are dedicated to helping you
        achieve both with our innovative approach by bringing promising
        investment opportunities.
      </p>
    </div>
  );
}

export default About;
