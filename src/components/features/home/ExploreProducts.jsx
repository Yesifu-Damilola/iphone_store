import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { FiEye, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { exploreProducts } from "../../../constants/Products";
import { CustomButton } from "../../custombutton/CustomButton";


export const ExploreProducts = () => {
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
          {exploreProducts?.map((item, index, arr) => (
            <div key={index}>
              <div className="bg-[#F5F5F5] rounded p-4 relative">
                <div className="flex items-center justify-between mb-4">
                  {item.products && (
                    <div>
                      <span className="bg-[#00FF66] text-white text-xs px-2 py-1 rounded">
                        {item.products}
                      </span>
                    </div>
                  )}
                  {(index >= arr.length - 5 || !item.products) && (
                    <div className="space-y-2">
                      <FiHeart className="bg-white border rounded-full text-xl p-1" />
                      <FiEye className="bg-white border rounded-full text-xl p-1" />
                    </div>
                  )}
                </div>

                <div className="lg:w-[180px] md:h-[190px] mx-auto">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-auto md:w-[140px] md:h-[160px] mx-auto"
                  />
                </div>
                {item.hasCartButton && (
                  <Link
                    to="#"
                    className="absolute inset-x-0 bottom-0 bg-[#000000] text-[#ffffff] text-center text-sm py-2 w-full rounded-b-md"
                  >
                    Add To Cart
                  </Link>
                )}
              </div>
              <p className="mt-4 text-base font-semibold">{item.title}</p>
              <p className="mt-2 text-sm">
                {item.price}
                {item.originalPrice && (
                  <span className="line-through text-gray-500 px-2">
                    {item.originalPrice}
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
                <span className="ml-2 text-gray-600">({item.reviews})</span>
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
