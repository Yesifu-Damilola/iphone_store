/* eslint-disable no-unused-vars */
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";

const STORAGE_KEY = "checkoutFormData";

export const BillingsDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const saveInfo = watch("saveInfo");

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.entries(parsedData).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [setValue]);

  const onSubmit = useCallback((data) => {
    if (data.saveInfo) {
      const {
        firstName,
        companyName,
        streetAddress,
        apartment,
        city,
        phoneNumber,
        email,
      } = data;
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          firstName,
          companyName,
          streetAddress,
          apartment,
          city,
          phoneNumber,
          email,
        })
      );
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
    console.log("Form submitted:", data);
  }, []);

  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
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
        </div>

        <div className="space-y-2 md:col-span-2">
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700"
          >
            Company Name
          </label>
          <input
            {...register("companyName")}
            type="text"
            className="md:w-[470px] w-full p-2 border-none bg-secondary rounded-md focus:outline-none"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label
            htmlFor="streetAddress"
            className="block text-sm font-medium text-gray-700"
          >
            Street Address*
          </label>
          <input
            {...register("streetAddress", {
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
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            Town/City*
          </label>
          <input
            {...register("city", { required: "City is required" })}
            type="text"
            className="w-full md:w-[470px] p-2 border-none bg-secondary rounded-md focus:outline-none"
          />
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number*
          </label>
          <input
            {...register("phoneNumber", {
              required: "Phone number is required",
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

        <div className="space-y-2 md:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address*
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
            type="email"
            className="w-full md:w-[470px] p-2 border-none bg-secondary rounded-md focus:outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="flex items-center space-x-2 ">
            <input
              type="checkbox"
              {...register("saveInfo")}
              className="appearance-none w-5 h-5 border border-gray-300 rounded bg-white checked:bg-[#DB4444] checked:border-transparent focus:outline-none relative 
                  checked:after:content-['✔'] checked:after:absolute checked:after:text-white checked:after:text-sm checked:after:left-[4px]"
            />
            <span className="text-sm text-gray-700  ">
              Save this information for faster check-out next time
            </span>
          </label>
        </div>
      </div>

      {/* <div className="mt-6">
        <button
          type="submit"
          className="w-full md:w-[470px] bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none"
        >
          Complete Order
        </button>
      </div> */}
    </form>
  );
};
