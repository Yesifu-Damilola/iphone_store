import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center flex flex-col justify-center items-center min-h-[30vh]">
      <ShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-lg font-medium text-gray-900">Your Cart is empty</h3>
      <p className="text-gray-500 mt-2">Explore more products and add them to your cart!</p>
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-6 py-3 bg-primary text-white rounded-md transition w-full md:w-[218px]"
      >
        Start shopping
      </button>
    </div>
  );
};
