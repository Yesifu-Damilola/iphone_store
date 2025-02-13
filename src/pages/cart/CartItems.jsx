import { Link } from "react-router-dom";
import { CustomButton } from "../../components/custombutton/CustomButton";
// import gamingmonitor from "../../assets/images/gaming_monitor@3.png";
// import gamepad from "../../assets/images/gamepad@3.png";
import { useCart } from "../../hooks/useCart";

const headers = ["Product", "Price", "Quantity", "Subtotal"];
const CartItems = () => {
  const { state, dispatch } = useCart();
  const carts = state?.items ?? [];

  
  const handleQuantityChange = (id, newQuantity) => {
    dispatch({
      type: "UPDATE_CART",
      payload: { id, quantity: Number.parseInt(newQuantity, 10) },
    })
  }
  return (
    <section>
      <div className="space-y-10">
        <div className="shadow flex flex-row sm:flex-col md:flex-col lg:flex-row items-center justify-between p-3 space-x-5 ">
          {headers.map((header, index) => (
            <div
              key={index}
              className="text-base w-full lg:w-auto text-center lg:text-left"
            >
              {header}
            </div>
          ))}
        </div>

        {carts?.map((item) => (
          <div
            key={item.id}
            className="shadow flex flex-row sm:flex-col md:flex-col lg:flex-row items-center justify-between p-3 px-5 space-x-2"
          >
            <div className="w-full lg:w-auto text-center lg:text-left flex items-center justify-center lg:justify-start space-x-4">
              <img
                src={item.product_images[0]}
                alt={item.product_name}
                className="w-7 h-7"
              />
              <p className="text-base">{item.product_name}</p>
            </div>

            <div className="text-base w-full lg:w-auto text-center lg:text-left">
              ${item.price}
            </div>

            <div className="relative w-full lg:w-auto space-x-4">
              <select
                className="text-base block appearance-none w-full bg-gray-100 border border-gray-300 p-2 pr-9 rounded leading-tight focus:outline-none"
                value={item.quantity}
                onChange={(e) =>  handleQuantityChange(item?.id, e.target.value)}
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex flex-col items-center justify-center px-2 text-gray-700 space-y-1">
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

            <div className="text-base w-full lg:w-auto text-center lg:text-left">
              ${item.price * item.quantity}
            </div>
          </div>
        ))}
      </div>

      <div className=" flex  justify-between py-4 mt-4">
        <div>
          <button className="border py-3 px-6">Return To Shop</button>
        </div>
        <div>
          <button className="border py-3 px-6">Update Cart</button>
        </div>
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
          <div className="w-full lg:w-[670px] flex flex-col shadow p-4 space-y-6 h-auto rounded">
            <h5 className="font-semibold mb-4">Cart Total</h5>
            <div className="flex justify-between mb-2">
              <div>Subtotal:</div>
              <div>$1750</div>
            </div>
            <div className="flex justify-between mb-2">
              <div>Shipping:</div>
              <div>Free</div>
            </div>
            <div className="flex justify-between mb-4">
              <div>Total:</div>
              <div>$1750</div>
            </div>
            <div className="flex justify-end">
              <CustomButton
                className="text-base font-medium px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 text-white bg-primary"
                text="Proceed to Checkout"
                onClick={() => Link("/ProceedToCheckout")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
