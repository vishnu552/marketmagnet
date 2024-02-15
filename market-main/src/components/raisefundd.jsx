import React from 'react'
import ComponyLogo from "./companyLogo";
import help from "../assets/assets/help.png"
import bullhorn from "../assets/assets/bullhorn.png"
import service from "../assets/assets/service.png"
import adobe from "../assets/assets/adobe.jpg"
import socialcare from "../assets/assets/social-care.png"
import quick from "../assets/assets/quick.png"
import startup from "../assets/assets/startup.png"
import raise from "../assets/assets/raise.jpg"
function raisefundd() {
    return (
        <div>
            <div className="flex flex-col justify-center py-20">
                <h1 className=" text-center text-6xl text-bold text-[#3a41bd]">
                    Ongoing Funding Campaign
                </h1>
                <ComponyLogo />
            </div>

            <hr />

            <div className="flex flex-col justify-center py-20 bg-gray-100">
                <h1 className=" text-center text-6xl text-bold text-[#3a41bd] mb-10">
                    Benefits For Startups
                </h1>

                <div>
                    <div className=' flex justify-evenly w-full p-10'>
                        <div className='w-[20%] flex flex-col items-center  bg-white shadow-2xl '>
                            <img className='w-[100px]' src={help} alt="" />
                            <h1 className='text-center pt-5 text-3xl text-[#3a41bd] text-bold '>Easy Onboarding</h1>
                        </div>
                        <div className='w-[20%] flex flex-col items-center  bg-white shadow-2xl '>
                            <img className='w-[100px]' src={bullhorn} alt="" />
                            <h1 className='text-center pt-5 text-3xl text-[#3a41bd] text-bold'>Acess to potential Investors</h1>

                        </div>
                        <div className='w-[20%] flex flex-col items-center  bg-white shadow-2xl '>
                            <img className='w-[100px]' src={service} alt="" />
                            <h1 className='text-center pt-5 text-3xl text-[#3a41bd] text-bold'>Technology Support</h1>

                        </div>
                    </div>



                    <div className='w-full flex justify-center'>
                        <img className='w-[45%]' src={adobe} alt="" />
                    </div>



                    <div className=' flex justify-evenly w-full p-10'>
                        <div className='w-[20%] flex flex-col items-center  bg-white shadow-2xl '>
                            <img className='w-[100px]' src={socialcare} alt="" />
                            <h1 className='text-center pt-5 text-3xl text-[#3a41bd] text-bold'>Community Building</h1>

                        </div>
                        <div className='w-[20%] flex flex-col items-center  bg-white shadow-2xl '>
                            <img className='w-[100px]' src={quick} alt="" />
                            <h1 className='text-center pt-5 text-3xl text-[#3a41bd] text-bold'>Speedy Process</h1>

                        </div>
                        <div className='w-[20%] flex flex-col items-center  bg-white shadow-2xl '>
                            <img className='w-[100px]' src={startup} alt="" />
                            <h1 className='text-center pt-5 text-3xl text-[#3a41bd] text-bold'>Startup Growth</h1>

                        </div>
                    </div>




                </div>

            </div>
            <div className=' mt-20'>
                <h1 className='text-center text-6xl text-bold text-[#3a41bd]'>Funding Process for Startups</h1>
                <div className='mt-10 flex justify-center'>
                    <img className='w-[90%]' src={raise} alt="" />
                </div>

                <div className='flex mt-10 w-full'>
                    <button
                        className="btn-primary relative top-[0rem] w-[100%] hover:bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 text-bold mb-10"
                        onClick={() => navigate("/login")}
                    >
                        Contact us on info@hubalt.in & submit your pitch deck
                    </button>
                </div>
            </div>

            
        </div>
    )
}

export default raisefundd
