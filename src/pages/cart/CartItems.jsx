import { Link, useNavigate } from "react-router-dom";
import { CustomButton } from "../../components/custombutton/CustomButton";
import { useCart } from "../../hooks/useCart";
import { EmptyCart } from "../../components/emptycart/EmptyCart";
import { X } from "lucide-react";
import { toast } from "react-toastify";

const headers = ["Product", "Price", "Quantity", "Subtotal"];
const CartItems = () => {
  const { state, dispatch } = useCart();
  const carts = state?.items ?? [];
  const toastId = "";

  const handleQuantityChange = (id, newQuantity) => {
    if (toast.isActive(toastId)) return;
    dispatch({
      type: "UPDATE_CART",
      payload: { id, quantity: Number.parseInt(newQuantity, 10) },
    });
    toast.success("Item Quantity updated from cart", { toastId });
  };

  const handleRemoveItem = (id) => {
    if (toast.isActive(toastId)) return;
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
    toast.success("Item removed from cart!", { toastId });
  };

  const handleClearCart = () => {
    if (toast.isActive(toastId)) return;
    dispatch({ type: "CLEAR_CART" });
    toast.success("Cart cleared successfully!", { toastId });
  };

  const calculateTotal = () => {
    return state?.items?.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const navigate = useNavigate();

  return (
    <section className="container mx-auto">
      <div className="space-y-10">
        <div className="shadow grid grid-cols-1 sm:grid-cols-4 gap-24 md:gap-x-72  gap-y-4 md:p-2 px-2 ">
          {headers?.map((header, index) => (
            <div
              key={index}
              className="text-base w-full font-semibold py-2 md:text-center justify-between"
            >
              {header}
            </div>
          ))}
        </div>
        {/* <div className="shadow grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 sm:gap-x-8 md:gap-x-16 lg:gap-x-24 gap-y-4 p-2 sm:p-4 md:p-6 w-full">
          {headers?.map((header, index) => (
            <div
              key={index}
              className="text-sm sm:text-base font-semibold py-2 text-center"
            >
              {header}
            </div>
          ))}
        </div> */}

        {carts.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="">
            {carts?.map((item) => (
              <div
                key={item.id}
                className="shadow grid grid-cols-1 sm:grid-cols-4 gap-24 md:grid-cols-4 md:gap-x-72 gap-y-4 md:py-2 px-2 my-10 relative"
              >
                <div className="w-full md:text-center md:flex text-left md:space-x-4">
                  <img
                    src={item.product_images[0]}
                    alt={item.product_name}
                    className="w-10 h-10 md:w-8 md:h-8"
                  />
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="absolute -top-1 -left-3 bg-red-500 text-white p-[3px] rounded-full hover:bg-red-600 transition-colors mx-2"
                  >
                    <X size={10} />
                  </button>
                  <p className="text-xs pt-2 ">{item.product_name}</p>
                </div>

                <div className="text-base md:text-center">${item.price}</div>

                <div className="relative">
                  <select
                    className="text-base block appearance-none w-full  bg-gray-100 border border-gray-300 p-2 rounded leading-tight focus:outline-none"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item?.id, e.target.value)
                    }
                  >
                    {[...Array(10).keys()].map((num) => (
                      <option key={num + 1} value={num + 1} className="">
                        {num + 1}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex flex-col p-1 text-gray-700 space-y-1">
                    <svg
                      className="fill-current h-3 w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 10l5-5 5 5H5z" />
                    </svg>
                    <svg
                      className="fill-current h-3 w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M15 10l-5 5-5-5h10z" />
                    </svg>
                  </div>
                </div>

                <div className="text-base w-full py-2 md:text-center">
                  ${item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className=" flex  justify-between py-4 mt-4">
        <button className="border py-3 px-6">Return To Shop</button>
        <button
          onClick={handleClearCart}
          className="border py-3 px-6 bg-primary text-white"
        >
          Clear Cart
        </button>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-6 gap-6 py-10">
        <div className="w-full lg:w-auto">
          <CustomButton
            className="w-full text-base font-medium  bg-white border px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-24 lg:py-3 lg:text-xlg"
            text="Coupon Code"
            onClick={() => Link("/CouponCode")}
          />
        </div>
        <div className="w-full lg:w-auto">
          <CustomButton
            className="w-full text-base font-medium  px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-2 lg:px-24 lg:py-3 lg:text-xlg text-white bg-primary"
            text="Apply Coupon"
            onClick={() => Link("/ApplyCoupon")}
          />
        </div>
        <div className="lg:ml-auto">
          <div className="w-full md:w-[400px] flex flex-col shadow p-4 space-y-6 h-auto rounded">
            <h5 className="font-semibold mb-4">Cart Total</h5>
            <div className="flex justify-between mb-2">
              <div>Subtotal:</div>
              <span className="font-medium">
                ${calculateTotal().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <div>Shipping:</div>
              <div>Free</div>
            </div>
            <div className="flex justify-between mb-4">
              <div>Total:</div>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-end">
              <CustomButton
                className="text-base font-medium px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 text-white bg-primary"
                text="Proceed to Checkout"
                onClick={() => navigate("/checkout")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
