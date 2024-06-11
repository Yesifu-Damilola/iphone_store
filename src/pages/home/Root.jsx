import { Outlet } from "react-router-dom";
import { TopHeader } from "../../components/headerbutton/TopHeader";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";

const Root = () => {
  return (
    <>
      <TopHeader />
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default Root;
