/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import CartItems from "./CartItems";



const Cart = () => {


  return (
    <section className="container mx-auto py-8 px-4 md:px-8 sm:px-8">
      <div className="flex flex-col sm:flex-row items-start mb-4 py-8 lg:px-0">
        <Link
          to="/"
          className="text-sm text-black hover:underline mb-2 sm:mb-0 sm:mr-2"
        >
          Home
        </Link>
        <div className="hidden sm:block">/</div>
        <Link to="#" className="text-sm text-black hover:underline sm:ml-2">
          Cart
        </Link>
      </div>

      <CartItems />
    </section>
  );
};

export default Cart;
