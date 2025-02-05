// import { toast } from "react-toastify";
// import { supabase } from "../supabase/supabaseClients";

// // eslint-disable-next-line react/prop-types
// export const getProduct = async ({ id }) => {
//   if (!id) return null;
//   const { data, error } = await supabase
//     .from("products")
//     .select("*")
//     .eq("id", id) 
//     .single();
//   if (error) return toast.error(error.message);
//   return data;
// };