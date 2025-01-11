import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../services/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRedirect } from "../useRedirect";
import { UserAuth } from "../../context/AuthContext";

export const useSignIn = () => {
  const { setUser } = UserAuth();
  const redirect = useRedirect();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { isPending, mutate } = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      if (data?.id) {
        setUser(data);
        toast.success("Login Successfully");
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
