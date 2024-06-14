import { Link } from "react-router-dom";
import { useState } from "react";
import phonetrolly from "../../../assets/images/phone&trolly@2.png";

const Login = () => {
  const [formData, setFormData] = useState({
    contact: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDafault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-8 px-4 lg:px-0">
      <div className="bg-[#CBE4E8] w-full lg:w-[805px] h-auto lg:h-[781px] mb-8 lg:mb-0 lg:mr-auto flex justify-center items-center">
        <img
          src={phonetrolly}
          alt="phone-trolly"
          className="w-full lg:w-[919px] h-auto lg:h-[706px]"
        />
      </div>
      <div className="w-full lg:w-auto lg:mr-auto space-y-12">
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-medium text-[#000000]">
            Log in to Exclusive
          </h2>
          <p className="text-base">Enter your details below</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email or Phone Number"
              value={formData.email}
              onChange={handleChange}
              required
              className="text-base mt-1 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 py-2"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="text-base mt-1 block w-full border-0 border-b-2 border-gray-300 focus:ring-0 py-2"
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 text-center lg:text-left">
            <div className="bg-[#DB4444] rounded">
              <button className="px-4 my-4 text-[#FAFAFA]">Log In</button>
            </div>
            <div>
              <Link to="" className="pl-2">
                Forget Password?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
