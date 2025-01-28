import { Link } from "react-router-dom";
import { CustomButton } from "../../components/custombutton/CustomButton";
import gamingmonitor from "../../assets/images/gaming_monitor@3.png";
import gamepad from "../../assets/images/gamepad@3.png";
import { useContext } from "react";
import { Shopcontext } from "../../context/ShopContext";

const headers = ["Product", "Price", "Quantity", "Subtotal"];

const Cart = () => {
  const { cartItems } = useContext(Shopcontext);

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

      <div className="space-y-10">
        <div className="shadow flex flex-row sm:flex-col md:flex-col lg:flex-row items-center justify-between p-3 space-x-5 ">
          {headers.map((header, id) => (
            <div
              key={id}
              className="text-base w-full lg:w-auto text-center lg:text-left"
            >
              {header}
            </div>
          ))}
          {/* <div className="text-base w-full lg:w-auto text-center lg:text-left">
            Price
          </div>
          <div className="text-base w-full lg:w-auto text-center lg:text-left">
            Quantity
          </div>
          <div className="text-base w-full lg:w-auto text-center lg:text-left">
            Subtotal
          </div> */}
        </div>

        <div className="shadow flex flex-row sm:flex-col md:flex-col lg:flex-row items-center justify-between p-3 px-5 space-x-2">
          <div className="w-full lg:w-auto text-center lg:text-left flex items-center justify-center lg:justify-start space-x-4">
            <img src={gamingmonitor} alt="gamingmonitor" className="w-7 h-7" />
            <p className="text-base">LCD Monitor</p>
          </div>
          <div className="text-base w-full lg:w-auto text-center lg:text-left ">
            $650
          </div>
          <div className="relative w-full lg:w-auto space-x-4">
            <select className="text-base block appearance-none w-full bg-gray-100 border border-gray-300 p-2 pr-9 rounded leading-tight focus:outline-none ">
              <option value="1">01</option>
              <option value="2">02</option>
              <option value="3">03</option>
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
            $650
          </div>
        </div>

        <div className="shadow flex flex-row sm:flex-col md:flex-col lg:flex-row items-center justify-between p-3 px-5 space-x-2">
          <div className="w-full lg:w-auto text-center lg:text-left flex items-center justify-center lg:justify-start space-x-4">
            <img src={gamepad} alt="gamepad" className="w-7 h-7" />
            <p className="text-base">H1 Gamepad</p>
          </div>
          <div className="text-base w-full lg:w-auto text-center lg:text-left">
            $550
          </div>
          <div className="relative w-full lg:w-auto space-x-4 ">
            <select className="text-base block appearance-none w-full bg-gray-100 border border-gray-300 p-2 pr-9 rounded leading-tight focus:outline-none">
              <option value="1">01</option>
              <option value="2">02</option>
              <option value="3">03</option>
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
            $1100
          </div>
        </div>
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

export default Cart;
