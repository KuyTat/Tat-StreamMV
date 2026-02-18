import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0a0a12]/90 backdrop-blur-sm border-gray-700 border-b-[0.1px] fixed top-0 w-full h-20 z-50 text-amber-50 flex items-center font-medium px-4 md:px-8">
      <div className="flex justify-between w-full items-center">
        {/* Logo */}
        <div className="text-orange-600 font-extrabold text-xl md:text-2xl lg:text-3xl">
          Tat-StreamMV
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center text-xl">
          <li>
            <NavLink
              to="/"
              className="text-gray-400 hover:text-red-500 hover:underline underline-offset-3">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movie"
              className="text-gray-400 hover:text-red-500 hover:underline underline-offset-3">
              Movie
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-gray-400 hover:text-red-500 hover:underline underline-offset-3">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-gray-400 hover:text-red-500 hover:underline underline-offset-3">
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Explore Button */}
        <div className="hidden md:block">
          <Link
            to="/movie"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-3 rounded-xl transition">
            Explore Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full bg-[#0a0a12]/95 backdrop-blur-sm z-40 transition-all duration-300">
          <ul className="flex flex-col gap-6 py-6 text-end px-5">
            <li>
              <NavLink
                to="/"
                className="text-gray-400 hover:text-red-500 hover:underline underline-offset-3"
                onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movie"
                className="text-gray-400 hover:text-red-500 hover:underline underline-offset-3"
                onClick={() => setIsOpen(false)}>
                Movie
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-gray-400 hover:text-red-500 hover:underline underline-offset-3"
                onClick={() => setIsOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-gray-400 hover:text-red-500 hover:underline underline-offset-3"
                onClick={() => setIsOpen(false)}>
                Contact
              </NavLink>
            </li>
            {/* <li>
              <Link
                to="/movie"
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-3 rounded-xl transition mx-auto"
                onClick={() => setIsOpen(false)}>
                Explore Now
              </Link>
            </li> */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
