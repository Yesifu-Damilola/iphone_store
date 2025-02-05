import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabase/supabaseClients";

export const useFetchProductDetails = ({ apiName, key, value }) => {
  const fetchProductDetails = async () => {
    if (!apiName || !key || !value) return null;

    const { data, error } = await supabase
      .from(apiName)
      .select("*")
      .eq(key, value)
      .single();

    if (error) {
      console.log(error);
      throw new Error(error.message);
    }
    return data;
  };
  return useQuery({
    queryKey: [apiName, key, value],
    queryFn: fetchProductDetails,
    enabled: !!apiName && !!key && !!value,
  });
};
