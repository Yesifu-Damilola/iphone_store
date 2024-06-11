import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const NewArrival = () => {
  return (
    <div className="container mx-auto p-4 pt-10">
      <div className="flex gap-x-4 items-center">
        <button className="bg-[#DB4444] border-0 rounded-sm w-5 h-10"></button>
        <span className="block text-[#DB4444] text-sm md:text-xl font-semibold py-2">
          Featured
        </span>
      </div>
      <div className="flex flex-col md:flex-row text-center md:text-left">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold pt-6">
            New Arrival
          </h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-x-12 my-10 w-full max-w-[1280px] mx-auto">
        <div className="bg-[#000000] relative rounded w-full lg:w-[570px] h-auto lg:h-[600px]">
          <img
            src="src/assets/images/ps5-slim-goedkope-playstation_large 1@2.png"
            alt="PS5"
            className="w-full h-auto lg:w-[511px] lg:h-[511px]"
          />
          <div className="absolute bottom-0 left-0 p-4 w-full">
            <h4 className="text-xl md:text-2xl font-semibold text-left text-[#FAFAFA]">
              PlayStation 5
            </h4>
            <p className="mt-2 text-sm text-left text-[#FAFAFA]">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link
              to="/"
              className="mt-4 py-2 text-white text-base text-left underline font-medium"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-auto">
          <div className="relative bg-[#000000] rounded w-full lg:w-[570px] h-auto lg:h-[284px]">
            <img
              src="src/assets/images/attractive-woman-wearing-hat-posing-black-background 1@2.png"
              alt="woman-wearing-hat"
              className="w-full h-auto lg:w-[472px] lg:h-[284px]"
            />
            <div className="absolute bottom-0 left-0 p-4 w-full">
              <h4 className="text-xl md:text-2xl font-semibold text-left text-[#FAFAFA]">
                Women’s Collections
              </h4>
              <p className="mt-2 text-sm text-left text-[#FAFAFA]">
                Featured woman collections that give you another vibe.
              </p>
              <Link
                to="/"
                className="mt-4 py-2 text-[#FFFFFF] font-medium text-base underline text-left"
              >
                Shop Now
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <div className="bg-[#000000] relative rounded w-full sm:w-[270px] h-auto sm:h-[284px]">
              <div className="w-full h-auto flex items-center justify-center p-4">
                <img
                  src="src/assets/images/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1@2.png"
                  alt="echo"
                  className="w-full h-auto max-w-[190px]"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h4 className="text-xl md:text-2xl font-semibold text-left text-[#FAFAFA]">
                  Speakers
                </h4>
                <p className="mt-2 text-sm text-left text-[#FAFAFA]">
                  Amazon wireless speakers
                </p>
                <Link
                  to="/"
                  className="mt-4 py-2 text-white text-base text-left underline font-medium"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="bg-[#000000] relative rounded w-full sm:w-[270px] h-auto sm:h-[284px]">
              <div className="w-full h-auto flex items-center justify-center p-4">
                <img
                  src="src/assets/images/652e82cd70aa6522dd785109a455904c@2.png"
                  alt="perfume"
                  className="w-full h-auto max-w-[201px]"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h4 className="text-xl md:text-2xl font-semibold text-left text-[#FAFAFA]">
                  Perfume
                </h4>
                <p className="mt-2 text-sm text-left text-[#FAFAFA]">
                  GUCCI INTENSE OUD EDP
                </p>
                <Link
                  to="/"
                  className="mt-4 py-2 text-white text-base text-left underline font-medium"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex items-center justify-center gap-14 m-auto">
        <div className="">
          <button className=" bg-[#000000] border-8 rounded-full border-violet-200 h-20 w-20 ml-16 my-6">
            <FaTruckFast className="text-[#FAFAFA]   w-10 h-10 ml-3" />
          </button>

          <div className="">
            <h5 className="text-base/5 font-semibold pb-1">
              FREE AND FAST DELIVERY
            </h5>
            <p className="text-sm/4 ">Free delivery for all orders over $140</p>
          </div>
        </div>
        <div>
          <button className=" bg-[#000000] border-8 rounded-full border-violet-200 h-20 w-20 ml-16 my-6">
            <MdOutlineHeadsetMic className="text-[#FAFAFA] w-10 h-10 ml-3" />
          </button>
          <div className="">
            <h5 className="text-base/5 font-semibold pb-1">
              24/7 CUSTOMER SERVICE
            </h5>
            <p className="text-sm/4">Friendly 24/7 customer support</p>
          </div>
        </div>
        <div>
          <button className=" bg-[#000000] border-8 rounded-full border-violet-200 h-20 w-20 ml-16 my-6">
            <IoShieldCheckmarkOutline
              className="text-[#FAFAFA] w-10 h-10
            ml-3"
            />
          </button>
          <div>
            <h5 className="text-base/5 font-semibold pb-1">
              MONEY BACK GUARANTEE
            </h5>
            <p className="text-sm/4">We reurn money within 30 days</p>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14 m-auto px-4 sm:px-0">
        <div className="flex flex-col items-center sm:items-start">
          <button className="bg-[#000000] border-8 rounded-full border-violet-200 h-20 w-20 my-6">
            <FaTruckFast className="text-[#FAFAFA] w-10 h-10 m-auto" />
          </button>
          <div className="text-center sm:text-left">
            <h5 className="text-base font-semibold pb-1">
              FREE AND FAST DELIVERY
            </h5>
            <p className="text-sm">Free delivery for all orders over $140</p>
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <button className="bg-[#000000] border-8 rounded-full border-violet-200 h-20 w-20 my-6">
            <MdOutlineHeadsetMic className="text-[#FAFAFA] w-10 h-10 m-auto" />
          </button>
          <div className="text-center sm:text-left">
            <h5 className="text-base font-semibold pb-1">
              24/7 CUSTOMER SERVICE
            </h5>
            <p className="text-sm">Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <button className="bg-[#000000] border-8 rounded-full border-violet-200 h-20 w-20 my-6">
            <IoShieldCheckmarkOutline className="text-[#FAFAFA] w-10 h-10 m-auto" />
          </button>
          <div className="text-center sm:text-left">
            <h5 className="text-base font-semibold pb-1">
              MONEY BACK GUARANTEE
            </h5>
            <p className="text-sm">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
