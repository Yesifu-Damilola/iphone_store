/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { NewArrivalItem } from "../NewArrivalItem";
import { useFetchData } from "../../../hooks/useFetchData";

export const NewArrival = ({ title = "Features", subTitle = "New Arrival" }) => {
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useFetchData("products", "*", { productFeatures: "new-arrival" });

  if (isLoading) {
    return <p className="text-center">Loading new arrival products...</p>;
  }

  if (isError) {
    return <p className="text-center">Error: {error?.message}</p>;
  }

  return (
    <div className="container mx-auto p-4 pt-10">
      <div className="flex gap-x-4 items-center">
        <button className="bg-[#DB4444] border-0 rounded-sm w-5 h-10"></button>
        <span className="block text-[#DB4444] text-sm md:text-xl font-semibold py-2">
          {title}
        </span>
      </div>
      <div className="flex flex-col md:flex-row text-center md:text-left">
        {subTitle && (
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold pt-6">
              {subTitle}
            </h2>
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-x-12 my-10 w-full max-w-[1280px] mx-auto">
        {products[0] && (
          <div className="bg-[#000000] relative rounded w-full lg:w-[570px] h-auto lg:h-[600px]">
            <img
              src={products[0]?.product_images?.[0]}
              alt={products[0]?.product_name}
              className="w-full h-auto lg:w-[511px] lg:h-[511px]"
            />
            <div className="absolute bottom-0 left-0 p-4 w-full">
              <h4 className="text-xl md:text-2xl font-semibold text-left text-[#FAFAFA]">
                {products[0]?.product_name}
              </h4>
              <p className="mt-2 text-sm text-left text-[#FAFAFA]">
                {products[0]?.description}
              </p>
              <Link
                to={products[0]?.link || "#"}
                className="mt-4 py-2 text-white text-base text-left underline font-medium"
              >
                Shop Now
              </Link>
            </div>
          </div>
        )}
        <div className="w-full lg:w-auto">
          {products[1] && (
            <div className="relative bg-[#000000] rounded w-full lg:w-[570px] h-auto lg:h-[284px]">
              <img
                src={products[1]?.product_images?.[0]}
                alt={products[1]?.product_name}
                className="w-full h-auto lg:w-[472px] lg:h-[284px]"
              />
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h4 className="text-xl md:text-2xl font-semibold text-left text-[#FAFAFA]">
                  {products[1]?.product_name}
                </h4>
                <p className="mt-2 text-sm text-left text-[#FAFAFA]">
                  {products[0]?.description}
                </p>
                <Link
                  to={products[1]?.link || "#"}
                  className="mt-4 py-2 text-[#FFFFFF] font-medium text-base underline text-left"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            {products.slice(2).map((item) => (
              <div
                key={item?.id}
                className="bg-[#000000] relative rounded w-full sm:w-[270px] h-auto sm:h-[284px]"
              >
                <div className="w-full h-auto flex items-center justify-center p-4">
                  <img
                    src={item?.product_images?.[0]}
                    alt={item?.product_name}
                    className="w-full h-auto max-w-[190px]"
                  />
                </div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h4 className="text-xl md:text-2xl font-semibold text-left text-[#FAFAFA]">
                    {item?.product_name}
                  </h4>
                  <p className="mt-2 text-sm text-left text-[#FAFAFA]">
                    {item?.description}
                  </p>
                  <Link
                    to={item?.link || "#"}
                    className="mt-4 py-2 text-white text-base text-left underline font-medium"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <NewArrivalItem />
    </div>
  );
};
