/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import {CustomButton }from "../../components/custombutton/CustomButton";
import { toast } from "react-toastify";

export const Logout = ({ email, Logout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    toast.success("You have logged out successfully!");
    navigate("/login");
  };

  const handleItemClick = () => {
    handleLogout();
  };

  return (
    <div className="p-6 rounded shadow-md w-80">
      <h2 className="text-2xl font-semibold mb-4">Welcome back!</h2>
      <p>You are logged in as {email}</p>
      <CustomButton
        onClick={() => handleItemClick(Logout)}
        className="bg-red-500 text-white py-2 px-4 rounded
         w-full mt-4"
      />
      Logout
    </div>
  );
};
