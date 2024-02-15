import React from "react";
import Services from "./Services";
import Form from "../components/form";
import Button from "./button";
import Slider from "./slider";
import landing from "../assets/assets/undraw_Powerful_re_frhr.png";
import landing1 from "../assets/assets/save.png";
import landing2 from "../assets/assets/stacks2.png";
import landing3 from "../assets/assets/payment.png";
import landing4 from "../assets/assets/stock.png";
function Insure() {
  return (
    // father class wrapper
    <section>
      <h1 className="text-[#3a41bd] text-6xl font-bold text-center relative top-10" data-aos="fade-up">Benefits of Investing in Startups in India</h1>
      <div className="relative flex justify-center top-20">
        <hr className="w-[100px] border-2 border-solid border-gray-400" />
      </div>
      <br />
      <br />
      <br />


      <div className="flex flex-col md:flex-row items-center p-20 " >
        {/* Left side with text */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-5xl font-bold text-[#3a41bd] ">Bright Future of Indian Startup ecosystem</h1>
          <br />
          <p className="mt-2 text-[20px] p-10">

            India is 3rd largest startup ecosystem in the world.
            <br />
            3X growth of startup investors by 2030.
            <br />
           From 500 Billion $ to 2 Trillion $ combined valuation by 2030 of Indian Startups.
           <br />
           10% GDP contribution by  startups forcasted by 2030

          </p>
         
        </div>

        {/* Right side with image */}
        <div className="md:w-1/2">
          <img
            className="object-cover w-full h-64 md:h-auto"
            src={landing}
            alt="Responsive Image"
          />
        </div>
      </div>

      {/* second  */}

      <div className="flex flex-col md:flex-row items-center p-20 border-2 bg-gray-100">
        {/* Left side with text */}

        {/* Right side with image */}
        <div className="md:w-1/2">
          <img
            className="object-cover w-full h-64 md:h-auto"
            src={landing1}
            alt="Responsive Image"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h1 className="text-5xl font-bold text-[#3a41bd] ">Benefits of Startup Investing </h1>
          <br />
          <p className="mt-2 text-[20px] p-10 ">
           Long term wealth creation.
           <br />
           Early access to start-ups with lower valuation.
           <br />
           Multifold return on your investment.
           <br />
           Diversify beyond FDs,MF and Stocks.
          </p>
        </div>
      </div>


      {/* third */}
      <div className="flex flex-col md:flex-row items-center p-20 border-2">
        {/* Left side with text */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-5xl font-bold text-[#3a41bd] ">HubAlt Solutions</h1>
          <br />
          <p className="mt-2 text-[20px] p-10">
            Access to promising Startups of various sectors.
            <br />
            End-to-end documentation support.
            <br />
            Zero commission levied by HubAlt for joining startup investor community.
            <br />
            Update on activities of invested Startups.
          </p>
        </div>

        {/* Right side with image */}
        <div className="md:w-1/2">
          <img
            className="object-cover w-full h-64 md:h-auto"
            src={landing2}
            alt="Responsive Image"
          />
        </div>
      </div>

      {/* fourth */}
      <div className="flex flex-col md:flex-row items-center p-20 border-2 bg-gray-100">
        {/* Left side with text */}

        {/* Right side with image */}
        <div className="md:w-1/2">
          <img
            className="object-cover w-full h-64 md:h-auto"
            src={landing3}
            alt="Responsive Image"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h1 className="text-5xl font-bold text-[#3a41bd] ">Enhanced Investor Protection </h1>
          <br />
          <p className="mt-2 text-[20px] p-10">
            After investment round close , get shares issued to startup investment community within regulated time in Demat or Physical form*
            <br />
            Update on Exit Solutions
          </p>
        </div>
      </div>

      {/* fifth */}

      {/* <div className="flex flex-col md:flex-row items-center p-20">
       
        <div className="md:w-1/2 p-4">
          <h1 className="text-5xl font-bold text-[#3a41bd] ">Investment Diversification</h1>
          <br />
          <p className="mt-2 text-[20px]">
            Add new edge investment tool in your
            portfolio and balance risk-reward ratio of your portfolio.
          </p>
        </div>

      
        <div className="md:w-1/2">
          <img
            className="object-cover w-full h-64 md:h-auto"
            src={landing4}
            alt="Responsive Image"
          />
        </div>
      </div> */}

    </section>
  );
}

export default Insure;
