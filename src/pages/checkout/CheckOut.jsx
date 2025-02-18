import { Link } from "react-router-dom";
import { CheckoutForm } from "./CheckoutForm";
import { PaymentsSummary } from "./PaymentsSummary";

export const CheckOut = () => {
  

  const subTitles = [
    { name: "Account", path: "/account" },
    { name: "My Account", path: "/myaccount" },
    { name: "Product", path: "#" },
    { name: "View Cart", path: "/cart" },
    { name: "CheckOut", path: "#" },
  ];

  return (
    <section className="container mx-auto py-8 px-4 md:px-8 sm:px-8">
      <div className="flex flex-col sm:flex-row items-start mb-4 py-8 lg:px-0">
        {subTitles.map((subTitle, index) => (
          <div key={index} className="flex items-center">
            <Link
              to={subTitle.path}
              className="text-sm text-black hover:underline mb-2 sm:mb-0 sm:mx-2"
            >
              {subTitle.name}
            </Link>
            {index < subTitles.length - 1 && (
              <span className="hidden sm:block">/</span>
            )}
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <CheckoutForm/>
       <PaymentsSummary/>
       </div>
      </div>
    </section>
  );
};
