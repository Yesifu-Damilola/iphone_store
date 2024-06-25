import { SearchIcon } from "../../../assets/icons/SearchIcon";
import { Heart } from "../../../assets/icons/Heart";
import { Cart } from "../../../assets/icons/Cart";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-white sticky top-12 md:top-16 z-10">
      <nav className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="p-auto">
            <Link
              to="/"
              className="text-black font-bold text-2xl hover:underline"
            >
              Exclusive
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6 mx-2">
            <Link
              to="/"
              className="text-black hover:text-gray-700 text-base hover:underline"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="text-black hover:text-gray-700 text-base hover:underline"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="text-black hover:text-gray-700 text-base hover:underline"
            >
              About
            </Link>
            <Link
              to="/signup"
              className="text-black hover:text-gray-700 text-base hover:underline"
            >
              Sign Up
            </Link>
          </div>

          <div className="hidden sm:flex items-center space-x-2">
            <div className="relative focus:outline-none">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="text-xs pr-12 py-3 pl-3 bg-[#F5F5F5] text-left w-auto focus:outline-none"
              />
              <Link to="" className="absolute top-0 right-0 p-2">
                <SearchIcon className="h-6 w-5 text-black" />
              </Link>
            </div>
            <Link to="" className="p-2">
              <Heart className="h-6 w-6 text-black hover:underline" />
            </Link>
            <Link to="/cart" className="p-2">
              <Cart className="h-6 w-6 text-black hover:underline" />
            </Link>
          </div>

          <button
            className="md:hidden flex items-center p-2"
            onClick={toggleNavbar}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-4`}>
          <Link
            to="/"
            className="block text-black hover:text-gray-700 text-base hover:underline"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="block text-black hover:text-gray-700 text-base mt-2 hover:underline"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="block text-black hover:text-gray-700 text-base mt-2 hover:underline"
          >
            About
          </Link>
          <Link
            to="/signup"
            className="block text-black hover:text-gray-700 text-base mt-2 hover:underline"
          >
            Sign Up
          </Link>
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="text-xs pr-12 py-3 pl-3 bg-[#F5F5F5] text-left w-full"
            />
            <Link to="" className="absolute top-0 right-0 p-2">
              <SearchIcon className="h-6 w-5 text-black" />
            </Link>
          </div>
          <div className="flex mt-4 space-x-2">
            <Link to="/heart" className="p-2">
              <Heart className="h-6 w-6 text-black" />
            </Link>
            <Link to="/cart" className="p-2">
              <Cart className="h-6 w-6 text-black" />
            </Link>
          </div>
        </div>
      </nav>
      <hr className="w-full md:w-[1440px]" />
    </header>
  );
};
