import { FaArrowRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import apple from "../../../assets/images/Applelogo@3.png";
import heroiphone from "../../../assets/images/heroiphone2@3.png";
import { useState } from "react";
import { useFetchData } from "../../../hooks/useFetchData";

export const ShowCase = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    data: categories = [],
    error,
    isLoading,
    isError,
  } = useFetchData("categories", "id, name");

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <main className="container mx-auto flex flex-col items-center justify-center px-4 mb-16 ">
        <div className="flex flex-col md:flex-row gap-11  w-full">
          <button
            className="md:hidden bg-primary text-white px-4 py-2 rounded"
            onClick={toggleList}
          >
            {isOpen ? "Hide Categories" : "show Categories"}
          </button>
          <div className={`${isOpen ? "block" : "hidden"} md:block`}>
            <div className="text-black text-base space-y-4 w-full md:w-auto pt-8 ">
              {isLoading ? (
                <p>Loading categories...</p>
              ) : isError ? (
                <p>Error: {error?.message || "Unknown error occurred"}</p>
              ) : categories.length > 0 ? (
                categories.map((item) => (
                  <Link
                    key={item.id}
                    to={item.link || "#"}
                    className="flex items-center gap-x-4 md:gap-x-5 capitalize hover:text-primary"
                  >
                    {item.name} <FaAngleRight className="ml-2 md:ml-4" />
                  </Link>
                ))
              ) : (
                <p>No categories available</p>
              )}
            </div>
          </div>

          <div className="hidden md:block h-32 md:h-48 lg:h-72 xl:h-96 border-l-2 border-gray-300 mr-1 ml-10"></div>
          <div className="flex flex-col md:flex-row items-center justify-center px-1 w-full md:w-auto bg-black mt-8">
            <div className="text-center md:text-left w-full md:w-[600px] h-auto md:h-[344px] p-4 ">
              <div className="flex flex-col md:flex-row items-center md:items-start text-white text-base gap-6 mx-4 md:mx-[70px] my-4 md:my-[40px]">
                <img
                  src={apple}
                  alt="apple_logo"
                  className="w-[40px] h-[49px]"
                />
                <span className="w-auto md:w-[126px] h-auto md:h-[20px] pt-4">
                  iPhone 14 Series
                </span>
              </div>
              <div className="text-white">
                <p className="text-3xl md:text-5xl leading-tight font-semibold w-full md:w-[294px] mx-4 md:mx-[70px] mt-4 md:mt-[40px]">
                  Up to 10% off Voucher
                </p>
                <Link
                  to="#"
                  className="underline text-white flex items-center py-4 justify-center md:justify-start mx-4 md:mx-[72px] "
                >
                  Shop Now
                  <FaArrowRight className="ml-2 " />
                </Link>
              </div>
            </div>
            <div className="bg-cover w-full md:w-auto md:py-0">
              <img
                src={heroiphone}
                alt="iphone_hero"
                className="max-w-full w-full md:w-[550px] h-auto md:h-[344px]"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
