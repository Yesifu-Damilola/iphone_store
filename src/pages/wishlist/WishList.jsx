import { RiDeleteBinLine } from "react-icons/ri";
// import { products } from "../../constants/Products";
import duffle_bag from "../../assets/images/duffle_bag@3.png";
import cpu_cooler from "../../assets/images/cpu_cooler@3.png";
import game_pad from "../../assets/images/game_pad@3.png";
import jacket from "../../assets/images/jacket@3.png";
import gaming_laptop from "../../assets/images/gaming_laptop@3.png";
import gaming_monitor from "../../assets/images/gaming_monitor@3.png";
import gamepad from "../../assets/images/gamepad@3.png";
import key_board from "../../assets/images/keyboard@3.png";
import { FiEye } from "react-icons/fi";
import { MdStarRate } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components/custombutton/CustomButton";

const WishList = () => {
  return (
    <main className="container px-6">
      <div className="flex items-center justify-between py-20">
        <h4 className="text-xl">Wishlist (4)</h4>

        <CustomButton
          className="bg-white border text-base py-4 px-12 font-medium  sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-10 lg:py-3  "
          text="Move All To Bag"
          value="Create Account"
          onClick={() => Link("/MoveAllToBag")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        <div className="">
          <div className="bg-[#F5F5F5] rounded p-4 relative">
            <div className="flex absolute  gap-56">
              <button className="top-0 left-0 p-2 text-xs/4 bg-primary text-white rounded py-1 px-2">
                -30%
              </button>
              <RiDeleteBinLine className="top-0 ml-3 border rounded-full bg-[#FFFFFF] p-1 w-7 h-7" />
            </div>
            <div className="lg:w-[180px] lg:h-[180px] mx-auto">
              <img
                src={duffle_bag}
                alt="dufflebag"
                className="w-full h-auto md:w-[172px] md:h-[152px] mx-auto mt-5"
              />
            </div>
            <div className="bg-black text-white mt-6">
              <Link
                to="/addtocart"
                className="text-xs/4 absolute inset-x-0 bottom-0 bg-[#000000] text-[#ffffff] text-center py-2 w-full rounded-b-md flex justify-center m-auto gap-4"
              >
                <BsCart3 className="text-lg" />
                Add To Cart
              </Link>
            </div>
          </div>
          <p className="text-base font-medium">Gucci duffle bag</p>
          <p className="mt-2 text-base font-medium text-primary">
            $960
            <span className="line-through text-black px-2">$1160</span>
          </p>
        </div>
        <div className="">
          <div className="bg-[#F5F5F5] rounded p-4 relative">
            <div className="absolute top-2 right-0 p-2">
              <RiDeleteBinLine className="border rounded-full bg-[#FFFFFF] p-1 w-7 h-7" />
            </div>
            <div className="lg:w-[180px] lg:h-[180px] mx-auto">
              <img
                src={cpu_cooler}
                alt="cpucooler"
                className="w-full h-auto md:w-[172px] md:h-[152px] mx-auto mt-5"
              />
            </div>
            <div className="bg-black text-white mt-6">
              <Link
                to="/addtocart"
                className="text-xs/4 absolute inset-x-0 bottom-0 bg-[#000000] text-[#ffffff] text-center py-2 w-full rounded-b-md flex justify-center m-auto gap-4"
              >
                <BsCart3 className="text-lg" />
                Add To Cart
              </Link>
            </div>
          </div>
          <p className="text-base font-medium">RGB liquid CPU Cooler</p>
          <p className="mt-2 text-base font-medium text-primary">$1960</p>
        </div>
        <div className="">
          <div className="bg-[#F5F5F5] rounded p-4 relative">
            <div className="absolute top-2 right-0 p-2">
              <RiDeleteBinLine className="border rounded-full bg-[#FFFFFF] p-1 w-7 h-7" />
            </div>
            <div className="lg:w-[180px] lg:h-[180px] mx-auto">
              <img
                src={game_pad}
                alt="gamepad"
                className="w-full h-auto md:w-[172px] md:h-[152px] mx-auto mt-5"
              />
            </div>
            <div className="bg-black text-white mt-6">
              <Link
                to="/addtocart"
                className="text-xs/4 absolute inset-x-0 bottom-0 bg-[#000000] text-[#ffffff] text-center py-2 w-full rounded-b-md flex justify-center m-auto gap-4"
              >
                <BsCart3 className="text-lg" />
                Add To Cart
              </Link>
            </div>
          </div>
          <p className="text-base font-medium">GP11 Shooter USB Gamepad</p>
          <p className="mt-2 text-base font-medium text-primary">$550</p>
        </div>
        <div className="">
          <div className="bg-[#F5F5F5] rounded p-4 relative">
            <div className="absolute top-2 right-0 p-2">
              <RiDeleteBinLine className="border rounded-full bg-[#FFFFFF] p-1 w-7 h-7" />
            </div>
            <div className="lg:w-[180px] lg:h-[180px] mx-auto">
              <img
                src={jacket}
                alt="jacket"
                className="w-full h-auto md:w-[172px] md:h-[152px] mx-auto mt-5"
              />
            </div>
            <div className="bg-black text-white mt-6">
              <Link
                to="/addtocart"
                className="text-xs/4 absolute inset-x-0 bottom-0 bg-[#000000] text-[#ffffff] text-center py-2 w-full rounded-b-md flex justify-center m-auto gap-4"
              >
                <BsCart3 className="text-lg" />
                Add To Cart
              </Link>
            </div>
          </div>
          <p className="text-base font-medium">Quilted Satin Jacket</p>
          <p className="mt-2 text-base font-medium text-primary">$750</p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between pt-20 pb-16">
          <div className="flex gap-x-4 items-center">
            <button className="bg-[#DB4444] border-0 rounded-sm w-5 h-10"></button>
            <span className="block text-sm md:text-xl  py-2">Just For You</span>
          </div>
          <div className="">
            <CustomButton
              className=" bg-white border text-base py-4 px-12 font-medium  sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-10 lg:py-3  "
              text="See All"
              value="See All"
              onClick={() => Link("/SeeAll")}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        <div className="">
          <div className="bg-[#F5F5F5] rounded p-4 relative">
            <div className="flex absolute  gap-56">
              <button className="top-0 left-0 p-2 text-xs/4 bg-primary text-white rounded py-1 px-2">
                -30%
              </button>
              <FiEye className="bg-white border rounded-full text-xl p-1 ml-5" />
            </div>
            <div className="lg:w-[180px] lg:h-[180px] mx-auto">
              <img
                src={gaming_laptop}
                alt="GamingLaptop"
                className="w-full h-auto md:w-[172px] md:h-[152px] mx-auto mt-5"
              />
            </div>
            <div className="bg-black text-white mt-6">
              <Link
                to="/addtocart"
                className="text-xs/4 absolute inset-x-0 bottom-0 bg-[#000000] text-[#ffffff] text-center py-2 w-full rounded-b-md flex justify-center m-auto gap-4"
              >
                <BsCart3 className="text-lg" />
                Add To Cart
              </Link>
            </div>
          </div>
          <div className="space-y-2 mt-2">
            <p className="text-base font-medium">ASUS FHD Gaming Laptop</p>
            <p className="mt-2 text-base font-medium text-primary">
              $960
              <span className="line-through text-black px-2">$1160</span>
            </p>
            <div className="flex text-base  ">
              <MdStarRate className="text-[#FFAD33]" />
              <MdStarRate className="text-[#FFAD33]" />
              <MdStarRate className="text-[#FFAD33]" />
              <MdStarRate className="text-[#FFAD33]" />
              <MdStarRate className="text-[#FFAD33]" />
              <p className="tex-black text-sm">(65)</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-[#F5F5F5] rounded p-4 relative">
            <div className="absolute top-2 right-0 p-2">
              <FiEye className="bg-white border rounded-full text-xl p-1" />
            </div>
            <div className="lg:w-[180px] lg:h-[180px] mx-auto">
              <img
                src={gaming_monitor}
                alt="gamingmonitor"
                className="w-full h-auto md:w-[172px] md:h-[152px] mx-auto mt-5"
              />
            </div>
            <div className="bg-black text-white mt-6">
              <Link
                to="/addtocart"
                className="text-xs/4 absolute inset-x-0 bottom-0 bg-[#000000] text-[#ffffff] text-center py-2 w-full rounded-b-md flex justify-center m-auto gap-4"
              >
                <BsCart3 className="text-lg" />
                Add To Cart
              </Link>
            </div>
          </div>
          <div className="space-y-2 mt-2">
            <p className="text-base font-medium">IPS LCD Gaming Monitor</p>
            <p className="mt-2 text-base font-medium text-primary">$1160</p>
            <div className="flex text-base  ">
              <MdStarRate className="text-[#FFAD33]" />
              <MdStarRate className="text-[#FFAD33]" />
              <MdStarRate className="text-[#FFAD33]" />
              <MdStarRate className="text-[#FFAD33]" />
              <MdStarRate className="text-[#FFAD33]" />
              <p className="tex-black text-sm">(65)</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-[#F5F5F5] rounded p-4 relative">
            <div className="flex absolute  gap-56">
              <button className="top-0 left-0 p-2 text-xs/4 bg-[#00FF66] text-white rounded py-1 px-2">
                NEW
              </button>
              <FiEye className="bg-white border rounded-full text-xl p-1 ml-5" />
            </div>
            <div className="lg:w-[180px] lg:h-[180px] mx-auto">
              <img
                src={gamepad}
                alt="gamepad"
                className="w-full h-auto md:w-[172px] md:h-[152px] mx-auto mt-5"
              />
            </div>
            <div className="bg-black text-white mt-6">
              <Link
                to="/addtocart"
                className="text-xs/4 absolute inset-x-0 bottom-0 bg-[#000000] text-[#ffffff] text-center py-2 w-full rounded-b-md flex justify-center m-auto gap-4"
              >
                <BsCart3 className="text-lg" />
                Add To Cart
              </Link>
            </div>
          </div>
          <div className="space-y-2 mt-2">
            <p className="text-base font-medium">HAVIT HV-G92 Gamepad</p>
            <p className="mt-2 text-base font-medium text-primary">$560</p>
            <div className="flex text-base  ">
              <MdStarRate className="text-[#FFAD33]" />
              <MdStarRate className="text-[#FFAD33]" />
              <MdStarRate className="text-[#FFAD33]" />
              <MdStarRate className="text-[#FFAD33]" />
              <MdStarRate className="text-[#FFAD33]" />
              <p className="tex-black text-sm">(65)</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-[#F5F5F5] rounded p-4 relative">
            <div className="absolute top-2 right-0 p-2">
              <FiEye className="bg-white border rounded-full text-xl p-1" />
            </div>
            <div className="lg:w-[180px] lg:h-[180px] mx-auto">
              <img
                src={key_board}
                alt="keyboard"
                className="w-full h-auto md:w-[172px] md:h-[152px] mx-auto mt-5"
              />
            </div>
            <div className="bg-black text-white mt-6">
              <Link
                to="/addtocart"
                className="text-xs/4 absolute inset-x-0 bottom-0 bg-[#000000] text-[#ffffff] text-center py-2 w-full rounded-b-md flex justify-center m-auto gap-4"
              >
                <BsCart3 className="text-lg" />
                Add To Cart
              </Link>
            </div>
          </div>
          <div className="space-y-2 mt-2">
            <p className="text-base font-medium">AK-900 Wired Keyboard</p>
            <p className="mt-2 text-base font-medium text-primary">$200</p>
            <div className="flex text-base  ">
              <MdStarRate className="text-[#FFAD33]" />
              <MdStarRate className="text-[#FFAD33]" />
              <MdStarRate className="text-[#FFAD33]" />
              <MdStarRate className="text-[#FFAD33]" />
              <MdStarRate className="text-[#FFAD33]" />
              <p className="tex-black text-sm">(65)</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WishList;
