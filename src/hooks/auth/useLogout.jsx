import { UserAuth } from "../../context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { logOut } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const { setLogout } = UserAuth();
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      setLogout();
      return navigate("/");
    },
  });
  return {
    isPending,
    mutate,
  };
};
