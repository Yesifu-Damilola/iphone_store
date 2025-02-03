import { useQuery } from "@tanstack/react-query";

export const useFetch = (fetchData, key, query, count = 4) => {
  return useQuery({
    queryKey: [key, query ?? ""],
    queryFn: async () => {
      const res = await fetchData(query, count);
      return res;
    },
  });
};


