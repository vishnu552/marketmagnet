import React from "react";
import baner1 from "../assets/assets/startup.png"
import baner2 from "../assets/assets/revenue.png"
import baner3 from "../assets/assets/investment.png"

function Services() {
  const services = [
    {
      img:[baner1],
      name: "Register with us",
      text: "Instant KYC to join startup investment community",
    },
    {
      img: [baner2],
      name: "Explore Available Opportunities",
      text: " Get all relevant details of available opportunities",
    },
    {
      img:[baner3],
      name: "Decide Your Investment",
      text: "Decide how much you want to Invest and decide your preferred opportunity ",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/8701/8701000.png",
      name: "You are an Angel",
      text: "Congratulations , you have taken right step",
    }
  ];

  return (
    <div
      className=" my-40 w-screen grid place-items-center bg-click "
      
    >
      
      <h1 className="text-6xl text-[#3a41bd] text-bold mb-20">Process of Investment</h1>
      <div className=" w-3/4 grid grid-cols-2 gap-10 service-grid mb-10">
        {services.map((service) => (
          <div
            className="text-center flex flex-col items-center justify-center "
            key={service.name}
          >
            <img
              src={service.img}
              alt={service.name}
              className="w-[100px] mb-4 "
            />
            <h3 className="text-3xl text-black text-bold">{service.name}</h3>
            <p className="text-2xl">{service.text}</p>
          </div>
          
        ))}
       
      </div>
      <div className="grid justify-center gap-12 mt-20 mb-20 ">
          <button
            className="btn-primary text-bold"
            onClick={() => navigate("/login")}
          >
            Join Us
          </button>
        </div>
    </div>
  );
}

export default Services;
