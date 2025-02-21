import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../supabase/supabaseClients";
import { toast } from "react-toastify";

export const useWishLists = (key, query) => {
  // Access the client
  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: async (payload) => {
      const { data, error } = await supabase
        .from("products")
        .update({ wishlist: !payload.wishlist })
        .eq("id", payload.id)
        .select()
        .single();

      if (error) {
        toast.error(error.message);
      }
      return data;
    },
    onSuccess: (data) => {
    
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: [key, query ?? ""],
      });
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["products", query ?? ""],
      });
      toast.success(
        data?.wishlist
          ? "Product Added to WishList"
          : "Product Removed From Wishlist",
        {
          toastId: "cart-toast",
        }
      );
    },
  });
  return {
    isPending,
    mutate,
  };
};
