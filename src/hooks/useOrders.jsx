import { useMutation } from "@tanstack/react-query";
import { addOrders } from "../services/orders/addOrders";
import { toast } from "react-toastify";
import { useState } from "react";
import { useCart } from "./useCart";
import { useCurrentUser } from "./auth/useCurrentUser";
import { useNavigate } from "react-router-dom";

export const useOrders = () => {
  const navigate = useNavigate();

  const generateOrderRef = () => {
    const timestamp = Date.now(); // Get current timestamp
    const randomNum = Math.floor(Math.random() * 10000); // Generate a random 4-digit number
    return `ORD-${timestamp}-${randomNum}`;
  };

  console.log(generateOrderRef()); // Example: ORD-1708368897458-1234

  const [selectedPayment, setSelectedPayment] = useState("bank");
  const [couponCode, setCouponCode] = useState("");
  const { state, dispatch } = useCart();
  const { user } = useCurrentUser();
  //   console.log(user);

  const calculateTotal = () => {
    return state.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const { mutate, isPending } = useMutation({
    mutationFn: addOrders,
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
        dispatch({ type: "CLEAR_CART" });
      }
    },
  });

  const handleOrder = () => {
    if (
      !user?.apartment &&
      !user?.street_address &&
      !user?.town_city &&
      !user?.phone_number
    ) {
      return toast.error("Kindly Provide Billing Details Before Placing Order");
    }

    mutate(
      {
        items: state.items,
        payment_method: selectedPayment,
        order_ref: generateOrderRef(),
      },

      {
        onSuccess: (data) => {
          // Assuming 'data' contains the inserted order details with an ID
          if (data?.id) {
            navigate("/orders");
          }
        },
        onError: (error) => {
          toast.error("Failed to place order. Please try again.");
          console.error(error);
        },
      }
    );
  };
  return {
    mutate,
    isPending,
    selectedPayment,
    setSelectedPayment,
    couponCode,
    setCouponCode,
    calculateTotal,
    state,
    handleOrder,
  };
};
