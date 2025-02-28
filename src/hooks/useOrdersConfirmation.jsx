import { useQuery } from "@tanstack/react-query";
import { useCurrentUser } from "./auth/useCurrentUser";
import { fetchOrderDetails } from "../services/orders/fetchOrderDetails";

export const useOrdersConfirmation = () => {
    const { user } = useCurrentUser();
  
    const {
      data: orders,
      isLoading,
      isError,
      error,
    } = useQuery({
      queryKey: ["orders"],
      queryFn: async () => {
        if (!user?.id) return [];
        const res = await fetchOrderDetails(user.id);
        return res.map((order) => ({
          ...order,
          status: order.status || "pending",
          shipping_address:
            order.shipping_address || "123 Main St, Apt 4B, New York, NY",
          estimated_delivery:
            order.estimated_delivery ||
            new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        }));
      },
    });
  
    const calculateTotal = () => {
      if (!orders || !Array.isArray(orders)) return 0;
      return orders.reduce((total, order) => {
        if (!order.items) return total;
        return (
          total +
          order.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
        );
      }, 0);
    };
  
    return { orders, isLoading, isError, error, calculateTotal };
  };