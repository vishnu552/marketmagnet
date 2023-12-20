import React, { useState } from "react";
import goDigit from "../assets/assets/Go-Digit.jpeg";
import icici from "../assets/assets/icici.jpg";
import icici2 from "../assets/assets/ICICI2-img3.jpg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function PartnerSlider() {
  const [index, setIndex] = useState(0);
  const img = [icici, goDigit, icici2];
  const prevImg = () => {
    setIndex(() => {
      const newIndex = (index - 1 + img.length) % img.length;
      return newIndex;
    });
  };
  const nextImg = () => {
    setIndex(() => {
      const newIndex = (index + 1) % img.length;
      return newIndex;
    });
  };
  return (
    <div className="flex justify-center items-center w-full"  data-aos="fade-up">
      <div className="relative w-3/4  ">
        <h1 className="text-5xl font-medium mb-8 ">
          Meet Our <span className="text-[#e27e28]">Partners</span>
        </h1>
        <img src={img[index]} className="w-full h-[50vh]" />
        <button
          className="bg-[#e27e28] absolute left-0 top-2/4 w-12 h-12 text-2xl flex justify-center items-center text-white rounded-full"
          onClick={prevImg}
        >
          <AiOutlineLeft />
        </button>
        <button
          className="bg-[#e27e28] absolute right-0 top-2/4 w-12 h-12 text-2xl flex justify-center items-center text-white rounded-full"
          onClick={nextImg}
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
}

export default PartnerSlider;
