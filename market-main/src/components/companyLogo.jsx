import React from "react";
import Care_health_insurance_logo from "../assets/assets/Care_health_insurance_logo.png";
import Hubalt from "../assets/assets/logonav.png";

function CompanyLogo() {
  const logos = [
    Hubalt,
    "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/c9xvmfpvrgouk7egsjm6",
    "https://yt3.googleusercontent.com/ytc/AIf8zZSxJJEG0M6uUJJp4JgteJhVcUSf-edjsa0jygC9=s900-c-k-c0x00ffffff-no-rj",
    ,
  ];

  return (
    <>
      <div
        className=" w-full flex items-center flex-col mt-20"
        // data-aos="fade-up"
      >
        <div className="w-3/3 grid grid-cols-3  gap-8 comp-grid ">
          {logos.map((logo) => (
            <img
              src={logo}
              alt="logo"
              className="aspect-[3/2] object-contain w-80 text-black"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CompanyLogo;
