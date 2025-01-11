import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components/custombutton/CustomButton";
import { useSignIn } from "../../hooks/auth/useSignIn";
import { AuthLayout } from "../../components/layout/AuthLayout";

const Login = () => {
  const { isPending, onSubmit, register, errors, handleSubmit } = useSignIn();

  return (
    <AuthLayout
      title={" Log in to Exclusive"}
      subtitle={"Enter your details below"}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <div>
          <input
            id="email"
            type="email"
            {...register("email", { required: "email is required" })}
            placeholder="Enter your email"
            className="text-base mt-1 block w-full border-0 border-b-2 border-gray-300 focus:outline-none  py-2"
          />
          {errors.email && (
            <span className="text-red-500">{errors?.email.message}</span>
          )}
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="text-base mt-1 block w-full border-0 border-b-2 border-gray-300 focus:outline-none  py-2"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 7,
                message: "Password must be at least 7 character long",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500">{errors?.password.message}</span>
          )}
        </div>
        <div className="flex items-center justify-between m-auto">
          <CustomButton
            text={isPending ? "loading..." : "login"}
            type={"submit"}
            className="text-base text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-10 lg:py-4"
          />

          <ToastContainer />
          <div>
            <Link to="/" className="pl-2">
              Forget Password?
            </Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};
export default Login;
