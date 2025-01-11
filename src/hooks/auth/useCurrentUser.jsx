import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/auth";
import { UserAuth } from "../../context/AuthContext";
import { useEffect } from "react";

export const useCurrentUser = () => {
  const { setUser, user } = UserAuth();
  const { data, isLoading, status } = useQuery({
    queryKey: ["current-user"],
    queryFn: getCurrentUser,
  });

  useEffect(() => {
    if (data && status === "success") {
      setUser(data);
    }
  }, [data, status, setUser]);
  console.log(user);
  return {
    user,
    isLoading,
  };
};
