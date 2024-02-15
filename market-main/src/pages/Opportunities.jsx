import Card from "../components/Card";
import Testting from "../components/testting";
import Slider from "../components/slider";
import Opper from "../components/opper"
import Fintech from "../assets/assets/fintech_log.png"
import Ecomm from "../assets/assets/eccom.jpg"
import Agri from "../assets/assets/agri.jpg"
import { opportunities } from "../api/opportunities";
import { Link } from "react-router-dom";
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
        console.error("Error getting opportunities", error.message);
      }
    };
    handleGetOpportunities();
  }, []);

  console.log(item, "item");

  return (
    <>
      <Opper />

      {/* cards start for insurence */}
      <div className="">
        <div className="flex flex-col justify-center py-10 bg-[#F3F4F6]">
          <h1 className=" text-center text-6xl text-bold text-[#3a41bd]">
            Available Startup Opportunities
          </h1>

          {/* <div className="flex justify-center">
            <p className="text-center w-[80%] py-10 text-2xl">
              There are two main types of insurance in India: Life Insurance and
              General Insurance. Health Insurance, which is a sub-set of General
              Insurance, is also gaining prominence due to the high cost of
              medical care that needs to be covered.
            </p>
          </div> */}
        </div>

        <section class="pt-20 lg:pt-[30px] pb-10 lg:pb-0 bg-[#F3F4F6] flex justify-center">

          <div class="container w-[80%]">
            <div class="flex flex-wrap -mx-4 bronze">

              <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                <div class="bg-white rounded-lg overflow-hidden mb-10">
                  <img
                    src={Fintech}
                    alt="image"
                    class="w-full h-[200px]"
                  />
                  <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3
                      className="
                        font-bold
                        text-[#3a41bd] text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-4xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      Fintech
                    </h3>
                    <p class="text-xl text-body-color text-bold leading-relaxed mb-7">
                      Revenue in the fintech industry are expected to grow almost 3X faster than those in the traditional sector between 2024 & 2028.
                    </p>
                    <Link to="/loginsignup">
                      <button
                        className="
                     inline-block
                     py-2
                     px-7
                     border border-[#3a41bd]
                     rounded-full
                     text-xl text-body-color
                     font-medium
                     
                     hover:border-primary hover:bg-primary hover:bg-[#3a41bd] hover:text-white
                     transiation
                     "
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                <div class="bg-white rounded-lg overflow-hidden mb-10">
                  <img
                    src={Ecomm}
                    alt="image"
                    class="w-full h-[220px]"
                  />
                  <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3
                      className="
                        font-bold
                        text-[#3a41bd] text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-4xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      Ecommerce
                    </h3>
                    <p class="text-xl text-body-color text-bold leading-relaxed mb-7">
                      Ecommerce in India is expeceted to grow at a CAGR of 50% over the next 5 years.
                    </p>
                    
                    <Link to="/loginsignup">
                      <button
                        className="
                     inline-block
                     py-2
                     px-7
                     border border-[#3a41bd]
                     rounded-full
                     text-xl text-body-color
                     font-medium
                     
                     hover:border-primary hover:bg-primary hover:bg-[#3a41bd] hover:text-white
                     transiation
                     "
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                <div class="bg-white rounded-lg overflow-hidden mb-10">
                  <img
                    src={Agri}
                    alt="image"
                    class="w-full h-[229px]"
                  />
                  <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3
                      className="
                        font-bold
                        text-[#3a41bd] text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-4xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      Agritech
                    </h3>
                     <p class="text-base text-body-color text-bold leading-relaxed mb-7">
                     Artificial Intelligence |  B2B  |  Logistics  |  Leisure & Entertainment |   & many more..
                    </p> 
                   <Link to="/loginsignup">
                      <button
                        className="
                     inline-block
                     py-2
                     px-7
                     border border-[#3a41bd]
                     rounded-full
                     text-xl text-body-color
                     font-medium
                     
                     hover:border-primary hover:bg-primary hover:bg-[#3a41bd] hover:text-white
                     transiation
                     "
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>

      {/* <Testting/> */}

      {/* cards end for insurence */}

      {/* <div className="flex justify-center my-20 gap-4 ">
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
      </div> */}
      {isUserLoggedIn ? (
        <div className="grid justify-center" data-aos="fade-up">
          <div className=" flex  place-content-center  lg:flex-cols md:grid-cols-2 cards_1">
            {item.map((property, i) => (
              <Card key={i} property={property} />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid justify-center gap-12 mt-20 mb-20 ">
          <h1 className="text-5xl text-bold text-[#3a41bd]">LOGIN TO SEE OPPORTUNITIES</h1>
          <button
            className="btn-primary"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      )}
    </>
  );
}

export default Aif;
