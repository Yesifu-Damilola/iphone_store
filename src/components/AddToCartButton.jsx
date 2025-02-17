/* eslint-disable react/prop-types */
import { BsCart3 } from "react-icons/bs";
import { useCart } from "../hooks/useCart";
import { toast } from "react-toastify";

export const AddToCartButton = ({
  showCartIcon = false,
  // handleAddToCart,
  className,
  product,
}) => {
  const {dispatch}= useCart()
  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity: 1 } });
    toast.success('Item added to cart!');
  };
  return (
    <div className="bg-black text-white mt-6 container">
      <button
        className={`text-xs/4 absolute z-40 items-center bottom-0  bg-[#000000] text-[#ffffff] text-center py-2 w-full rounded-b-md flex justify-center m-auto gap-4 ${className}`}
        onClick={handleAddToCart}
      >
        {showCartIcon && <BsCart3 className="text-lg" />} Add To Cart
      </button>
    </div>
  );
};
