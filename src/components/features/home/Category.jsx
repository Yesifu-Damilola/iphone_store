import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FiCamera } from "react-icons/fi";
import { CiHeadphones } from "react-icons/ci";
import { TbDeviceGamepad } from "react-icons/tb";
import { TbDeviceWatchStats } from "react-icons/tb";
import { Link } from "react-router-dom";

export const Category = () => {
  return (
    <main>
      <div className="container mx-auto p-4">
        <div className="flex gap-x-4 items-center">
          <button className="bg-[#DB4444] border-0 rounded-sm w-5 h-10"></button>
          <span className="block text-[#DB4444] text-sm md:text-xl font-semibold py-2">
            Categories
          </span>
        </div>
        <div className="flex flex-col md:flex-row text-center md:text-left justify-between items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold pt-6">
              Browse By Category
            </h2>
          </div>
          <div className="flex gap-5 pt-6 ">
            <Link to="#" className="bg-[#F5F5F5] border rounded-full p-2">
              <FaArrowLeft className="h-4 w-4 text-black" />
            </Link>
            <Link to="#" className="bg-[#F5F5F5] border rounded-full p-2">
              <FaArrowRight className="h-4 w-4 text-black" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8 pt-14 pb-6">
          <div className="border-2 rounded p-4 flex flex-col items-center w-full h-[145px]">
            <CiMobile4 className="text-6xl" />
            <p className="mt-4 text-base">Phones</p>
          </div>
          <div className="border-2 rounded p-4 flex flex-col items-center w-full h-[145px]">
            <HiOutlineComputerDesktop className="text-6xl" />
            <p className="text-base mt-4">Computers</p>
          </div>
          <div className="border-2 rounded p-4 flex flex-col items-center w-full h-[145px">
            <TbDeviceWatchStats className="text-6xl" />
            <p className="text-base mt-4">SmartWatch</p>
          </div>
          <div className=" rounded p-4 flex flex-col items-center w-full h-[145px] text-white bg-[#DB4444]">
            <FiCamera className="text-6xl" />
            <p className="text-base mt-4">Camera</p>
          </div>
          <div className="border-2 rounded p-4 flex flex-col items-center w-full h-[145px]">
            <CiHeadphones className="text-6xl" />
            <p className="text-base mt-4">HeadPhones</p>
          </div>
          <div className="border-2 rounded p-4 flex flex-col items-center w-full h-[145px]">
            <TbDeviceGamepad className="text-6xl" />
            <p className="text-base mt-4 ">Gaming</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-4 mb-6">
        <hr className="border-t border-gray-300 w-full  sm:w-full md:w-[1440] lg:w-full mx-auto" />
      </div>
    </main>
  );
};
