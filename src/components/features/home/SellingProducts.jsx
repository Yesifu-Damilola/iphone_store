import { FaStar } from "react-icons/fa";
import { FiEye, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { sellingProducts } from "../../../constants/Products";



export const SellingProducts = () => {
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
            to="/"
            className="text-sm text-[#FFFFFF] bg-[#DB4444] rounded px-8 py-3 sm:px-6 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-3"
          >
            View All
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 my-10">
        {sellingProducts?.map((item, index) => (
          <div key={index}>
            <div className="bg-[#F5F5F5] rounded p-4 relative">
              <div className="top-0 right-0 space-y-2 mb-4 flex flex-col items-end">
                <FiHeart className="bg-white border rounded-full text-2xl p-1" />
                <FiEye className="bg-white border rounded-full text-2xl p-1" />
              </div>

              <div className="lg:w-[180px] lg:h-[180px] mx-auto">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto md:w-[172px] md:h-[152px] mx-auto"
                />
              </div>
            </div>
            <p className="mt-4 text-base font-semibold">{item.title}</p>
            <p className="mt-2   text-sm">
              {item.price}
              <span className="line-through text-gray-500 px-2">
                {item.originalPrice}
              </span>
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
          </div>
        ))}
      </div>
    </div>
  );
};


