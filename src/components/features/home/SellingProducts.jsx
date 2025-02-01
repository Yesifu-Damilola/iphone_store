/* eslint-disable react/prop-types */
import "react-loading-skeleton/dist/skeleton.css";
import { FaStar } from "react-icons/fa";
import { FiEye, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useFetchData } from "../../../hooks/useFetchData";
import { AddToCartButton } from "../../AddToCartButton";
// import SkeletonLoader from "../../SkeletonLoader";

export const SellingProducts = ({ handleAddToCart }) => {
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useFetchData("products", "*", {
    productFeatures: "best-selling-products",
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-x-4 items-center">
        <button className="bg-[#DB4444] border-0 rounded-sm w-5 h-10"></button>
        <span className="block text-[#DB4444] text-sm md:text-xl font-semibold py-2">
          This Month
        </span>
      </div>
      <div className="flex flex-col md:flex-row text-center md:text-left justify-between items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold pt-6">
            Best Selling Products
          </h2>
        </div>

        <div className="flex gap-5 pt-6 ">
          <Link
            to="#"
            className="text-sm text-[#FFFFFF] bg-[#DB4444] rounded px-8 py-3 sm:px-6 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-3"
          >
            View All
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 my-10">
        {isLoading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="bg-[#F5F5F5] rounded p-4 animate-pulse">
              <div className="w-[180px] h-[180px] bg-gray-300 mx-auto rounded"></div>
              <div className="w-3/4 h-4 bg-gray-300 rounded mt-4 ml-3"></div>
              <div className="w-1/2 h-3 bg-gray-300 rounded mt-2 ml-3"></div>
            </div>
          ))
        ) : isError ? (
          <p className="text-red-500">
            Error: {error?.message || "Something went wrong"}
          </p>
        ) : products?.length > 0 ? (
          products.map((item) => (
            <div key={item.id}>
              <div className="bg-[#F5F5F5] rounded p-4  ">
                <div className="top-0 right-0 space-y-2 mb-4 flex flex-col items-end">
                  <FiHeart className="bg-white border rounded-full text-2xl p-1 cursor-pointer" />
                  <FiEye className="bg-white border rounded-full text-2xl p-1 cursor-pointer" />
                </div>

                <div className="lg:w-[180px] lg:h-[180px] mx-auto group relative">
                  <img
                    src={item.product_images?.[0]}
                    alt={item.product_name}
                    className="w-full h-auto md:w-[172px] md:h-[152px] mx-auto"
                  />
                  <Link
                    to="#"
                    className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300  absolute inset-0 left-0 bottom-0"
                  >
                    <AddToCartButton
                      handleAddToCart={() => handleAddToCart(item)}
                    />
                  </Link>
                </div>
              </div>

              {isLoading ? (
                <div className="w-3/4 h-4 bg-gray-300 rounded mt-4 mx-auto animate-pulse"></div>
              ) : (
                <p className="mt-4 text-base font-semibold">
                  {item.product_name}
                </p>
              )}
              {isLoading ? (
                <div className="w-1/2 h-3 bg-gray-300 rounded mt-2 mx-auto animate-pulse"></div>
              ) : (
                <p className="mt-2 text-sm">
                  {`$${item.price}`}
                  <span className="line-through text-gray-500 px-2">
                    {item.originalPrice}
                  </span>
                </p>
              )}
              <div className="flex items-center mt-2 text-sm">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <FaStar
                    key={starIndex}
                    className={
                      starIndex < Math.floor(item.rating)
                        ? "text-[#FFAD33]"
                        : "text-[#bfbfbbb9]"
                    }
                  />
                ))}
                <span className="ml-2 text-gray-600">({item.reviews})</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">
            No best-selling products available.
          </p>
        )}
      </div>
    </div>
  );
};
