// import { toast } from "react-toastify";
import { ManageAccount } from "./ManageAccount";
import { Order } from "./Order";
import { Cancellations } from "./Cancellations";
import { Reviews } from "./Reviews";
import { Logout } from "./Logout";

const Account = () => {
  return (
    <div className="absolute right-0 md:right-5 bg-fuchsia-950 rounded p-4 max-w-full onClick">
      <ManageAccount />
      <Order />
      <Cancellations />
      <Reviews />
      <Logout />
    </div>
  );
};

export default Account;
