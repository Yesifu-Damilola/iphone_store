import { ShowCase } from "../../components/features/home/ShowCase";
import { FlashSales } from "./../../components/features/home/FlashSales";
import { SubCategory } from "./../../components/features/home/SubCategory";
import { MusicExperience } from "./../../components/features/home/MusicExperience";
import { NewArrival } from "./../../components/features/home/NewArrival";
import { products } from "../../constants/Products";

const Home = () => {
  return (
    <>
      <ShowCase />
      <FlashSales
        title={"Today’s"}
        subTitle="Flash Sales"
        products={products}
        productFeatures="flash-sales"
      />
      <SubCategory
        title={" Categories"}
        subTitle="Browse By Category"
        products={products}
      />
      <FlashSales
        title={"This Month"}
        subTitle="Best Selling Products"
        products={products}
        productFeatures="best-selling-products"
      />
      <MusicExperience />
      <FlashSales
        title={"Our Products"}
        subTitle="Explore Our Products"
        products={products}
        count={14}
        loaderCount={15}
      />

      <NewArrival title={"Features"} subTitle="New Arrival" />
    </>
  );
};

export default Home;
