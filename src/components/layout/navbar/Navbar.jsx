import { Link } from "react-router-dom";
import { useState } from "react";
import Account from "../../account/Account";
import CustomSearch from "../../customsearch/CustomSearch";
import { navRoutes, subMenuLists } from "../../../constants/navbar";
import { useCurrentUser } from "../../../hooks/auth/useCurrentUser";
import { Users } from "../../../assets/icons/Users";

export const Navbar = () => {
  const { user } = useCurrentUser();

  console.log(user);
  const [profileVisible, setProfileVisible] = useState(false);

  const toggleVisibility = () => {
    setProfileVisible((prev) => !prev);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="bg-white sticky top-12 md:top-16 z-10 ">
      <nav className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="p-2">
            <Link
              to="/"
              className="text-black font-bold text-2xl hover:underline"
            >
              Exclusive
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-6 ">
            {navRoutes.map((route, i) => (
              <Link
                to={route?.path}
                className="text-black hover:text-gray-700 text-base hover:underline"
                key={`${route.name}-${i}`}
              >
                {route?.name}
              </Link>
            ))}
            {!user && (
              <Link
                to={"/signup"}
                className="text-black hover:text-gray-700 text-base hover:underline"
              >
                SignUp
              </Link>
            )}
          </div>
          <div className="md:flex hidden  items-center">
            <CustomSearch />
            {subMenuLists?.map((menu) => (
              <Link to={menu?.path} className="p-2" key={menu.path}>
                <menu.icon className="h-6 w-6 text-black hover:underline" />
              </Link>
            ))}
            {user?.email && (
              <div className="p-2">
                <Users
                  className="h-6 w-6 over:underline"
                  onClick={toggleVisibility}
                />
                {profileVisible && <Account />}
              </div>
            )}
          </div>

          <div className="md:hidden flex  gap-3">
            <div className="flex items-center">
              {subMenuLists?.map((menu) => {
                return menu?.name === "users" ? (
                  <div className="p-2" key={menu.name}>
                    <menu.icon
                      className="h-6 w-6 over:underline"
                      onClick={toggleVisibility}
                    />
                    {profileVisible && <Account />}
                  </div>
                ) : (
                  <Link to={menu?.path} className="p-2">
                    <menu.icon className="h-6 w-6 text-black hover:underline" />
                  </Link>
                );
              })}
            </div>
            <button
              className="md:hidden flex items-center p-2"
              onClick={toggleNavbar}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} md:hidden mt-4`}
        >
          {navRoutes.map((route, i) => (
            <Link
              to={route?.path}
              className="block text-black hover:text-gray-700 text-base hover:underline   "
              key={`${route.name}-${i}`}
            >
              {route?.name}
            </Link>
          ))}
          {!user && (
            <Link
              to={"/signup"}
              className="text-black hover:text-gray-700 text-base hover:underline "
            >
              SignUp
            </Link>
          )}
          <div className="py-2">
            <CustomSearch />
          </div>
        </div>
      </nav>
      <div className="w-full">
        <hr className="w-full sm:w-full lg:w-full mx-auto" />
      </div>
    </header>
  );
};
