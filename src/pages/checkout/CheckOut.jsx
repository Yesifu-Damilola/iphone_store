import { Link } from "react-router-dom"


export const CheckOut = () => {
  return (
     <section className="container mx-auto py-8 px-4 md:px-8 sm:px-8">
          <div className="flex flex-col sm:flex-row items-start mb-4 py-8 lg:px-0">
            <Link
              to="/account"
              className="text-sm text-black hover:underline mb-2 sm:mb-0 sm:mx-2"
            >
             Account
            </Link>
            <div className="hidden sm:block">/</div>
            <Link to="#" className="text-sm text-black hover:underline mb-2 sm:mb-0 sm:mx-2">
            My Account
            </Link>
            <div className="hidden sm:block">/</div>
            <Link to="#" className="text-sm text-black hover:underline mb-2 sm:mb-0 sm:mx-2">
            Product
            </Link>
            <div className="hidden sm:block">/</div>
            <Link to="#" className="text-sm text-black hover:underline mb-2 sm:mb-0 sm:mx-2">
            View Cart
            </Link>
            <div className="hidden sm:block">/</div>
            <Link to="#" className="text-sm text-black hover:underline mb-2 sm:mb-0 sm:mx-2">
            CheckOut
            </Link>
          </div>
          <div>
            <h2 className="text-[#000000]">Billing Details</h2>
            <div>
              
            </div>
          </div>
          
          </section>
  )
}
