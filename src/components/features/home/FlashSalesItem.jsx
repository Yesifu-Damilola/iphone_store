/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { FiEye, FiHeart } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { AddToCartButton } from "../../AddToCartButton";
import { useWishLists } from "../../../hooks/useWishLists";

export const FlashSalesItem = ({
  item,
  showCartIcon,
  productFeatures,
  query = "products",
}) => {
  const { isPending, mutate } = useWishLists(query, productFeatures);

  const { id } = useParams();
  // console.log(id);

  return (
    <div>
      <div className="group bg-[#F5F5F5] rounded p-4 relative">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="bg-[#DB4444] text-white text-xs px-2 py-1 rounded cursor-pointer">
              -40%
            </span>
          </div>
          <div className="space-y-2 ">
            <button className="relative z-10">
              <FiHeart
                className={` ${
                  item.wishlist
                    ? "text-white bg-red-500"
                    : "bg-white text-black"
                }
                 border rounded-full text-xl p-1 h-6 w-6 cursor-pointer z-30`}
                onClick={() => mutate(item)}
              />
            </button>
            <FiEye className="bg-white border rounded-full text-xl p-1 relative z-10  cursor-pointer" />
          </div>
        </div>
        <div className="w-[180px] h-[190px] mx-auto ">
          <Link
            to={`/flashSales/${item.id}`}
            className=" cursor-pointer relative z-10"
          >
            <img
              src={item.product_images?.[0]}
              alt={item.title}
              className=" md:w-[172px] md:h-[182px] w-[170px] h-[180px] mx-auto pb-5"
            />
          </Link>
          <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
            <AddToCartButton
              product={item}
              showCartIcon={showCartIcon}
            />
          </div>
        </div>
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
