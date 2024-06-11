import { FaArrowRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import FlashSales from "../flashsales/FlashSales";
import Category from "../category/Category";
import { Link } from "react-router-dom";
import SellingProducts from "../sellingproducts/SellingProducts";
import MusicExperience from "../musicexperience/MusicExperience";
import ExploreProducts from "../exploreproducts/ExploreProducts";
import NewArrival from "../newarrival/NewArrival";
import apple from "../../assets/images/1200px-Apple_gray_logo 1@2.png";
import horeiphone from "../../assets/images/hero_endframe__cvklg0xk3w6e_large 2@2.png";

const Home = () => {
  return (
    <>
      <main className="container mx-auto flex flex-col items-center justify-center px-4 mb-16 ">
        <div className="flex flex-col md:flex-row gap-11  w-full">
          <div className="text-black text-base space-y-4 w-full md:w-auto pt-8">
            <Link to="#" className="flex items-center gap-x-4 md:gap-x-5">
              Woman’s Fashion <FaAngleRight className="ml-2 md:ml-4" />
            </Link>
            <Link
              to=""
              className="flex items-center text-lg gap-x-4 md:gap-x-8"
            >
              Men’s Fashion <FaAngleRight className="ml-2 md:ml-4" />
            </Link>
            <p>Electronics</p>
            <p>Home & Lifestyle</p>
            <p>Medicine</p>
            <p>Sports & Outdoor</p>
            <p>Baby’s & Toys</p>
            <p>Groceries & Pets</p>
            <p>Health & Beauty</p>
           
          </div>
          <div className="hidden md:block h-32 md:h-48 lg:h-72 xl:h-96 border-l-2 border-gray-300 mr-1 ml-10"></div>
          <div className="flex flex-col md:flex-row items-center justify-center px-1 w-full md:w-auto pt-8">
            <div className="bg-black text-center md:text-left w-full md:w-[600px] h-auto md:h-[344px] p-4">
              <div className="flex flex-col md:flex-row items-center md:items-start text-white text-base gap-6 mx-4 md:mx-[70px] my-4 md:my-[40px]">
                <img
                  src={apple}
                  alt="apple_logo"
                  className="w-[40px] h-[49px]"
                />
                <span className="w-auto md:w-[126px] h-auto md:h-[20px] pt-4">
                  iPhone 14 Series
                </span>
              </div>
              <div className="text-white">
                <p className="text-3xl md:text-5xl leading-tight font-semibold w-full md:w-[294px] mx-4 md:mx-[70px] mt-4 md:mt-[40px]">
                  Up to 10% off Voucher
                </p>
                <Link
                  to="#"
                  className="underline text-white flex items-center py-4 justify-center md:justify-start mx-4 md:mx-[72px] "
                >
                  Shop Now
                  <FaArrowRight className="ml-2 " />
                </Link>
              </div>
            </div>
            <div className="bg-cover w-full md:w-auto md:py-0">
              <img
                src={horeiphone}
                alt="iphone_hero"
                className="max-w-full w-full md:w-[550px] h-auto md:h-[344px]"
              />
            </div>
          </div>
        </div>
      </main>
      <FlashSales />
      <Category />
      <SellingProducts />
      <MusicExperience />
      <ExploreProducts />
      <NewArrival />
    </>
  );
};

export default Home;
