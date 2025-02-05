/* eslint-disable react/prop-types */

import { BiStar } from "react-icons/bi";
import { useState } from "react";
import { FaHeart, FaRegHeart, FaTruckFast } from "react-icons/fa6";
import { RiLoopLeftFill } from "react-icons/ri";
import { FlashSales } from "../../components/features/home/FlashSales";
import { Link } from "react-router-dom";

const ProductDetailsItem = ({ products }) => {
  console.log(products);
  const [selectedImage, setSelectedImage] = useState(
    products?.product_images?.[0] || ""
  );
  const [count, setCount] = useState(1);
  const [liked, setLiked] = useState(false);
  const [selectedColor, setSelectedColor] = useState(products?.color || "");
  const [selectedSize, setSelectedSize] = useState("");

  const handleDecrease = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleToggleLike = () => {
    setLiked(!liked);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  if (!products) return <p>Product not found.</p>;

  return (
    <div className="container m-auto px-1">
      <div className="mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[200px_minmax(0,_2fr)_1fr] gap-8">
        <div className="space-y-4">
          {products.product_images?.map((image, id) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center w-full h-[138px] bg-secondary rounded"
            >
              <img
                src={image}
                alt={`Product image ${id + 1}`}
                onClick={() => setSelectedImage(image)}
                className="w-[121px] h-[114px] cursor-pointer"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center bg-secondary w-full h-auto md:h-[600px] rounded px-2 ">
          <img
            src={selectedImage}
            alt={selectedImage.product}
            className="w-[446px] h-[315px]"
          />
        </div>
        <div className="ml-0 md:ml-5">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-left">
              {products.product_name}
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
              <p className="text-2xl/6 text-left">${products.price}</p>
              <p className="text-sm/5 text-left w-full md:w-[373px] py-1">
                {products.description}
                {/* PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive. */}
              </p>
            </div>
            <div className="py-2 w-full md:w-[400px]">
              <hr />
            </div>
            <div className="flex gap-4 pt-1 pb-3">
              <span className="text-xl text-left">Colors:</span>
              <div
                className={`border-4 border-solid border-black rounded-full bg-[#A0BCE0] w-5 h-5 cursor-pointer ${
                  selectedColor === "#A0BCE0"
                    ? "border-black"
                    : "border-transparent"
                } `}
                onClick={() => handleColorChange("#A0BCE0")}
              ></div>
              <div
                className={`border rounded-full bg-[#E07575] w-5 h-5 cursor-pointer ${
                  selectedColor === "#E07575"
                    ? "border-black"
                    : "border-transparent"
                } `}
                onClick={() => handleColorChange("#EO7575")}
              ></div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-3 mt-2">
              <p className="text-xl text-left">Size:</p>
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`border px-3 py-1 rounded text-sm ${
                    selectedSize === size ? "bg-primary text-white" : ""
                  }`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="flex gap-3 py-3">
              <div className="space-x-3 flex items-center justify-between p-2">
                <div className="flex items-center justify-center border rounded">
                  <button
                    className="text-xl/6 px-2 py-1 rounded-l"
                    onClick={handleDecrease}
                  >
                    -
                  </button>
                  <span className="flex items-center justify-center border-l border-r py-1 px-4 font-medium text-xl/6 w-12">
                    {count}
                  </span>
                  <button
                    className="text-xl/6 px-2 py-1 bg-primary text-white hover:bg-primary-dark rounded-r"
                    onClick={handleIncrease}
                  >
                    +
                  </button>
                </div>

                <Link
                  to=""
                  className="border px-3 py-1 bg-primary text-white text-base rounded font-medium"
                >
                  Buy Now
                </Link>
                <span
                  className={`border px-2 py-1 cursor-pointer ${
                    liked ? "text-primary" : ""
                  }`}
                  onClick={handleToggleLike}
                >
                  {liked ? <FaHeart /> : <FaRegHeart />}
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
          // products={[products]}
          // products={products.slice(0, 4).map((products) => products)}
        />
      </div>
    </div>
  );
};

export default ProductDetailsItem;
