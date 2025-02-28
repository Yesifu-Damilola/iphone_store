import { Link } from "react-router-dom";
import { Mallbag } from "../../assets/icons/Mallbag";

export const Order = () => {
  return (
    <>
      <Link
        to="/orders"
        className="flex gap-3 md:flex-row md:gap-x-4 py-2 cursor-pointer"
      >
        <span>
          <Mallbag />
        </span>
        <h4 className="text-white text-sm md:text-base">My Order</h4>
      </Link>
    </>
  );
};
