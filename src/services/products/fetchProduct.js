import { toast } from "react-toastify";
import { supabase } from "../../supabase/supabaseClients";

export const fetchAllProducts = async (queryParams, count = 4) => {
  let query = supabase.from("products").select("*").range(0, count);

  if (queryParams) {
    query.eq("productFeatures", queryParams);
  }

  const { data, error } = await query;

  if (error) {
    toast.error(error?.message);
  }
  return data;
};

export const fetchProductsWishLists = async () => {
  let query = supabase.from("products").select("*").eq("wishlist", true);

  const { data, error } = await query;

  if (error) {
    toast.error(error?.message);
  }
  return data;
};
