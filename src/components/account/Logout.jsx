import { Logouticon } from "../../assets/icons/Logouticon";
import { useLogout } from "../../hooks/auth/useLogout";

export const Logout = () => {
  const { isPending, mutate } = useLogout();
  return (
    <button
      className="flex gap-3 md:flex-row md:gap-x-4 py-2 cursor-pointer"
      onClick={() => mutate()}
      disabled={isPending}
    >
      <Logouticon />
      <span className="text-white text-sm md:text-base">
        {isPending ? "logging out..." : "logout"}
      </span>
    </button>
  );
};
