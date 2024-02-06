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
      <h1 className="text-[#3a41bd] text-5xl text-bold text-center relative top-10">Why you should invest in Startups</h1>

      <div className="flex flex-col md:flex-row items-center p-20 ">
        {/* Left side with text */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-5xl font-bold text-[#3a41bd] ">Benefit of being Angel Investor</h1>
          <br />
          <p className="mt-2 text-[20px]">
            Early access to start-ups with lower valuation
            hence chance to get more than 50% returns annually.
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

      <div className="flex flex-col md:flex-row items-center p-20 border-2">
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
          <h1 className="text-5xl font-bold text-[#3a41bd] ">No Fee</h1>
          <br />
          <p className="mt-2 text-[20px]">
            Zero commission charge levied by HubAlt for direct investment into
            the start-ups.
          </p>
        </div>
      </div>


      {/* third */}
      <div className="flex flex-col md:flex-row items-center p-20 border-2">
        {/* Left side with text */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-5xl font-bold text-[#3a41bd] ">Get Equity &amp; Name on the Cap-table</h1>
          <br />
          <p className="mt-2 text-[20px]">
            Angel Investor get their name on the
            cap-table of startup*
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
      <div className="flex flex-col md:flex-row items-center p-20 border-2">
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
          <h1 className="text-5xl font-bold text-[#3a41bd] ">Shares issued Physically or in Demat Account</h1>
          <br />
          <p className="mt-2 text-[20px]">
            After deal completion Shares
            issued to investor within regulated time in Demat or Physical form*
          </p>
        </div>
      </div>

      {/* fifth */}

      <div className="flex flex-col md:flex-row items-center p-20">
        {/* Left side with text */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-5xl font-bold text-[#3a41bd] ">Investment Diversification</h1>
          <br />
          <p className="mt-2 text-[20px]">
            Add new edge investment tool in your investment
            portfolio and balance risk-reward ratio of your portfolio.
          </p>
        </div>

        {/* Right side with image */}
        <div className="md:w-1/2">
          <img
            className="object-cover w-full h-64 md:h-auto"
            src={landing4}
            alt="Responsive Image"
          />
        </div>
      </div>

    </section>
  );
}

export default Insure;
