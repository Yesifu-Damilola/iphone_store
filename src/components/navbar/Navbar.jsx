import { SearchIcon } from "../../assets/icons/SearchIcon";
import { Heart } from "../../assets/icons/Heart";
import { Cart } from "../../assets/icons/Cart";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="bg-white sticky top-12 md:top-16 z-10">
      <nav className="container mx-auto p-4">
        <div className="flex text-center justify-between">
          <div className="p-auto ">
            <Link to="#" className="text-black font-bold text-2xl">
              Exclusive
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-6 mx-2">
            <Link
              to="#"
              className="text-black hover:text-gray-700 text-base underline"
            >
              Home
            </Link>
            <Link to="#" className="text-black hover:text-gray-700 text-base">
              Contact
            </Link>
            <Link to="#" className="text-black hover:text-gray-700 text-base">
              About
            </Link>
            <Link to="#" className="text-black hover:text-gray-700 text-base">
              Sign Up
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="text-xs pr-12 py-3 pl-3 bg-[#F5F5F5] text-left w-auto"
              />

              <Link to="" className="absolute top-0 right-0 p-2 ">
                <SearchIcon className="h-6 w-5 text-[#F5F5F5]" />
              </Link>
            </div>

            <Link to="" className="hidden sm:block p-2">
              <Heart className="h-6 w-6 text-black" />
            </Link>
            <Link to="" className="hidden sm:block p-2">
              <Cart className="h-6 w-6 text-black" />
            </Link>
          </div>
        </div>
      </nav>
      <hr className="w-full md:w-[1440]" />
    </header>
  );
};
