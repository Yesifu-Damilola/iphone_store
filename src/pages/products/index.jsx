import { FlashSales } from "./../../components/features/home/FlashSales";
const Products = () => {
  return (
    <FlashSales
      title={"Our Products"}
      subTitle="Explore Our Products"
      count={100}
      loaderCount={15}
      type="products"
    />
  );
};

export default Products;
