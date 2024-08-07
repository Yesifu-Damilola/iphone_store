import { ShowCase } from "../../components/features/home/ShowCase";
import { FlashSales } from "./../../components/features/home/FlashSales";
import { Category } from "./../../components/features/home/Category";
import { SellingProducts } from "./../../components/features/home/SellingProducts";
import { MusicExperience } from "./../../components/features/home/MusicExperience";
import { ExploreProducts } from "./../../components/features/home/ExploreProducts";
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
      />
      <Category products={products} />
      <SellingProducts />
      <MusicExperience />
      <ExploreProducts />
      <NewArrival />
    </>
  );
};

export default Home;
