import { Link } from "react-router-dom";
import { CustomButton } from "./../../components/custombutton/CustomButton";
import { useForm } from "react-hook-form";

const MyAccount = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-4 py-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 lg:mb-0 lg:px-0">
          <Link
            to="/"
            className="text-sm text-black hover:underline mb-2 sm:mb-0 sm:mr-2"
          >
            Home
          </Link>
          <div className="hidden sm:block">/</div>
          <Link to="#" className="text-sm text-black hover:underline sm:ml-2">
            My Account
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start lg:px-0">
          <Link
            to="/"
            className="text-sm text-black hover:underline mb-2 sm:mb-0 sm:mr-2"
          >
            Welcome!
          </Link>
          <Link to="#" className="text-sm hover:underline sm:ml-2 text-primary">
            Md Rimel
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 min-h-[70vh]">
        <div className="space-y-4 py-10">
          <div className="space-y-3">
            <h4 className="font-semibold text-base">Manage My Account</h4>
            <div className="ml-8">
              <div className="py-2">
                <Link to="#" className="hover:text-primary text-base">
                  My Profile
                </Link>
              </div>
              <div className="py-2">
                <Link to="#" className="hover:text-primary text-base ">
                  Address Book
                </Link>
              </div>

              <div className="py-2">
                <Link to="#" className="hover:text-primary text-base ">
                  My Payment Options
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Link to="/Order" className="font-semibold text-base">
              My Orders
            </Link>
            <div className="ml-8">
              <div>
                <Link to="#" className="hover:text-primary text-base ">
                  My Returns
                </Link>
              </div>
              <div className="py-3">
                <Link
                  to="/Cancellations"
                  className="hover:text-primary text-base "
                >
                  My Cancellations
                </Link>
              </div>
            </div>
          </div>

          <div>
            <Link to="/WishList" className="font-semibold text-base">
              My WishList
            </Link>
          </div>
        </div>
        <div className="shadow-md px-2 py-10">
          <h3 className="text-primary text-lg font-medium mb-4">
            Edit Your Profile
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-4">
                <label className="text-base">First Name</label>
                <input
                  className="bg-secondary p-2 rounded focus:outline-none text-base"
                  type="text"
                  placeholder="Md"
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}

                <label className="text-base">Email</label>
                <input
                  className="bg-secondary p-2 rounded focus:outline-none text-base"
                  type="text"
                  placeholder="rimel1111@gmail.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col space-y-4">
                <label className="text-base">Last Name</label>
                <input
                  className="bg-secondary p-2 rounded focus:outline-none text-base"
                  type="text"
                  placeholder="Rimel"
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}

                <label className="text-base">Address</label>
                <input
                  className="bg-secondary p-2 rounded focus:outline-none text-base"
                  type="text"
                  placeholder="Kingston, 5236, United State"
                  {...register("address", { required: "Address is required" })}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">
                    {errors.address.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col space-y-7 mt-4">
              <label className="text-base">Password Changes</label>

              <input
                className="bg-secondary p-2 rounded focus:outline-none text-base"
                type="password"
                placeholder="Current Password"
                {...register("currentPassword", {
                  required: "Current password is required",
                })}
              />
              {errors.currentPassword && (
                <p className="text-red-500 text-sm">
                  {errors.currentPassword.message}
                </p>
              )}

              <input
                className="bg-secondary p-2 rounded focus:outline-none text-base"
                type="password"
                placeholder="New Password"
                {...register("newPassword", {
                  required: "New password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.newPassword && (
                <p className="text-red-500 text-sm">
                  {errors.newPassword.message}
                </p>
              )}

              <input
                className="bg-secondary p-2 rounded focus:outline-none text-base"
                type="password"
                placeholder="Confirm New Password"
                {...register("confirmPassword", {
                  required: "Please confirm your new password",
                  validate: (value) =>
                    value === watch("newPassword") || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </form>
          <div className="flex justify-end space-x-4 mt-4">
            <CustomButton
              className="text-base px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 bg-secondary text-black"
              text="Cancel"
              onClick={() => Link("/Cancel")}
            />
            <CustomButton
              className="text-base font-medium px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 text-white"
              text="Save Changes"
              onClick={() => Link("/Save Changes")}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default MyAccount;
