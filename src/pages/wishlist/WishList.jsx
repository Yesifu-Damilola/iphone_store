import { RiDeleteBinLine } from "react-icons/ri";
import duffle_bag from "../../assets/images/duffle_bag@3.png";
import cpu_cooler from "../../assets/images/cpu_cooler@3.png";
import game_pad from "../../assets/images/game_pad@3.png";
import jacket from "../../assets/images/jacket@3.png";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components/custombutton/CustomButton";
import { FlashSales } from "../../components/features/home/FlashSales";
import { products } from "../../constants/Products";


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
      <div className="py-10">
        <FlashSales
          title={"Just For You"}
          subTitle=""
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 "
          type="flashsales"
          products={products}
          showCatIcon={true}
        />
      </div>
    </main>
  );
};

export default WishList;
