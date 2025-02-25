import useUpdateUserDetails from "../../hooks/useUpdateUserDetails";

export const CheckOutForm = () => {
  const { register, handleSubmit, errors, watch, isPending, onSubmit } =
    useUpdateUserDetails();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* <div className="space-y-2">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name*
          </label>
          <input
            {...register("firstName", {
              required: "First name is required",
            })}
            type="text"
            className="w-full md:w-[470px] p-2 border-none bg-secondary  rounded-md focus:outline-none"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div> */}

        <div className="space-y-2 md:col-span-2">
          <label
            htmlFor="street_address"
            className="block text-sm font-medium text-gray-700"
          >
            Street Address*
          </label>
          <input
            {...register("street_address", {
              required: "Street address is required",
            })}
            type="text"
            className="w-full md:w-[470px] p-2 border-none bg-secondary rounded-md focus:outline-none"
          />
          {errors.streetAddress && (
            <p className="text-red-500 text-sm">
              {errors.streetAddress.message}
            </p>
          )}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label
            htmlFor="apartment"
            className="block text-sm font-medium text-gray-700"
          >
            Apartment, floor, etc. (optional)
          </label>
          <input
            {...register("apartment")}
            type="text"
            className="w-full md:w-[470px] p-2 border-none bg-secondary rounded-md focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="town_city"
            className="block text-sm font-medium text-gray-700"
          >
            Town/City*
          </label>
          <input
            {...register("town_city", { required: "Town/City is required" })}
            type="text"
            className="w-full md:w-[470px] p-2 border-none bg-secondary rounded-md focus:outline-none"
          />
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label
            htmlFor="phone_number"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number*
          </label>
          <input
            {...register("phone_number", {
              required: "Phone Number is required",
              pattern: {
                value: /^[0-9+-]+$/,
                message: "Please enter a valid phone number",
              },
            })}
            type="tel"
            className="w-full md:w-[470px] p-2 border-none bg-secondary rounded-md focus:outline-none"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label
            type="submit"
            onClick={() => setValue("saveInfo", !watch("saveInfo"))}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <input
              type="checkbox"
              {...register("saveInfo")}
              checked={watch("saveInfo")}
              readOnly
              className="appearance-none w-5 h-5 border border-gray-300 rounded bg-white checked:bg-primary checked:border-transparent focus:outline-none relative
                checked:after:content-['✔'] checked:after:absolute checked:after:text-white checked:after:text-sm checked:after:left-[4px]"
            />
            <span className="text-sm text-gray-700">
              Save this information for faster check-out next time
            </span>
          </label>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full md:w-[470px] bg-primary text-white py-3 px-4 rounded-md   focus:outline-none"
          disabled={isPending}
        >
          {isPending ? "Loading..." : " Save Details"}
        </button>
      </div>
    </form>
  );
};
