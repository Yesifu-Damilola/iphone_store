import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

const strongElements = document.querySelectorAll("#timeContainer strong");

strongElements.forEach((element, index) => {
  if (index !== strongElements.length - 1) {
    element.insertAdjacentHTML("afterend", "");
  }
});

const FlashSales = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center gap-x-4 md:gap-x-[87px] ">
            <div className="flex flex-col items-center md:items-start gap-y-8 text-center md:text-left mb-4 md:mb-0">
              <div className="flex gap-x-4 items-center">
                <button className="bg-[#DB4444] border-0 rounded-sm w-5 h-10"></button>
                <span className="block text-[#DB4444] text-sm md:text-xl font-semibold py-2">
                  Today’s
                </span>
              </div>
              <div>
                <h2 className="text-2xl md:text-4xl font-semibold">
                  Flash Sales
                </h2>
              </div>
            </div>

           

            <div
              className="flex justify-between w-full sm:w-[250px] md:w-[302px] h-[50px] pt-4 sm:pt-6 md:pt-8 gap-x-2 md:gap-x-4"
              id="timeContainer"
            >
              <div className="text-center">
                <p className="text-xs md:text-sm">Days</p>
                <strong className="text-3xl md:text-2xl">
                  03 <span className="text-[#E07575]"> : </span>
                </strong>
              </div>
              <div className="text-center">
                <p className="text-xs md:text-sm">Hours</p>
                <strong className="text-3xl md:text-2xl">
                  23 <span className="text-[#E07575]"> : </span>
                </strong>
              </div>
              <div className="text-center">
                <p className="text-xs md:text-sm">Minutes</p>
                <strong className="text-3xl md:text-2xl">
                  19 <span className="text-[#E07575]"> : </span>
                </strong>
              </div>
              <div className="text-center">
                <p className="text-xs md:text-sm"> Seconds </p>
                <strong className="text-3xl md:text-2xl">56</strong>
              </div>
            </div>

           
          </div>
         
          <div className="flex gap-5 mt-4 md:mt-0 pt-6 md:pt-0">
            <Link to="#" className="bg-[#F5F5F5] border rounded-full p-2 ">
              <FaArrowLeft className="h-4 w-4 text-black" />
            </Link>
            <Link to="#" className="bg-[#F5F5F5] border rounded-full p-2">
              <FaArrowRight className="h-4 w-4 text-black" />
            </Link>
          </div>
        
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 my-10">
          {[
            {
              src: "src/assets/images/gamepad@2.png",
              title: "HAVIT HV-G92 Gamepad",
              price: "$120",
              originalPrice: "$160",
              rating: 5,
              reviews: 88,
            },
            {
              src: "src/assets/images/keyboard@2.png",
              title: "AK-900 Wired Keyboard",
              price: "$960",
              originalPrice: "$1160",
              rating: 4.5,
              reviews: 75,
              hasCartButton: true,
            },
            {
              src: "src/assets/images/monitor@2.png",
              title: "IPS LCD Gaming Monitor",
              price: "$370",
              originalPrice: "$400",
              rating: 5,
              reviews: 99,
            },
            {
              src: "src/assets/images/chair@2.png",
              title: "S-Series Comfort Chair",
              price: "$375",
              originalPrice: "$400",
              rating: 5,
              reviews: 99,
            },
            {
              src: "src/assets/images/ideapad-gaming-3i-01-500x500 1@2.png",
              title: "ASUS FHD Gaming Laptop",
              price: "$120",
              originalPrice: "$160",
              rating: 5,
              reviews: 88,
            },
          ].map((item, index) => (
            <div key={index}>
              <div className="bg-[#F5F5F5] rounded p-4 relative">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="bg-[#DB4444] text-white text-xs px-2 py-1 rounded">
                      -40%
                    </span>
                  </div>
                  <div className="space-y-2">
                    <FiHeart className="bg-white border rounded-full text-xl p-1" />
                    <FiEye className="bg-white border rounded-full text-xl p-1" />
                  </div>
                </div>
                <div className="w-[180px] h-[190px] mx-auto">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-auto md:w-[172px] md:h-[152px] mx-auto"
                  />
                </div>
                {item.hasCartButton && (
                  <Link
                    to="#"
                    className="absolute inset-x-0 bottom-0 bg-[#000000] text-[#ffffff] text-center text-sm py-2 w-full rounded-b-md"
                  >
                    Add To Cart
                  </Link>
                )}
              </div>
              <p className="mt-4 text-base font-semibold">{item.title}</p>
              <p className="mt-2 text-sm">
                {item.price}
                <span className="line-through text-gray-500 px-2">
                  {item.originalPrice}
                </span>
              </p>
              <div className="flex items-center mt-2 text-sm">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <FaStar
                    key={starIndex}
                    className={
                      starIndex < Math.floor(item.rating)
                        ? "text-[#FFAD33]"
                        : "text-[#bfbfbbb9]"
                    }
                  />
                ))}
                <span className="ml-2 text-gray-600">({item.reviews})</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex m-auto items-center justify-center py-6">
          <Link
            to="/"
            className="text-sm text-[#FFFFFF] bg-[#DB4444] rounded px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-10 lg:py-4"
          >
            View All Products
          </Link>
        </div>
      </div>
      <div className="w-full my-4">
        <hr className="border-t border-gray-300 w-full  sm:w-full md:w-[1440] lg:w-full mx-auto" />
      </div>
    </>
  );
};

export default FlashSales;
