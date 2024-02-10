import React from 'react'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import page from '../assets/assets/range.png'
function range() {
  return (
    <section className="mt-[70px] hero2-background">

    <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">

      <h1 className="relative top-[7rem] sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">Invest in startups &  
      <br className="lg:block hidden" /> 

      
      <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">be part of future Unicorns</span>.</h1>
      <div className="lg:flex">
            
        <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12 ">
            <br />
            <br />
            <br />
        <Link to="/loginsignup">
              <button
                className="btn-primary relative top-[4rem] w-[160px] hover:bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300"
                onClick={() => navigate("/login")}
              >
                Join Us
              </button>
            </Link>

        </div>


        <div className="mt-[120px] md:mt-0  -right-10 lg:w-7/12">

          <div className="relative w-full bottom-[7rem]">

            <img src={page} className="relative w-full landing-img2" alt="wath illustration" loading="lazy" width="320" height="280" />
            
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default range
