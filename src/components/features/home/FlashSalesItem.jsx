/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "react-loading-skeleton/dist/skeleton.css";
import { FaStar } from "react-icons/fa";
import { FiEye, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AddToCartButton } from "../../AddToCartButton";

export const FlashSalesItem = ({
  item,
  handleAddToCart,
  showCartIcon,
 
}) => {
  return (
    <div>
      <div className="group bg-[#F5F5F5] rounded p-4 relative">
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
        <Link to={`/products/${4}`} className="w-[180px] h-[190px] mx-auto ">
          <img
            src={item.product_images?.[0]}
            alt={item.title}
            className="w-full h-auto md:w-[172px] md:h-[152px] mx-auto pb-5"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
            <AddToCartButton
              handleAddToCart={handleAddToCart}
              showCartIcon={showCartIcon}
            />
          </div>
        </Link>
      </div>
      <p className="mt-4 text-base font-semibold">{item.product_name}</p>
      <p className="mt-2 text-sm">
        {`$${item.price}`}
        <span className="line-through text-gray-500 px-2">
          {`$${item.originalPrice}`}
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
