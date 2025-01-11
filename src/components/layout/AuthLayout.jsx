/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import phonetrolly from "../../assets/images/phonetrolly.png";
import { UserAuth } from "../../context/AuthContext";

export const AuthLayout = ({ children, title, subtitle }) => {
  const { user } = UserAuth();

  if (user && user?.id) {
    return <Navigate to={"/"} replace={true} />;
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-8 px-4 lg:px-0">
      <div className="bg-[#CBE4E8] w-full lg:w-[805px] h-auto lg:h-[781px] mb-8 lg:mb-0 lg:mr-auto">
        <img
          src={phonetrolly}
          alt="phone-trolly"
          className="w-full lg:w-[919px] h-auto lg:h-[706px]"
        />
      </div>
      <div className="w-full lg:w-auto lg:mr-auto space-y-12">
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-medium text-[#000000]">
            {title}
          </h2>
          <p className="text-base">{subtitle}</p>
        </div>

        {children}
      </div>
    </div>
  );
};
