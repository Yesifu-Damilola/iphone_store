// import { toast } from "react-toastify";
import { ManageAccount } from "./ManageAccount";
import { Order } from "./Order";
import { Cancellations } from "./Cancellations";
import { Reviews } from "./Reviews";
import { Logout } from "./Logout";

// const itemsList = [
//   { icon: <Useracct />, label: "Manage My Account" },
//   { icon: <Mallbag />, label: "My Order" },
//   { icon: <Cancel />, label: "My Cancellations" },
//   { icon: <Review />, label: "My Reviews" },
//   { label: "Logout", icon: <Logouticon />, action: "logout" },
// ];
const Account = () => {
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   localStorage.clear();
  //   toast.success("You have logged out successfully!");
  //   navigate("/login");
  // };

  // const handleItemClick = ({ item }) => {
  //   if (item.action === "logout") {
  //     handleLogout();
  //   } else {
  //     switch (item.label) {
  //       case "Manage My Account":
  //         navigate("/account/manage");
  //         break;
  //       case "My Order":
  //         navigate("/order");
  //         break;
  //       case "Cancellations":
  //         navigate("/cancellations");
  //         break;
  //       case "My Reviews":
  //         navigate("/reviews");
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  // };

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
