import { toast } from "react-toastify";
import { supabase } from "../../supabase/supabaseClients";

export const fetchOrderDetails = async (userId) => {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", userId);

  if (error || !data) {
    return toast.error(error);
  }
  console.log("Fetched Order Data", data);
  return data;
};
