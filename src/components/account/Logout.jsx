import { useNavigate } from "react-router-dom";
import { Logouticon } from "../../assets/icons/Logouticon";

export const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div
      className="flex gap-3 md:flex-row md:gap-x-4 py-2 cursor-pointer"
      onClick={handleLogout}
    >
      <span>
        <Logouticon />
      </span>
      <h4 className="text-white text-sm md:text-base">logout</h4>
    </div>
  );
};
