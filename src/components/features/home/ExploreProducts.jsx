/* eslint-disable react/prop-types */
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { FiEye, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CustomButton } from "../../custombutton/CustomButton";
import { AddToCartButton } from "../../AddToCartButton";
import { useFetchData } from "../../../hooks/useFetchData";


export const ExploreProducts = ({ handleAddToCart }) => {
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useFetchData("products" );

  if (isLoading) {
    return <p className="text-center">Loading explore products...</p>;
  }

  if (isError) {
    return <p className="text-center">Error: {error?.message}</p>;
  }

  return (
    <>
      <div className="container mx-auto p-4 pt-10">
        <div className="flex gap-x-4 items-center">
          <button className="bg-[#DB4444] border-0 rounded-sm w-5 h-10"></button>
          <span className="block text-[#DB4444] text-sm md:text-xl font-semibold py-2">
            Our Products
          </span>
        </div>
        <div className="flex flex-col md:flex-row text-center md:text-left justify-between items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold pt-6">
              Explore Our Products
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 my-10">
          {products?.slice(0, 15).map((item, index, arr) => (
            <div key={item.id}>
              <div className="group bg-[#F5F5F5] rounded p-4 relative">
                <div className="flex items-center justify-between mb-4">
                  {item.category && (
                    <div>
                      <span className="bg-[#00FF66] text-white text-xs px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                  )}
                  {(index >= arr.length - 5 || !item.category) && (
                    <div className="space-y-2">
                      <FiHeart className="bg-white border rounded-full text-xl p-1" />
                      <FiEye className="bg-white border rounded-full text-xl p-1" />
                    </div>
                  )}
                </div>

                <div className="lg:w-[180px] md:h-[190px] mx-auto">
                  <img
                    src={item.product_images?.[0]}
                    alt={item.product_name || "Product Image"}
                    className="w-full h-auto md:w-[140px] md:h-[160px] mx-auto"
                  />
                  <Link
                    to="#"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
                  >
                    <AddToCartButton
                      handleAddToCart={() => handleAddToCart(item)}
                    />
                  </Link>
                </div>
              </div>
              <p className="mt-4 text-base font-semibold">
                {item.product_name}
              </p>
              <p className="mt-2 text-sm">
                {`$${item.price}`}
                {item.originalPrice && (
                  <span className="line-through text-gray-500 px-2">
                    {`$${item.originalPrice}`}
                  </span>
                )}
              </p>
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
                <span className="ml-2 text-gray-600">({item.reviews ?? 0})</span>
              </div>
              {index >= arr.length - 5 && (
                <div className="flex items-center mt-2">
                  <div className="pr-2">
                    <button className="border-4 rounded-full border-black bg-[#FB1314] p-1"></button>
                  </div>
                  <div>
                    <button className="bg-[#DB4444] border-4 rounded-full border-[#DB4444] p-1"></button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex m-auto items-center justify-center py-6">
          <CustomButton
            className="text-base text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-10 lg:py-4"
            text="View All Products"
            onClick={() => Link("/ViewAllProducts")}
          />
        </div>
      </div>
    </>
  );
};
