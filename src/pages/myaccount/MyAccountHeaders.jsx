import { Link } from "react-router-dom"


export const MyAccountHeaders = () => {
  return (
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
  )
}
