import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRedirect } from "../useRedirect";
import { UserAuth } from "../../context/AuthContext";

export const useSignUp = () => {
  const { setUser } = UserAuth();
  const redirect = useRedirect();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });
  const { isPending, mutate } = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      if (data?.id) {
        setUser(data);
        toast.success("Account Created Successfully");
        reset();
        return redirect("/");
      }
    },
  });

  const onSubmit = async (data) => {
    mutate(data);
  };

  return {
    isPending,
    onSubmit,
    register,
    errors,
    handleSubmit,
  };
};
