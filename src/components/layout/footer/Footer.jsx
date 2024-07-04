import { Link } from "react-router-dom";
import { LuCopyright } from "react-icons/lu";

export const Footer = () => {
  return (
    <section className="bg-[#000000] mt-10">
      <div className=" text-white py-10 mt-4 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-2">
            <div>
              <Link
                to="/"
                className="text-lg font-semibold mb-4 hover:underline"
              >
                Exclusive
              </Link>
            </div>
            <div>
              <Link
                to="/"
                className="text-lg font-semibold mb-4 hover:underline"
              >
                Subscribe
              </Link>
            </div>
            <div>
              <Link to="/" className="hover:underline">
                Get 10% off your first order
              </Link>
            </div>
            <div className="max-w-screen-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 rounded text-black focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Link to="" className="text-lg font-semibold mb-4 hover:underline">
              Support
            </Link>
            <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>Email: yesifudammy@gmail.com</p>
            <p>+234-806-294-1097</p>
          </div>

          <div className="space-y-2">
            <Link
              to="/myaccount"
              className="text-lg font-semibold mb-4 hover:underline"
            >
              My Account
            </Link>
            <ul className="space-y-2">
              <li>
                <Link to="/Login" className="hover:underline">
                  Login / Register
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:underline">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:underline">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <Link to="" className="text-lg font-semibold mb-4 hover:underline">
              Quick Link
            </Link>

            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <Link to="" className="text-lg font-semibold mb-4 hover:underline">
              Download App
            </Link>

            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:underline">
                  Save $3 with App New User Only
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full mt-12">
        <hr className="border border-[#D9D9D9]   w-full sm:w-full lg:w-full mx-auto" />
      </div>
      <div className="text-[#D9D9D9] max-w-screen-xl mx-auto px-4 text-center mt-4 pb-5">
        <p className="flex flex-col sm:flex-row justify-center items-center gap-3 text-base">
          <LuCopyright className="" />
          Copyright Rimel 2022. All rights reserved.
        </p>
      </div>
    </section>
  );
};
