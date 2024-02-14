import React from 'react'
import banner2 from '../assets/assets/7563.jpg'
import { Link } from "react-router-dom";
function raiseslider() {
    return (
        <section className="mt-[70px] hero-background ">

            <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">

                <h1 className="relative top-[7rem] sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-5xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">"We invest first in the Founder,
                    <br className="lg:block hidden" />


                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300"> &nbsp; later in the Startup."</span>.</h1>
                <div className="lg:flex">

                    <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12 ">

                        <p className=" relative top-[5rem] sm:text-3xl text-gray-700 pl-12 dark:text-gray-300 text-3xl lg:w-11/12">
                            Early Stage Investment for....
                        </p>

                        <ul className="relative top-20  pl-20 ">
                            <li className="text-4xl leading-normal text-blue-900  list-disc">Leaders</li>
                            <li className="text-4xl leading-normal text-blue-900 list-disc">Visionaries</li>
                            <li className="text-4xl leading-normal text-blue-900 list-disc">Creators</li>
                            <li className="text-4xl leading-normal text-blue-900 list-disc">Disruptors</li>
                            <li className="text-4xl leading-normal text-blue-900 list-disc">Problem Solvers</li>
                            <li className="text-4xl leading-normal text-blue-900 list-disc">Executors</li>
                            <li className="text-4xl leading-normal text-blue-900 list-disc">Experimentalists</li>
                        </ul>

                        <br />
                        <br />
                        <br />



                    </div>



                    <div className="mt-12 md:mt-0  -right-10 lg:w-7/12">

                        <div className="relative w-full bottom-[7rem]">

                            <img src={banner2} className="relative w-full landing-img2" alt="wath illustration" loading="lazy" width="320" height="280" />

                        </div>
                    </div>


                </div>


                <div className='flex  w-full'>
                    <button
                        className="btn-primary relative top-[0rem] w-[100%] hover:bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 text-bold mb-10"
                        onClick={() => navigate("/login")}
                    >
                        Contact us on info@hubalt.in & submit your pitch deck
                    </button>
                </div>

            </div>
        </section>
    )
}

export default raiseslider
