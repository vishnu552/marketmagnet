
import Card from "../components/Card";
import Slider from "../components/slider";
import { opportunities } from "../api/opportunities";

import { useEffect, useState } from "react";


function Aif() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const handleGetOpportunities = async () => {
      try {
        const response = await opportunities();
        setItem(response.data);
      } catch (error) {
        console.error('Error getting opportunities', error.message);
      }
    };

    // Call the function to fetch opportunities when the component mounts
    handleGetOpportunities();
  }, []); // Pass an empty dependency array to run the effect only once on mount

  console.log(item, "item");

  return (
    <>
      <Slider />
      <div className="flex justify-center my-20 gap-4 ">
        <div className="">
          <select className="w-60 h-16 text-2xl">
            <option>All</option>
            <option>Venture Debt</option>
            <option>Bill Discounting</option>
            <option>Corporate Debt</option>
            <option>Asset Backed Investment</option>
            <option>Insurance Lead</option>
          </select>
        </div>
        {/* <div className="flex justify-around bg-white w-[30%] h-20 rounded-full cursor-pointer switch_1">
          <button
            className="text-3xl mx-4 hover:bg-[#41ce8e] rounded-full w-[30%]"
            onClick={() => {
              filterCard("available");
            }}
          >
            Available
          </button>
          <button
            className="text-3xl mx-4 hover:bg-[#41ce8e] w-[30%] rounded-full"
            onClick={() => {
              filterCard("funded");
            }}
          >
            funded
          </button>
        </div> */}
      </div>
      <div className="grid justify-center" data-aos="fade-up">
        <div className=" grid grid-cols-1 place-content-center  lg:grid-cols-3 md:grid-cols-2 cards_1">
          {item.map((property ,i) => (
            <Card key={i} property={property} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Aif;
