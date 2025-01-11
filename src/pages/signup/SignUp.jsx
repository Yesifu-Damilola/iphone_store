import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components/custombutton/CustomButton";
import { useSignUp } from "../../hooks/auth/useSignUp";
import { AuthLayout } from "../../components/layout/AuthLayout";

const SignUp = () => {
  const { isPending, errors, handleSubmit, onSubmit, register } = useSignUp();

  return (
    <AuthLayout
      title={"Create an account"}
      subtitle={"Enter your details below"}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <div>
          <input
            {...register("fullName", { required: true })}
            aria-invalid={errors.fullName ? "true" : "false"}
            type="text"
            className="text-base mt-1 block w-full border-0 border-b-2 border-gray-300 focus:outline-none py-2"
            placeholder="Enter FullName"
          />
          {errors.fullName?.type === "required" && (
            <p role="alert" className="text-primary">
              FullName is required
            </p>
          )}
        </div>
        <div>
          <input
            {...register("email", {
              required: "Email  is required",
            })}
            aria-invalid={errors.email ? "true" : "false"}
            type="email"
            className="text-base mt-1 block w-full border-0 border-b-2 border-gray-300 focus:outline-none py-2"
            placeholder="Enter Your Email"
          />
          {errors.email && (
            <p role="alert" className="text-primary">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("password", { required: "Password is required" })}
            aria-invalid={errors.password ? "true" : "false"}
            type="password"
            className="text-base mt-1 block w-full border-0 border-b-2 border-gray-300 focus:outline-none py-2"
            placeholder="Password"
          />
          {errors.password && (
            <p role="alert" className="text-primary">
              {errors.password?.message}
            </p>
          )}
        </div>
        <div className="space-y-4 text-center justify-center">
          <button className="bg-primary rounded w-full ">
            <CustomButton
              className="text-base py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-10 lg:py-3 px-5 text-[#FAFAFA]"
              text={isPending ? "Loading..." : "Create Account"}
              type={"submit"}
              disabled={isPending}
            />
          </button>

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
    </AuthLayout>
  );
};
export default SignUp;
