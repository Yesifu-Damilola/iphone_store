import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export const CartCount = () => {
  const { cart } = useCart();

  return (
    <Link to="/cart" className="relative">
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {cart.reduce((acc, item) => acc + item.quantity, 0)}
        </span>
      )}
    </Link>
  );
};
