import { toast } from "react-toastify";
import { supabase } from "../../supabase/supabaseClients";

export const addOrders = async (values) => {
  const { data, error } = await supabase
    .from("orders")
    .insert([values])
    .select()
    .single();
  if (error || !data) {
    return toast.error(error.message || "Place Order Failed, Try Again");
  }
  return {
    success: true,
    message: "Order is placed successfully ",
    data
  };
};
