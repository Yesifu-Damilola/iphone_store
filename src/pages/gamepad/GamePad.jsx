import { Link } from "react-router-dom";
import { BiStar } from "react-icons/bi";
import { useState } from "react";
import { Heart } from "../../assets/icons/Heart";
import { FaTruckFast } from "react-icons/fa6";
import { RiLoopLeftFill } from "react-icons/ri";
import { galleries, products } from "../../constants/Products";
import { FlashSales } from "../../components/features/home/FlashSales";

const GamePad = () => {
  const [selectedImage, setSelectedImage] = useState([]);
  return (
    <div className="container m-auto px-1">
      <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 lg:mb-0 lg:px-4 py-10">
        <Link
          to="/"
          className="sm:text-3xl md:text-base lg:text-sm text-black hover:underline mb-2 sm:mb-0 sm:mr-2"
        >
          Account
        </Link>
        <div className="hidden sm:block"> / </div>
        <Link
          to="#"
          className="sm:text-3xl md:text-base lg:text-sm  text-black hover:underline sm:mx-2"
        >
          Gaming
        </Link>
        <div className="hidden sm:block"> / </div>
        <Link
          to="#"
          className="sm:text-3xl md:text-base lg:text-sm text-black hover:underline sm:ml-2"
        >
          Havic HV G-92 Gamepad
        </Link>
      </div>
      <div className="mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[200px_minmax(0,_2fr)_1fr] gap-8">
        <div className="space-y-4">
          {galleries.map((gallery) => (
            <div
              key={gallery.id}
              className="flex flex-col items-center justify-center w-full h-[138px] bg-secondary rounded"
            >
              <img
                src={gallery.src}
                alt={gallery.title}
                onClick={() => setSelectedImage(gallery)}
                className="w-[121px] h-[114px]"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center bg-secondary w-full h-auto md:h-[600px] rounded px-2 ">
          <img
            src={selectedImage.src || galleries[0].src}
            alt={selectedImage.title}
            className="w-[446px] h-[315px]"
          />
        </div>
        <div className="ml-0 md:ml-5">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-left">
              Havic HV G-92 Gamepad
            </h2>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-4 py-1">
                <div className="flex gap-2 text-sm">
                  <BiStar className="text-[#FFAD33]" />
                  <BiStar className="text-[#FFAD33]" />
                  <BiStar className="text-[#FFAD33]" />
                  <BiStar className="text-[#FFAD33]" />
                  <BiStar />
                  <span>(150 Reviews)</span>
                </div>
                <div className="hidden md:block">|</div>
                <span className="text-sm text-[#00FF66]">In Stock</span>
              </div>
              <p className="text-2xl/6 text-left">$192.00</p>
              <p className="text-sm/5 text-left w-full md:w-[373px] py-1">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </p>
            </div>
            <div className="py-2 w-full md:w-[400px]">
              <hr />
            </div>
            <div className="flex gap-4 pt-1 pb-3">
              <span className="text-xl text-left">Colours:</span>
              <div className="border-4 border-solid border-black rounded-full bg-[#A0BCE0] w-5 h-5"></div>
              <div className="border rounded-full bg-[#E07575] w-5 h-5"></div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-3 mt-2">
              <p className="text-xl text-left">Size:</p>
              <button className="border px-3 py-1 rounded text-sm">XS</button>
              <button className="border px-3 py-1 rounded text-sm">S</button>
              <button className="text-white border px-3 py-1 rounded bg-primary text-sm">
                M
              </button>
              <button className="border px-3 py-1 rounded text-sm">L</button>
              <button className="border px-3 py-1 rounded text-sm">XL</button>
            </div>
            <div className="flex gap-3 py-3">
              <div className="space-x-3 flex items-center justify-between p-2">
                <div className="border rounded">
                  <span className="text-xl/7 px-2 py-1">-</span>
                  <span className="border px-4 font-medium text-xl/7 py-1">
                    2
                  </span>
                  <span className="text-white bg-primary px-2 text-xl/7 py-1 ">
                    +
                  </span>
                </div>
                <Link
                  to=""
                  className="border px-3 py-1 bg-primary text-white text-base rounded font-medium"
                >
                  Buy Now
                </Link>
                <span className="border px-2 py-1">
                  <Heart />
                </span>
              </div>
            </div>
            <div className="border w-full h-auto md:w-[399px] md:h-[180px]">
              <div className="flex md:flex-row gap-4 items-center space-y-4 pl-3">
                <FaTruckFast className="w-10 h-10" />
                <div className="text-left space-y-4">
                  <h4 className="font-medium text-base">Free Delivery</h4>
                  <p className="text-xs underline">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex md:flex-row gap-4 items-center pl-3">
                <RiLoopLeftFill className="w-10 h-10" />
                <div className="text-left space-y-4">
                  <h4 className="font-medium text-base">Return Delivery</h4>
                  <p className="text-xs">
                    Free 30 Days Delivery Returns.
                    <Link to="" className="underline">
                      Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <FlashSales
          title={"Related Item"}
          subTitle=""
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 pt-6"
          type="flashsales"
          products={products.slice(0, 4).map((products) => products)}
        />
      </div>
    </div>
  );
};

export default GamePad;
