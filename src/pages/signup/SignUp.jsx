import { useState } from "react";
import phonetrolly from "../../assets/images/phonetrolly.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components/custombutton/CustomButton";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
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
    console.log("Account created with:", formData);

    localStorage.setItem("user", JSON.stringify(formData));
    alert("Account created successfullty!");

    setFormData({
      name: "",
      email: "",
      password: "",
    });
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
            Create an account
          </h2>
          <p className="text-base">Enter your details below</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="text-base mt-1 block w-full border-0 border-b-2 border-gray-300 focus:outline-none py-2"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email or Phone Number"
              value={formData.email}
              onChange={handleChange}
              required
              className="text-base mt-1 block w-full border-0 border-b-2 border-gray-300 focus:outline-none py-2"
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
              className="text-base mt-1 block w-full border-0 border-b-2 border-gray-300 focus:outline-none py-2"
            />
          </div>
          <div className="space-y-4 text-center justify-center">
            <div className="bg-primary rounded  ">
              <CustomButton
                className="text-base py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-10 lg:py-3 px-5 text-[#FAFAFA]"
                text="Create Account"
                value="Create Account"
                type={"submit"}
                // onClick={() => Link("/CreateAccount")}
              />
            </div>

            <div className="flex text-center justify-center px-5 gap-2 border py-2">
              <div className="pt-1">
                <FcGoogle className="size-4" />
              </div>
              <div>
                <input
                  type="submit"
                  value="Sign up with Google"
                  className="rounded text-[#000000]"
                />
              </div>
            </div>

            <p>
              Already have an account?
              <Link to="/login" className="underline pl-2">
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
