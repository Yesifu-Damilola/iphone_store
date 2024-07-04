import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

export const NewArrivalItem = () => {
  return (
    <div className="grid md:grid-cols-3  grid-cols-1 md:gap-8 gap-4  w-3/4 mx-auto">
      <div className=" flex justify-center items-center flex-col">
        <div className=" bg-[#000000] border-8 rounded-full border-violet-200 h-20 w-20 my-6 flex justify-center items-center">
          <FaTruckFast className="text-[#FAFAFA] w-10 h-10 m-auto" />
        </div>
        <div className="">
          <h5 className="text-base font-semibold pb-1">
            FREE AND FAST DELIVERY
          </h5>
          <p className="text-sm">Free delivery for all orders over $140</p>
        </div>
      </div>
      <div className=" justify-center items-center flex-col flex">
        <button className="bg-[#000000] border-8 rounded-full border-violet-200 h-20 w-20 my-6">
          <MdOutlineHeadsetMic className="text-[#FAFAFA] w-10 h-10 m-auto" />
        </button>
        <div className="">
          <h5 className="text-base font-semibold pb-1">
            24/7 CUSTOMER SERVICE
          </h5>
          <p className="text-sm">Friendly 24/7 customer support</p>
        </div>
      </div>
      <div className=" flex justify-center items-center flex-col">
        <button className="bg-[#000000] border-8 rounded-full border-violet-200 h-20 w-20 my-6">
          <IoShieldCheckmarkOutline className="text-[#FAFAFA] w-10 h-10 m-auto" />
        </button>
        <div className="">
          <h5 className="text-base font-semibold pb-1">MONEY BACK GUARANTEE</h5>
          <p className="text-sm">We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};
