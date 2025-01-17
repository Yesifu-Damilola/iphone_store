import { Link } from "react-router-dom";
import playstation from "../../../assets/images/playstation@3.png";
import womanwearinghat from "../../../assets/images/womanwearinghat@3.png";
import transparentamazonecho from "../../../assets/images/transparentamazonecho@3.png";
import perfume from "../../../assets/images/perfume@3.png";
import { NewArrivalItem } from "../NewArrivalItem";

export const NewArrival = () => {
  return (
    <div className="container mx-auto p-4 pt-10">
      <div className="flex gap-x-4 items-center">
        <button className="bg-[#DB4444] border-0 rounded-sm w-5 h-10"></button>
        <span className="block text-[#DB4444] text-sm md:text-xl font-semibold py-2">
          Featured
        </span>
      </div>
      <div className="flex flex-col md:flex-row text-center md:text-left">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold pt-6">
            New Arrival
          </h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-x-12 my-10 w-full max-w-[1280px] mx-auto">
        <div className="bg-[#000000] relative rounded w-full lg:w-[570px] h-auto lg:h-[600px]">
          <img
            src={playstation}
            alt="PS5"
            className="w-full h-auto lg:w-[511px] lg:h-[511px]"
          />
          <div className="absolute bottom-0 left-0 p-4 w-full">
            <h4 className="text-xl md:text-2xl font-semibold text-left text-[#FAFAFA]">
              PlayStation 5
            </h4>
            <p className="mt-2 text-sm text-left text-[#FAFAFA]">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link
              to="/"
              className="mt-4 py-2 text-white text-base text-left underline font-medium"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-auto">
          <div className="relative bg-[#000000] rounded w-full lg:w-[570px] h-auto lg:h-[284px]">
            <img
              src={womanwearinghat}
              alt="woman-wearing-hat"
              className="w-full h-auto lg:w-[472px] lg:h-[284px]"
            />
            <div className="absolute bottom-0 left-0 p-4 w-full">
              <h4 className="text-xl md:text-2xl font-semibold text-left text-[#FAFAFA]">
                Women’s Collections
              </h4>
              <p className="mt-2 text-sm text-left text-[#FAFAFA]">
                Featured woman collections that give you another vibe.
              </p>
              <Link
                to="/"
                className="mt-4 py-2 text-[#FFFFFF] font-medium text-base underline text-left"
              >
                Shop Now
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <div className="bg-[#000000] relative rounded w-full sm:w-[270px] h-auto sm:h-[284px]">
              <div className="w-full h-auto flex items-center justify-center p-4">
                <img
                  src={transparentamazonecho}
                  alt="echo"
                  className="w-full h-auto max-w-[190px]"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h4 className="text-xl md:text-2xl font-semibold text-left text-[#FAFAFA]">
                  Speakers
                </h4>
                <p className="mt-2 text-sm text-left text-[#FAFAFA]">
                  Amazon wireless speakers
                </p>
                <Link
                  to="/"
                  className="mt-4 py-2 text-white text-base text-left underline font-medium"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="bg-[#000000] relative rounded w-full sm:w-[270px] h-auto sm:h-[284px]">
              <div className="w-full h-auto flex items-center justify-center p-4">
                <img
                  src={perfume}
                  alt="perfume"
                  className="w-full h-auto max-w-[201px]"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h4 className="text-xl md:text-2xl font-semibold text-left text-[#FAFAFA]">
                  Perfume
                </h4>
                <p className="mt-2 text-sm text-left text-[#FAFAFA]">
                  Gucci Intense oud edp
                </p>
                <Link
                  to="/"
                  className="mt-4 py-2 text-white text-base text-left underline font-medium"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewArrivalItem />
    </div>
  );
};
