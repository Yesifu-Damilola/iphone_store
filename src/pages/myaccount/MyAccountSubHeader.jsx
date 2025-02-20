import { Link } from "react-router-dom"


export const MyAccountSubHeader = () => {
  return (
     <div className="space-y-4 py-10">
              <div className="space-y-3">
                <h4 className="font-semibold text-base">Manage My Account</h4>
                <div className="ml-8">
                  <div className="py-2">
                    <Link to="#" className="hover:text-primary text-base">
                      My Profile
                    </Link>
                  </div>
                  <div className="py-2">
                    <Link to="#" className="hover:text-primary text-base ">
                      Address Book
                    </Link>
                  </div>
    
                  <div className="py-2">
                    <Link to="#" className="hover:text-primary text-base ">
                      My Payment Options
                    </Link>
                  </div>
                </div>
              </div>
    
              <div className="space-y-3">
                <Link to="/Order" className="font-semibold text-base">
                  My Orders
                </Link>
                <div className="ml-8">
                  <div>
                    <Link to="#" className="hover:text-primary text-base ">
                      My Returns
                    </Link>
                  </div>
                  <div className="py-3">
                    <Link
                      to="/Cancellations"
                      className="hover:text-primary text-base "
                    >
                      My Cancellations
                    </Link>
                  </div>
                </div>
              </div>
    
              <div>
                <Link to="/WishList" className="font-semibold text-base">
                  My WishList
                </Link>
              </div>
            </div>
  )
}
