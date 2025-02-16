import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { Banknote, CreditCard, Truck } from "lucide-react";
import atmcard from "../../assets/images/atmcard.png"
import atmcard1 from "../../assets/images/atmcard1.png"
import atmcard2 from "../../assets/images/atmcard2.png"
import atmcard3 from "../../assets/images/atmcard3.png"

export const PaymentsSummary = () => {
  const { state } = useCart();
  const [selectedPayment, setSelectedPayment] = useState("bank");
  const [couponCode, setCouponCode] = useState("");

  const calculateTotal = () => {
    return state.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="bg-white py-6 px-2 space-y-8">
      {/* Order Items */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold border-b pb-4">Order Summary</h2>
        {state?.items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center text-gray-700"
          >
            <img
              src={item?.product_images[0]}
              alt={item.product_name}
              className="w-9 h-9 md:w-9 md:h-7 pr-2"
            />
            <span className="flex-1">{item.product_name}</span>
            <span className="tabular-nums">${item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="space-y-3 border-t pt-4">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal:</span>
          <span className="font-medium">${calculateTotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping:</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>
        <div className="flex justify-between text-lg font-bold border-t pt-4">
          <span>Total:</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="space-y-4">
        <h3 className="font-semibold">Payment Method</h3>
        {/* <div className="space-y-3">
          <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="radio"
              name="payment"
              value="bank"
              checked={selectedPayment === 'bank'}
              onChange={(e) => setSelectedPayment(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <div className="ml-4 flex items-center">
              <CreditCard className="w-5 h-5 text-gray-600 mr-3" />
              <span>Bank Transfer</span>
            </div>
          </label>

          <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={selectedPayment === 'cash'}
              onChange={(e) => setSelectedPayment(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <div className="ml-4 flex items-center">
              <Banknote className="w-5 h-5 text-gray-600 mr-3" />
              <span>Cash on Delivery</span>
            </div>
          </label>
        </div> */}
        {/* <div className="space-y-3">
          <label
            className={`flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
              selectedPayment === "bank" ? "border-blue-600 bg-blue-50" : ""
            }`}
            onClick={() => setSelectedPayment("bank")}
          >
            <div className="ml-4 flex items-center">
              <CreditCard className="w-5 h-5 text-gray-600 mr-3" />
              <span>Bank Transfer</span>
            </div>
          </label>

          <label
            className={`flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
              selectedPayment === "cash" ? "border-blue-600 bg-blue-50" : ""
            }`}
            onClick={() => setSelectedPayment("cash")}
          >
            <div className="ml-4 flex items-center">
              <Banknote className="w-5 h-5 text-gray-600 mr-3" />
              <span>Cash on Delivery</span>
            </div>
          </label>
        </div> */}
        <div className="space-y-3">
          <div
            className={`flex items-center justify-between p-4 cursor-pointer transition-colors ${
              selectedPayment === "bank" ? "border-blue-500" : ""
            }`}
            onClick={() => setSelectedPayment("bank")}
          >
            <div className="flex">
            <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center">
              {selectedPayment === "bank" && (
                <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
              )}
            </div>
            <div className="ml-2 flex">
              <CreditCard className="w-5 h-5 text-gray-600 mr-2" />
              <span>Bank</span> 
            </div>
            </div>
              <div className="flex gap-2 ">
                <img src={atmcard} alt={atmcard} className="w-10 h-7" />
                <img src={atmcard1} alt={atmcard1}  className="w-10 h-7"/>
                <img src={atmcard2} alt={atmcard2} className="w-10 h-7" />
                <img src={atmcard3} alt={atmcard3}  className="w-10 h-7"/>
              </div>
          </div>

          <div
            className={`flex items-center p-4 cursor-pointer transition-colors ${
              selectedPayment === "cash" ? "border-blue-500" : ""
            }`}
            onClick={() => setSelectedPayment("cash")}
          >
            <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center">
              {selectedPayment === "cash" && (
                <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
              )}
            </div>
            <div className="ml-2 flex items-center">
              <Banknote className="w-5 h-5 text-gray-600 mr-3" />
              <span>Cash on Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Coupon and Place Order */}
      <div className="space-y-4">
        <div className="flex gap-3">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Coupon Code"
            className="flex-1 px-2 py-2 border rounded-lg focus:outline-none md:w-[300px] w-[150px]"
          />
          <button className="px-2 py-2 bg-primary text-white rounded-lg transition-colors w-[300px]">
          Apply Coupon
          </button>
        </div>

        <button className="w-full px-6 py-3 bg-primary text-white rounded-lg transition-colors flex items-center justify-center space-x-2">
          <Truck className="w-5 h-5" />
          <span>Place Order</span>
        </button>
      </div>
    </div>
  );
};
