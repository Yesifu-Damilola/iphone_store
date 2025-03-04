/* eslint-disable react/prop-types */
import "react-loading-skeleton/dist/skeleton.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { fetchSubCategories } from "../../../services/categoryApi/fetchCategories";

export const SubCategory = ({ title, subTitle }) => {
  const {
    data: subcategories,
    isLoading,
    error,
    isError,
  } = useFetch(fetchSubCategories, "subcategories");

  return (
    <main>
      <div className="container mx-auto p-4">
        <div className="flex gap-x-4 items-center">
          <button className="bg-[#DB4444] border-0 rounded-sm w-5 h-10"></button>
          <span className="block text-[#DB4444] text-sm md:text-xl font-semibold py-2">
            {title}
          </span>
        </div>
        <div className="flex flex-col md:flex-row text-center md:text-left justify-between items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold pt-6">
              {subTitle}
            </h2>
          </div>
          <div className="flex gap-5 pt-6 ">
            <Link to="#" className="bg-[#F5F5F5] border rounded-full p-2">
              <FaArrowLeft className="h-4 w-4 text-black" />
            </Link>
            <Link to="#" className="bg-[#F5F5F5] border rounded-full p-2">
              <FaArrowRight className="h-4 w-4 text-black" />
            </Link>
          </div>
        </div>
        <div className="pt-14 pb-6">
          {isLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="border-2 rounded p-4 flex flex-col items-center w-full h-[145px] animate-pulse"
                >
                  <div className="w-16 h-16 bg-gray-300 "></div>
                  <div className="mt-4 w-3/4 h-4 bg-gray-300 "></div>
                </div>
              ))}
            </div>
          ) : isError ? (
            <p className="text-red-500 text-center">
              Error: {error?.message || "Something went wrong"}
            </p>
          ) : subcategories?.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8">
              {subcategories.map((subcategory) => (
                <div
                  key={subcategory?.id}
                  className="border-2 rounded p-4 flex flex-col items-center w-full h-[145px] hover:bg-primary transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                >
                  <img
                    src={subcategory?.images}
                    alt={subcategory?.name || "Image"}
                  />
                  <p className="mt-4 text-base">{subcategory?.name}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center col-span-full">
              No subcategories available.
            </p>
          )}
        </div>
      </div>
      <div className="w-full mt-4 mb-6">
        <hr className="border-t border-gray-300 w-full  sm:w-full md:w-[1440] lg:w-full mx-auto" />
      </div>
    </main>
  );
};
