import { CiDollar } from "react-icons/ci";
import { FaSackDollar, FaShop } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";

export const AboutItem = () => {
  return (
    <div className="flex flex-wrap my-20 text-center justify-center md:justify-between px-6 gap-7">
      <div className="border w-full md:w-[270px] h-[230px] rounded hover:bg-primary transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <button className="bg-[#000000] border-8 rounded-full border-violet-200 h-20 w-20 my-6">
          <FaShop className="text-[#FAFAFA] w-10 h-10 m-auto" />
        </button>
        <p className="text-3xl/8 font-bold">10.5k</p>
        <p className="text-base text-center">Sallers active our site</p>
      </div>
      <div className="border w-full md:w-[270px] h-[230px] rounded hover:bg-primary transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <button className="bg-[#000000] border-8 rounded-full border-violet-200 h-20 w-20 my-6">
          <CiDollar className="text-[#FAFAFA] w-10 h-10 m-auto" />
        </button>
        <p className="text-3xl/8 font-bold ">33k</p>
        <p className="text-base text-center">
          Monthly Produduct Sale
        </p>
      </div>
      <div className="border w-full md:w-[270px] h-[230px] rounded hover:bg-primary transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <button className="bg-[#000000] border-8 rounded-full border-violet-200 h-20 w-20 my-6">
          <FiShoppingBag className="text-[#FAFAFA] w-10 h-10 m-auto" />
        </button>
        <p className="text-3xl/8 font-bold">45.5k</p>
        <p className="text-base text-center">Customer active in our site</p>
      </div>
      <div className="border w-full md:w-[270px] h-[230px] rounded hover:bg-primary transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <button className="bg-[#000000] border-8 rounded-full border-violet-200 h-20 w-20 my-6">
          <FaSackDollar className="text-[#FAFAFA] w-10 h-10 m-auto" />
        </button>
        <p className="text-3xl/8 font-bold">25k</p>
        <p className="text-base text-center">Annual gross sale in our site</p>
      </div>
    </div>
  );
};
