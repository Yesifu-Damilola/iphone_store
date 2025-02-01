import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabase/supabaseClients";

export const useFetchData = (tableName, columns = "*", filters = {}) => {
  const fetchData = async () => {
    let query = supabase.from(tableName).select(columns);

    Object.entries(filters).forEach(([key, value]) => {
      query = query.eq(key, value);
    });

    const { data, error } = await query;

    if (error) {
      throw new Error(error?.message);
    }
    return data;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [tableName, filters],
    queryFn: fetchData,
  });

  return { data, isLoading, isError, error };
};
