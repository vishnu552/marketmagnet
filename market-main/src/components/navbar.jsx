import { useState } from "react";
import "../components/navbar.css";
import logo from "../assets/assets/MARKETS__2_-removebg-preview.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  console.log("hello world", location.pathname);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 navb-bg bg-gray-200 fixed  z-10 min-w-full">
      <div className="flex items-center flex-shrink-0 text-gray-600 mr-6  lg:mr-72">
        <div className="w-60 h-20">
          <Link to="/">
            <img className="w-full my-[-10px]" src={logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400 "
        >
          <div
            className={`fill-current text-3xl text-amber-600 ${
              isOpen ? "hidden" : "block"
            } hover:text-orange-600`}
          >
            <GiHamburgerMenu />
          </div>

          <div
            className={`fill-current text-2xl text-red-500 ${
              isOpen ? "block" : "hidden"
            } `}
          >
            <IoMdClose />
          </div>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm  lg:flex-grow">
          <ul className=" md:flex justify-end">
            <Link to="/insurance">
              <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-xl hover:text-[#3a41bd]">
                INSURENCE
              </li>
            </Link>
            <Link to="/opportunities">
              <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-xl hover:text-[#3a41bd]">
                OPPORTUNITIES
              </li>
            </Link>
            {location.pathname === "/" && (
              <li>
                <a
                  href="#aboutus"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-xl hover:text-[#3a41bd]"
                >
                  ABOUT US
                </a>
                <a
                  href="#portfolio"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-xl hover:text-[#3a41bd]"
                >
                  FAQ
                </a>
              </li>
            )}

            <Link to="/becomepartner">
              <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-xl hover:text-[#3a41bd]">
                BECOME PARTNER
              </li>
            </Link>
            <Link to="/raisefunds">
              <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-xl hover:text-[#3a41bd]">
                RAISE FUNDING
              </li>
            </Link>
            <Link to="/register">
              <li className="block mt-4 lg:inline-block lg:-mt-3 text-white mr-4 text-xl bg-[#3a41bd] p-2 rounded-md hover:shadow-lg  ">
                REGISTER
              </li>
            </Link>
            <Link to="/login">
              <li className="block mt-4 lg:inline-block lg:-mt-3 text-white mr-4 text-xl bg-[#3a41bd] p-2 rounded-md hover:shadow-lg  ">
                LOGIN
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
