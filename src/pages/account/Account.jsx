import { Review } from "../../assets/icons/Review";
import { Useracct } from "./../../assets/icons/Useracct";
import { Mallbag } from "./../../assets/icons/Mallbag";
import { Cancel } from "./../../assets/icons/Cancel";
import { Logouticon } from "./../../assets/icons/Logouticon";

const itemsList = [
  { icon: <Useracct />, label: "Manage My Account" },
  { icon: <Mallbag />, label: "My Order" },
  { icon: <Cancel />, label: "My Cancellations" },
  { icon: <Review />, label: "My Reviews" },
  { icon: <Logouticon />, label: "Logout" },
];

export const Account = () => {
  return (
    <div className="absolute right-0 md:right-5 bg-fuchsia-950 rounded p-4 max-w-full">
      {itemsList.map((item, index) => (
        <div key={index} className="flex gap-3 md:flex-row md:gap-x-4 py-2 ">
          {item.icon}
          <h4 className="text-white text-sm md:text-base">{item.label}</h4>
        </div>
      ))}
    </div>
  );
};
