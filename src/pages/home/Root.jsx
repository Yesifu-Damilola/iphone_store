import { Outlet } from "react-router-dom";
import { TopHeader } from "../../components/headerbutton/TopHeader";
import { Navbar } from "../../components/layout/navbar/Navbar";
import { Footer } from "./../../components/layout/footer/Footer";

const Root = () => {
  return (
    <>
      <TopHeader />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
