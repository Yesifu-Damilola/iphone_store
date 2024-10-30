/* eslint-disable react/prop-types */
import CustomButton from "../../components/custombutton/CustomButton";

export const Logout = ({ email, onLogout }) => {
  return (
    <div className=" p-6 rounded shadow-md w-80">
      <h2 className="text-2xl font-semibold mb-4">Welcome back!</h2>
      <p>You are logged in as {email}</p>
      <CustomButton
        onClick={onLogout}
        className="bg-red-500 text-white py-2 px-4 rounded
         w-full mt-4"
      />
      Logout
    </div>
  );
};
