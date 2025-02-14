import { Link } from "react-router-dom"


export const CheckOut = () => {
  return (
     <section className="container mx-auto py-8 px-4 md:px-8 sm:px-8">
          <div className="flex flex-col sm:flex-row items-start mb-4 py-8 lg:px-0">
            <Link
              to="/account"
              className="text-sm text-black hover:underline mb-2 sm:mb-0 sm:mr-2"
            >
             Account
            </Link>
            <div className="hidden sm:block">/</div>
            <Link to="#" className="text-sm text-black hover:underline sm:ml-2">
            My Account
            </Link>
            <Link to="#" className="text-sm text-black hover:underline sm:ml-2">
              Cart
            </Link>
            <Link to="#" className="text-sm text-black hover:underline sm:ml-2">
              Cart
            </Link>
          </div>
          </section>
  )
}
