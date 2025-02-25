import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { supabase } from "../supabase/supabaseClients";

const useUpdateUserDetails = () => {
  // Access the client
  const queryClient = useQueryClient();
  const { user } = UserAuth();
  console.log(user, "hello");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      street_address: "",
      apartment: "",
      town_city: "",
      phone_number: "",
    },
  });

  useEffect(() => {
    if (user && user !== null) {
      setValue("street_address", user?.street_address);
      setValue("apartment", user?.apartment);
      setValue("town_city", user?.town_city);
      setValue("phone_number", user?.phone_number);
    }
  }, [user, setValue]);

  const { isPending, mutate } = useMutation({
    mutationFn: async (payload) => {
      if (!payload.userId) return null;
      const { data, error } = await supabase
        .from("profile")
        .update({
          apartment: payload.apartment,
          street_address: payload.street_address,
          town_city: payload.town_city,
          phone_number: payload.phone_number,
        })
        .eq("id", payload.userId)
        .select()
        .single();

      if (error || !data) {
        toast.error(error.message);
      }

      return data;
    },
    onSuccess: (data) => {
      if (data) {
        queryClient.invalidateQueries({
          queryKey: ["current-user"],
        });
        toast.success("User Details Updated");
      }
    },
  });

  const onSubmit = (data) => {
    if (!user.id) return toast.error("Please Login to update Info");
    const payload = {
      ...data,
      userId: user.id,
    };
    mutate(payload);
    // console.log(data);
  };

  return {
    register,
    handleSubmit,
    errors,
    watch,
    isPending,
    onSubmit,
    setValue,
  };
};

export default useUpdateUserDetails;
