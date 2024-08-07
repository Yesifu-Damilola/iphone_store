/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { FiEye, FiHeart } from "react-icons/fi";
import { AddToCatButton } from "../../AddToCatButton";
import { Link } from "react-router-dom";

export const FlashSalesItem = ({ item, showCatIcon }) => {
  return (
    <div>
      <div className="bg-[#F5F5F5] rounded p-4 relative">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="bg-[#DB4444] text-white text-xs px-2 py-1 rounded">
              -40%
            </span>
          </div>
          <div className="space-y-2">
            <FiHeart className="bg-white border rounded-full text-xl p-1" />
            <FiEye className="bg-white border rounded-full text-xl p-1" />
          </div>
        </div>
        <Link to={`/products/${4}`} className="w-[180px] h-[190px] mx-auto">
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-auto md:w-[172px] md:h-[152px] mx-auto"
          />
        </Link>
        {item.hasCartButton && <AddToCatButton showCartIcon={showCatIcon} />}
      </div>
      <p className="mt-4 text-base font-semibold">{item.title}</p>
      <p className="mt-2 text-sm">
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

        {item.reviews && (
          <span className="ml-2 text-gray-600">({item.reviews})</span>
        )}
      </div>
    </div>
  );
};
