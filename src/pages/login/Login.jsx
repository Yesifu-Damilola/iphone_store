import { useState } from "react";
import phonetrolly from "../../assets/images/phonetrolly.png";

import { Link } from "react-router-dom";
import { CustomButton } from "../../components/custombutton/CustomButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "")
      return setError({
        email: "Email is required",
      });

    if (password.trim() === "" && email)
      return setError({
        password: "Password is required",
        email: "",
      });
    const data = {
      email,
      password,
    };
    alert("login successfully");
    localStorage.setItem("auth", JSON.stringify(data));
    setError({});
    setEmail("");
    setPassword("");
  };

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
            Log in to Exclusive
          </h2>
          <p className="text-base">Enter your details below</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="text-base mt-1 block w-full border-0 border-b-2 border-gray-300 focus:outline-none  py-2"
            />
            {error.email && (
              <small className="text-red-500">{error?.email}</small>
            )}
          </div>
          <div>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="text-base mt-1 block w-full border-0 border-b-2 border-gray-300 focus:outline-none  py-2"
            />
            {error.password && (
              <small className="text-red-500">{error?.password}</small>
            )}
          </div>
          <div className="flex items-center justify-between m-auto">
            <CustomButton
              text="Log In"
              type={"submit"}
              className="text-base text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-10 lg:py-4"
            />
            <div>
              <Link to="/" className="pl-2">
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
