import React, { useState } from "react";
import Profile from "../assets/profile.png";
import { CgMenuRound } from "react-icons/cg";
import { MdCancel } from "react-icons/md";
import { BsSun, BsMoon } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menu, setMenu] = useState(false);

  // Sync body background color with darkMode
  if (typeof window !== "undefined") {
    document.body.style.backgroundColor = darkMode ? "#1a202c" : "#ffffff";
  }

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 h-16 shadow-md transition-colors duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
        }`}
      >
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex justify-between items-center h-16">
          {/* Profile and Branding */}
          <div className="flex items-center space-x-4">
            <img
              src={Profile}
              className="h-12 w-12 rounded-full shadow-md"
              alt="Profile"
            />
            <div>
              <h2 className="font-semibold text-xl cursor-pointer">
                Narendra{" "}
                <span
                  className={`text-2xl ${
                    darkMode ? "text-yellow-400" : "text-green-500"
                  }`}
                >
                  Kumar
                </span>
              </h2>
              <p className="text-s">Web Developer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {["Home", "About", "Skills", "Project", "Contact"].map((item) => (
              <li
                key={item}
                className={`list-none hover:scale-110 duration-300 cursor-pointer ${
                  darkMode ? "hover:text-yellow-400" : "hover:text-green-500"
                }`}
              >
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Day/Night Toggle */}
            <div
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            >
              {darkMode ? (
                <BsSun className="text-yellow-400" />
              ) : (
                <BsMoon className="text-gray-800" />
              )}
            </div>

            {/* Mobile Menu Icon */}
            <div
              onClick={() => setMenu(!menu)}
              className="md:hidden cursor-pointer"
            >
              {menu ? (
                <MdCancel size={28} className="hover:text-red-500" />
              ) : (
                <CgMenuRound size={28} />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menu && (
          <div
            className={`absolute top-16 left-0 right-0 transition-all duration-300 ${
              darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
            }`}
          >
            <ul className="flex flex-col items-center justify-center h-screen space-y-8 font-bold">
              {["Home", "About", "Skills", "Project", "Contact"].map((item) => (
                <li
                  key={item}
                  className={`hover:scale-110 duration-300 cursor-pointer ${
                    darkMode ? "hover:text-yellow-400" : "hover:text-green-500"
                  }`}
                >
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setMenu(!menu)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
