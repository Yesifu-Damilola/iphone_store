import boombox from "../../../assets/images/boombox@3.png";

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

          <div className="flex flex-wrap justify-between mt-8">
            <div className="flex w-1/2 md:w-1/4 justify-center mb-4">
              <button className="text-[#000000] border rounded-full w-[62px] h-[62px] bg-white flex flex-col items-center justify-center">
                <p className="text-base">23</p>
                <p className="text-xs">Hours</p>
              </button>
            </div>
            <div className="flex w-1/2 md:w-1/4 justify-center mb-4">
              <button className="text-[#000000] border rounded-full w-[62px] h-[62px] bg-white flex flex-col items-center justify-center">
                <p className="text-base">05</p>
                <p className="text-xs">Days</p>
              </button>
            </div>
            <div className="flex w-1/2 md:w-1/4 justify-center mb-4">
              <button className="text-[#000000] border rounded-full w-[62px] h-[62px] bg-white flex flex-col items-center justify-center">
                <p className="text-base">59</p>
                <p className="text-xs">Minutes</p>
              </button>
            </div>
            <div className="flex w-1/2 md:w-1/4 justify-center mb-4">
              <button className="text-[#000000] border rounded-full w-[62px] h-[62px] bg-white flex flex-col items-center justify-center">
                <p className="text-base">25</p>
                <p className="text-xs">Seconds</p>
              </button>
            </div>
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
