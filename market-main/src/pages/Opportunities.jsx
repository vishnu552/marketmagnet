
import Card from "../components/Card";
import Slider from "../components/slider";
import { opportunities } from "../api/opportunities";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom"; //


function Aif() {
  const [item, setItem] = useState([]);
  const navigate = useNavigate();
  const isUserLoggedIn = localStorage.getItem("user"); 

  // useEffect(() => {
  //   if (!isUserLoggedIn) {
  //     navigate("/login"); // Change "/login" to the actual login page path
  //   }
  // }, [isUserLoggedIn, navigate]);
  
 

  useEffect(() => {
    const handleGetOpportunities = async () => {
      try {
        const response = await opportunities();
        setItem(response.data);
      } catch (error) {
        console.error('Error getting opportunities', error.message);
      }
    };
    handleGetOpportunities();
  }, []); 

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
      </div>
      {isUserLoggedIn? 
      <div className="grid justify-center" data-aos="fade-up">
        <div className=" flex  place-content-center  lg:flex-cols md:grid-cols-2 cards_1">
          {item.map((property ,i) => (
            <Card key={i} property={property} />
          ))}
        </div>
      </div>:
      <div className="grid justify-center gap-12  ">
        <h1 className="text-3xl">LOGIN TO SEE OPPORTUNITIES</h1>
        <button className="text-4xl block mt-4 lg:inline-block lg:-mt-3 text-white mr-4  bg-amber-600 p-2 rounded-md hover:shadow-lg " onClick={() =>navigate("/login")}>Login</button>
      </div>
      
          }
      
    </>
  );
}

export default Aif;
