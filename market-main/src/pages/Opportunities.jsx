import Card from "../components/Card";
import Testting from "../components/testting";
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
        console.error("Error getting opportunities", error.message);
      }
    };
    handleGetOpportunities();
  }, []);

  console.log(item, "item");

  return (
    <>
      <Slider />

      {/* cards start for insurence */}
      <div className="">
        <div className="flex flex-col justify-center py-10 bg-[#F3F4F6]">
          <h1 className=" text-center text-6xl text-bold text-[#3a41bd]">
            Types Of Insurance
          </h1>

          <div className="flex justify-center">
            <p className="text-center w-[80%] py-10 text-2xl">
              There are two main types of insurance in India: Life Insurance and
              General Insurance. Health Insurance, which is a sub-set of General
              Insurance, is also gaining prominence due to the high cost of
              medical care that needs to be covered.
            </p>
          </div>
        </div>

        <section class="pt-20 lg:pt-[30px] pb-10 lg:pb-0 bg-[#F3F4F6] flex justify-center">
          
          <div class="container w-[80%]">
            <div class="flex flex-wrap -mx-4 bronze">
              
              <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                <div class="bg-white rounded-lg overflow-hidden mb-10">
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221223125246/LIFE-INSURANCE-2.png"
                    alt="image"
                    class="w-full h-[186px]"
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
                      Life Insurance
                    </h3>
                    <p class="text-base text-body-color text-bold leading-relaxed mb-7">
                      Life Insurance is designed to protect your family
                      financially, should the worst happen. There are many
                      different types of life insurance policies available, so
                      it is important to choose one that is right for your
                      needs. Term Insurance, Endowment Policies and ULIPs are
                      some examples.
                    </p>
                    <button
                      onClick={() => navigate("/opportunities/lifeinsurance")}
                      className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     
                     hover:border-primary hover:bg-primary hover:bg-[#3a41bd] hover:text-white
                     transiation
                     "
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                <div class="bg-white rounded-lg overflow-hidden mb-10">
                  <img
                    src="https://www.magmahdi.com/documents/20127/452359/6-Truths-about-general-insurance-you-must-know.jpg"
                    alt="image"
                    class="w-full h-[186px]"
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
                      General Insurance
                    </h3>
                    <p class="text-base text-body-color text-bold leading-relaxed mb-7">
                      General insurance is designed to protect you against
                      financial losses caused by events such as accidents,
                      theft, and damage to property. Some of the most common
                      types of general insurance in India include health
                      insurance, travel insurance, motor insurance etc.
                    </p>
                    <burron
                      onClick={() => navigate("/opportunities/GenralInsurance")}
                      className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:bg-[#3a41bd] hover:text-white
                     transition
                     "
                    >
                      View Details
                    </burron>
                  </div>
                </div>
              </div>

              <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                <div class="bg-white rounded-lg overflow-hidden mb-10">
                  <img
                    src="https://images.moneycontrol.com/static-mcnews/2021/11/Health-insurance-770x433.jpg?impolicy=website&width=770&height=431"
                    alt="image"
                    class="w-full h-[186px]"
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
                      Health Insurance
                    </h3>
                    <p class="text-base text-body-color text-bold leading-relaxed mb-7">
                      Health insurance is a type of insurance that covers the
                      cost of medical expenses, such as doctor’s visits,
                      hospital stays etc. in which the insurance company agrees
                      to pay for some or all of the individual’s or group’s
                      medical expenses in exchange for a monthly premium.
                    </p>
                    <button
                      onClick={() => {
                        navigate("/opportunities/healthinsurance");
                      }}
                      className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:bg-[#3a41bd] hover:text-white
                     transition
                     "
                    >
                      View Details
                    </button>
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
          <h1 className="text-5xl text-[#3a41bd] text-bold">LOGIN TO SEE OPPORTUNITIES</h1>
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
