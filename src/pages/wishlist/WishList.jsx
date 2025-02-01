/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { FlashSales } from "../../components/features/home/FlashSales";
import { products } from "../../constants/Products";
import { AddToCartButton } from "../../components/AddToCartButton";
import { CustomButton } from "../../components/custombutton/CustomButton";
import { useWishLists } from "../../hooks/useWishLists";
import { useFetch } from "../../hooks/useFetch";
import { fetchProductsWishLists } from "../../services/products/fetchProduct";
import { FlashSalesItem } from "../../components/features/home/FlashSalesItem";

const WishList = ({ handleAddToCart }) => {
  const {
    data: wishList = [],
    isLoading,
    isError,
    error,
  } = useFetch(fetchProductsWishLists, "wishlists");

  const queryParams = {
    wishlist: false,
  };
  const { isPending, mutate } = useWishLists(queryParams);

  return (
    <main className="container mx-auto">
      <div className="flex items-center justify-between py-20 px-4">
        <h4 className="text-xl">Wishlist ({wishList?.length})</h4>
        <CustomButton
          className="bg-white border text-base py-4 px-12 font-medium  sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-10 lg:py-3  "
          text="Move All To Bag"
          value="Create Account"
          onClick={() => Link("/MoveAllToBag")}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 px-4 relative">
        {wishList?.map((item) => (
          <FlashSalesItem
            key={item.id}
            item={item}
            query="wishlists"
            showCartIcon={true}
          />
        ))}
      </div>

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
          query="wishlists"
        />
      </div>
    </main>
  );
};

export default WishList;
