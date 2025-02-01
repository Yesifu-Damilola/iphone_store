/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { TopHeader } from "../../components/headerbutton/TopHeader";
import { Navbar } from "../../components/layout/navbar/Navbar";
import { Footer } from "../../components/layout/footer/Footer";
import { CustomButton } from "../../components/custombutton/CustomButton";

const NotFound = ({ showHeaderFooter }) => {
  const navigate = useNavigate();
  return (
    <div>
      {showHeaderFooter && <TopHeader />}
      {showHeaderFooter && <Navbar />}
      <div className="container m-auto px-4 space-y-36 py-12">
        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 lg:mb-0 lg:px-0">
          <Link
            to="/"
            className="text-sm text-black hover:underline mb-2 sm:mb-0 sm:mr-2"
          >
            Home
          </Link>
          <div className="hidden sm:block">/</div>
          <Link to="#" className="text-sm text-black hover:underline sm:ml-2">
            404 Error
          </Link>
        </div>

        <div className="flex flex-col text-center justify-center space-y-10">
          <h1 className="text-8xl font-medium">404 Not Found</h1>
          <p className="text-base">
            Your visited page not found. You may go home page.
          </p>
          <div>
            <CustomButton
              className="text-base px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 bg-primary text-white"
              text="Back to home page"
              onClick={() => navigate("/")}
            />
          </div>
        </div>
      </div>
      {showHeaderFooter && <Footer />}
    </div>
  );
};

export default NotFound;
