import boombox from "../../../assets/images/boombox@3.png";
import { CountdownTimer } from "../../timer Component/CountdownTimer";

export const MusicExperience = () => {
  return (
    <div className="container mx-auto md:p-4">
      <div className="flex flex-col lg:flex-row items-center justify-center bg-[#000000] w-full lg:w-full h-auto lg:h-[500px] mx-auto p-4 lg:p-0">
        <div className="text-center lg:text-left lg:mr-20">
          <p className="text-[#00FF66] text-base/5 leading-5 font-semibold my-8">
            categories
          </p>

          <p className="text-[#FAFAFA] text-3xl md:text-5xl font-semibold leading-snug md:leading-12 tracking-wide w-full lg:w-[443px]">
            Enhance Your Music Experience
          </p>

          <div className="py-4">
            <CountdownTimer
              targetDate="2025-03-30T23:59:59"
              className="text-white"
            />
          </div>

          <div className="mt-10">
            <button className="text-base text-[#FAFAFA] rounded bg-[#00FF66] w-full lg:w-[171px] py-4 px-12">
              Buy Now
            </button>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 w-full lg:w-[600px] flex justify-center lg:justify-end">
          <img
            src={boombox}
            alt="boombox"
            className="w-full lg:w-[568px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};
