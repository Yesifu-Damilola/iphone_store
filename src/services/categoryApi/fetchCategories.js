import { toast } from "react-toastify";
import { supabase } from "../../supabase/supabaseClients";

export const fetchCategories = async () => {
  let query = supabase.from("categories").select("*");

  const { data, error } = await query;

  if (error) {
    toast.error(error?.message);
  }
  return data;
};

export const fetchSubCategories = async () => {
  let query = supabase
    .from("subcategories")
    .select("*")
    .eq("category_id", "fc195ff6-57f1-4e8d-9a36-2b9fe503d392");

  const { data, error } = await query;

  if (error) {
    toast.error(error?.message);
  }
  return data;
};
