import { Link } from "react-router-dom";
import { LuCopyright } from "react-icons/lu";
export const Footer = () => {
  return (
    <section className="bg-[#000000] mt-10">
      <div className=" text-white py-10 mt-4 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Exclusive</h4>
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <Link to="/" className="hover:underline">
              Get 10% off your first order
            </Link>
            <div className="max-w-screen-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 rounded text-black"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>Email: yesifudammy@gmail.com</p>
            <p>+234-806-294-1097</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">My Account</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Login / Register
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
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

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Link</h4>

            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Download App</h4>

            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">
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
        <p className="flex flex-col sm:flex-row justify-center items-center gap-2 text-base">
          <LuCopyright className="" />
          Copyright Rimel 2022. All rights reserved.
        </p>
      </div>
    </section>
  );
};
