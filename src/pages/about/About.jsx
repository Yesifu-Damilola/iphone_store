import { Link } from "react-router-dom";
import holdingshoppingbags from "../../assets/images/holdingshoppingbags@3.png";
const About = () => {
  return (
    <section className="container mx-auto py-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-start mb-4 py-8 lg:px-0">
        <Link
          to="/"
          className="text-sm text-black hover:underline mb-2 sm:mb-0 sm:mr-2"
        >
          Home
        </Link>
        <div className="hidden sm:block">/</div>
        <Link to="#" className="text-sm text-black hover:underline sm:ml-2">
          About
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
        <div className="flex flex-col space-y-10 pl-4">
          <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
            Our Story
          </h1>
          <div className="space-y-6">
            <p className="text-base leading-loose">
              Launched in 2015, Exclusive is South Asia’s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </p>
            <p className="text-base leading-loose">
              Exclusive has more than 1 million products to offer, growing at a
              very fast rate. Exclusive offers a diverse assortment in
              categories ranging from consumer goods.
            </p>
          </div>
        </div>
        <div className="w-full h-auto lg:w-[705px] lg:h-[609px] mb-8 lg:mb-0 lg:ml-auto flex justify-center items-center">
          <img
            src={holdingshoppingbags}
            alt="shoppingbags"
            className="w-full h-auto lg:w-[837px] lg:h-[609px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
