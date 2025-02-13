import "react-loading-skeleton/dist/skeleton.css";
import { FaArrowRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import apple from "../../../assets/images/Applelogo@3.png";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useFetch } from "../../../hooks/useFetch";
import { fetchCategories } from "../../../services/categoryApi/fetchCategories";
import { iphoneImages } from "../../../constants/Products";

export const ShowCase = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % iphoneImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const {
    data: categories = [],
    error,
    isLoading,
    isError,
  } = useFetch(fetchCategories, "categories");

  const toggleList = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <main className="container mx-auto flex flex-col items-center justify-center px-4 mb-16 ">
        <div className="flex flex-col md:flex-row gap-11 w-full">
          <button
            className="md:hidden bg-primary text-white px-4 py-2 rounded"
            onClick={toggleList}
          >
            {isOpen ? "Hide Categories" : "Show Categories"}
          </button>
          <div className={`${isOpen ? "block" : "hidden"} md:block`}>
            <div className="text-black text-base space-y-4 w-full md:w-auto pt-8 ">
              {isLoading ? (
                <div className="grid gap-y-5 ">
                  <Skeleton count={4} width={"100%"} height={20} />
                  <Skeleton count={5} width={300} height={20} />
                </div>
              ) : isError ? (
                <p>Error: {error?.message || "Failed to fetch categories"}</p>
              ) : categories?.length > 0 ? (
                categories.map((item) => (
                  <Link
                    key={item.id}
                    to={item?.link || "#"}
                    className="flex items-center gap-x-4 md:gap-x-5 capitalize hover:text-primary"
                  >
                    {item?.name} <FaAngleRight className="ml-2 md:ml-4" />
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
            <div className="bg-cover w-full md:w-auto md:py-0 relative ">
              <img
                src={iphoneImages[currentIndex]}
                alt="iphone_hero"
                className="max-w-full w-full md:w-[550px] h-auto md:h-[344px] transition-opacity duration-500"
              />
              <div className="flex md:items-left md:justify-start items-center justify-center ">
                {iphoneImages.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${
                      currentIndex === index
                        ? "bg-red-500 w-2 h-2"
                        : "bg-gray-500"
                    } transition-all duration-300`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
