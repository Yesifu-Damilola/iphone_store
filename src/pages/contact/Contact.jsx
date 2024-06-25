import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { CustomButton } from "../../components/custombutton/CustomButton";

const Contact = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-4 py-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-start mb-4 py-8">
        <Link
          to="/"
          className="text-sm text-black hover:underline mb-2 sm:mb-0 sm:mr-2"
        >
          Home
        </Link>
        <div className="hidden sm:block">/</div>
        <Link to="#" className="text-sm text-black  hover:underline sm:ml-2">
          Contact
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
        <div className="shadow p-4 rounded py-6">
          <div className="flex items-center mb-4">
            <IoCallOutline className="text-2xl text-white bg-primary rounded-full w-10 h-10 mr-2 p-2" />
            <h4 className="text-base/5 font-medium ">Call to Us</h4>
          </div>
          <div className="space-y-3">
            <p className="mb-2 text-sm">
              We are available 24/7, 7 days a week.
            </p>
            <p className="mb-4 text-sm">Phone: +2348062941097</p>
          </div>
          <hr className="my-10 w-full px-0 mx-0" />
          <div className="flex items-center mb-4">
            <FiMail className="text-2xl text-white bg-primary rounded-full w-10 h-10 mr-2 p-2" />
            <h4 className="text-base/5 font-medium">Write To Us</h4>
          </div>
          <div className="space-y-3">
            <p className="mb-2 text-sm">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="mb-2 text-sm">Emails: customer@exclusive.com</p>
            <p className="mb-2 text-sm">Emails: support@exclusive.com</p>
          </div>
        </div>
        <div className="shadow-md p-4 rounded">
          <form className="py-6">
            <div className="lg:flex-row md:flex sm:flex  gap-4">
              <input
                type="text"
                id="name"
                placeholder="Your Name *"
                className="text-base w-full mb-4 p-2 border focus:outline-none border-gray-300 rounded"
              />
              <input
                type="text"
                id="email"
                placeholder="Your Email *"
                className="text-base w-full mb-4 p-2 border focus:outline-none border-gray-300 rounded"
              />
              <input
                type="text"
                id="phone number"
                placeholder="Your Phone *"
                className="text-base w-full mb-4 p-2 border focus:outline-none border-gray-300 rounded"
              />
            </div>
            <div className="form-message py-6">
              <textarea
                className="form-control text-base w-full mb-4 p-2 border focus:outline-none border-gray-300 rounded "
                name="message"
                id="text"
                rows="11"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <CustomButton
                className="text-base text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-10 lg:py-4"
                text="Send Massage"
                onClick={() => Link("/SendMassage")}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
