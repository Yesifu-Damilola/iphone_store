import { Link } from "react-router-dom";
import { CustomButton } from "./../../components/custombutton/CustomButton";

const MyAccount = () => {
  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-4 py-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 lg:mb-0 lg:px-0">
          <Link
            to="/"
            className="text-sm text-black hover:underline mb-2 sm:mb-0 sm:mr-2"
          >
            Home
          </Link>
          <div className="hidden sm:block">/</div>
          <Link to="#" className="text-sm text-black hover:underline sm:ml-2">
            My Account
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start lg:px-0">
          <Link
            to="/"
            className="text-sm text-black hover:underline mb-2 sm:mb-0 sm:mr-2"
          >
            Welcome!
          </Link>
          <Link to="#" className="text-sm hover:underline sm:ml-2 text-primary">
            Md Rimel
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
        <div className="space-y-4 py-10">
          <h4 className="font-semibold text-base">Manage My Account</h4>
          <p className="text-primary text-base">My Profile</p>
          <p className="text-base ">Address Book</p>
          <p className="text-base "> My Payment Options</p>
          <h4 className="font-semibold text-base">My Orders</h4>
          <p className="text-base ">My Returns</p>
          <p className="text-base">My Cancellations</p>
          <h4 className="font-semibold text-base">My WishList</h4>
        </div>
        <div className="shadow-md px-6 py-10">
          <h3 className="text-primary text-lg font-medium mb-4">
            Edit Your Profile
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-4">
              <label className="text-base">First Name</label>
              <input
                className="bg-secondary p-2 rounded focus:outline-none text-base"
                type="text"
                placeholder="Md"
              />
              <label className="text-base">Email</label>
              <input
                className="bg-secondary p-2 rounded focus:outline-none text-base"
                type="text"
                placeholder="rimel1111@gmail.com"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="text-base">Last Name</label>
              <input
                className="bg-secondary p-2 rounded focus:outline-none text-base"
                type="text"
                placeholder="Rimel"
              />
              <label className="text-base">Address</label>
              <input
                className="bg-secondary p-2 rounded focus:outline-none text-base"
                type="text"
                placeholder="Kingston, 5236, United State"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 mt-4">
            <label className="text-base">Password Changes</label>
            <input
              className="bg-secondary p-2 rounded focus:outline-none text-base"
              type="text"
              placeholder="Current Password"
            />
            <input
              className="bg-secondary p-2 rounded focus:outline-none text-base"
              type="text"
              placeholder="New Password"
            />
            <input
              className="bg-secondary p-2 rounded focus:outline-none text-base"
              type="text"
              placeholder="Confirm New Password"
            />
          </div>
          <div className="flex justify-end space-x-4 mt-4">
            <CustomButton
              className="text-base px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 bg-secondary text-black"
              text="Cancel"
              onClick={() => Link("/Cancel")}
            />
            <CustomButton
              className="text-base font-medium px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 text-white"
              text="Save Changes"
              onClick={() => Link("/Save Changes")}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default MyAccount;
