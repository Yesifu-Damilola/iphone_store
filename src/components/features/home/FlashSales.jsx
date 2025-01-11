/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
// import { useRedirect } from "./../../../hooks/useRedirect";
import { FlashSalesItem } from "./FlashSalesItem";
import { Link, useNavigate } from "react-router-dom";
import { CustomButton } from "../../../components/custombutton/CustomButton";

const strongElements = document.querySelectorAll("#timeContainer strong");

strongElements.forEach((element, index) => {
  if (index !== strongElements.length - 1) {
    element.insertAdjacentHTML("afterend", "");
  }
});

export const FlashSales = ({
  title,
  subTitle,
  type = "home",
  className = "lg:grid-cols-5 my-10",
  products,
  showCartIcon,
}) => {
  const navigate = useNavigate();
  // const Link = useRedirect();
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center gap-x-4 md:gap-x-[87px] ">
            <div className="flex flex-col items-center md:items-start gap-y-8 text-center md:text-left mb-4 md:mb-0">
              <div className="flex gap-x-4 items-center">
                <button className="bg-[#DB4444] border-0 rounded-sm w-5 h-10"></button>
                <span className="block text-[#DB4444] text-sm md:text-xl font-semibold py-2">
                  {title}
                </span>
              </div>
              {subTitle && (
                <div>
                  <h2 className="text-2xl md:text-4xl font-semibold">
                    {subTitle}
                  </h2>
                </div>
              )}
            </div>
            {subTitle && (
              <div
                className="flex justify-between w-full sm:w-[250px] md:w-[302px] h-[50px] pt-4 sm:pt-6 md:pt-8 gap-x-2 md:gap-x-4"
                id="timeContainer"
              >
                <div className="text-center">
                  <p className="text-xs md:text-sm">Days</p>
                  <strong className="text-3xl md:text-2xl">
                    03 <span className="text-[#E07575]"> : </span>
                  </strong>
                </div>
                <div className="text-center">
                  <p className="text-xs md:text-sm">Hours</p>
                  <strong className="text-3xl md:text-2xl">
                    23 <span className="text-[#E07575]"> : </span>
                  </strong>
                </div>
                <div className="text-center">
                  <p className="text-xs md:text-sm">Minutes</p>
                  <strong className="text-3xl md:text-2xl">
                    19 <span className="text-[#E07575]"> : </span>
                  </strong>
                </div>
                <div className="text-center">
                  <p className="text-xs md:text-sm"> Seconds </p>
                  <strong className="text-3xl md:text-2xl">56</strong>
                </div>
              </div>
            )}
          </div>
          {type === "home" ? (
            <div className="flex gap-5 mt-4 md:mt-0 pt-6 md:pt-0">
              <Link to="#" className="bg-[#F5F5F5] border rounded-full p-2 ">
                <FaArrowLeft className="h-4 w-4 text-black" />
              </Link>
              <Link to="#" className="bg-[#F5F5F5] border rounded-full p-2">
                <FaArrowRight className="h-4 w-4 text-black" />
              </Link>
            </div>
          ) : null}
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2  gap-4 ${className}`}>
          {products?.map((item, index) => (
            <FlashSalesItem
              item={item}
              key={index}
              showCartIcon={showCartIcon}
            />
          ))}
        </div>

        {type === "home" ? (
          <div className="flex m-auto items-center justify-center py-6">
            <CustomButton
              className="text-sm text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-10 lg:py-4"
              text="View All Products"
              onClick={() => navigate("/products")}
            />
          </div>
        ) : null}
      </div>

      {type === "home" ? (
        <div className="w-full my-4">
          <hr className="border-t border-gray-300 w-full  sm:w-full md:w-[1440] lg:w-full mx-auto" />
        </div>
      ) : null}
    </>
  );
};
