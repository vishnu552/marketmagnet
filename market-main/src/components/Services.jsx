import React from "react";

function Services() {
  const services = [
    {
      img: "https://www.financialsketchers.com/images/fs/cp.png",
      name: "Register with us",
      text: "Instant KYC to start your Investment Journey",
    },
    {
      img: "https://www.financialsketchers.com/images/fs/hni1.png",
      name: "Explore Available Opportunities",
      text: " Get all relevant details of available opportunities",
    },
    {
      img: "https://www.financialsketchers.com/images/fs/me.png",
      name: "Decide Your Investment",
      text: "Decide how much you want to Invest",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/8701/8701000.png",
      name: "You are Angel",
      text: "Congratulations ,you are Angel Investor now",
    }
  ];

  return (
    <div
      className=" my-40 w-screen grid place-items-center "
      data-aos="fade-up"
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
            <h3 className="text-2xl text-gray-600">{service.name}</h3>
            <p className="text-xl">{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
