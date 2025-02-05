import { Link, useParams } from "react-router-dom";
import ProductDetailsItem from "./ProductDetailsItem";
import { useFetchProductDetails } from "../../hooks/useFetchProductDetails";

const ProductDetails = () => {
  const { id } = useParams();
  // const navigate = useNavigate()

  const {
    data: products,
    isPending,
    isError,
  } = useFetchProductDetails({
    apiName: "products",
    key: "id",
    value: id,
  });
 
  if (isPending) return <p className="text-center justify-center">Loading product...</p>;
  if (isError) return <p className="text-center justify-center">Error fetching product!</p>;

  return (
    <div className="container mx-auto">
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
      <ProductDetailsItem products={products} />
    </div>
  );
};

export default ProductDetails;
