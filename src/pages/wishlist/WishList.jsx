/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { RiDeleteBinLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { FlashSales } from "../../components/features/home/FlashSales";
import { products, sellingProducts } from "../../constants/Products";
import { AddToCartButton } from "../../components/AddToCartButton";
import { CustomButton } from "../../components/custombutton/CustomButton";

const WishList = ({ handleAddToCart }) => {
  // const navigate = useNavigate();

  return (
    <main className="container mx-auto">
      <div className="flex items-center justify-between py-20 px-4">
        <h4 className="text-xl">Wishlist (4)</h4>
        <CustomButton
          className="bg-white border text-base py-4 px-12 font-medium  sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-10 lg:py-3  "
          text="Move All To Bag"
          value="Create Account"
          onClick={() => Link("/MoveAllToBag")}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 px-4">
        {sellingProducts?.slice(0, 4).map((product) => (
          <div key={product.id}>
            <div className="bg-[#F5F5F5] rounded p-4 relative">
              {product.discount && (
                <div className="flex absolute gap-56">
                  <button className="top-0 left-0 p-2 text-xs/4 bg-primary text-white rounded py-1 px-2">
                    {product.discount}
                  </button>
                  <RiDeleteBinLine className="top-0 ml-3 border rounded-full bg-[#FFFFFF] p-1 w-7 h-7" />
                </div>
              )}
              <div className="lg:w-[180px] lg:h-[180px] mx-auto">
                <img
                  src={product.src}
                  alt={product.name}
                  className="w-full h-auto md:w-[172px] md:h-[152px] mx-auto mt-5"
                />
              </div>
              <div className="group bg-black text-white mt-6">
                <Link
                  to="/addtocart"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <AddToCartButton
                    showCartIcon={true}
                    handleAddToCart={handleAddToCart}
                    className=""
                  />
                </Link>
              </div>
            </div>
            <p className="text-base font-medium">{product.name}</p>
            <p className="mt-2 text-base font-medium text-primary">
              ${product.price}
              {product.originalPrice && (
                <span className="line-through text-black px-2">
                  ${product.originalPrice}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>

      {/* <div className="py-10">
        <FlashSales
          title="Just For You"
          CustomButton={
            <CustomButton
              className="bg-black border text-red-700 text-base py-4 px-12 font-medium  sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-10 lg:py-3  "
              text="See All"
              value="See All"
            />
          }
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10"
          type="flashsales"
          products={products.slice(0, 4)}
          showCartIcon={true}
        />
      </div> */}
      <div className="py-10">
        <FlashSales
          title="Just For You"
          CustomButton={
            <CustomButton
              className="bg-black border text-red-700 text-base py-4 px-12 font-medium sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-10 lg:py-3"
              text="See All"
              value="See All"
              onClick={() => Link("/See All")}
            />
          }
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10"
          type="flashsales"
          products={products.slice(0, 4)}
          showCartIcon={true}
        />
      </div>
    </main>
  );
};

export default WishList;
