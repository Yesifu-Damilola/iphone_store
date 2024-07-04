import React from "react";
import { BsCart3 } from "react-icons/bs";

export const AddToCatButton = ({ showCartIcon = false, handleAddToCart }) => {
  return (
    <div className="bg-black text-white mt-6">
      <button
        className="text-xs/4 absolute inset-x-0 bottom-0 bg-[#000000] text-[#ffffff] text-center py-2 w-full rounded-b-md flex justify-center m-auto gap-4"
        onClick={handleAddToCart}
      >
        {showCartIcon && <BsCart3 className="text-lg" />}
        Add To Cart
      </button>
    </div>
  );
};
