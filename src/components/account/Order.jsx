import { Mallbag } from "../../assets/icons/Mallbag";

export const Order = () => {
  return (
    <div className="flex gap-3 md:flex-row md:gap-x-4 py-2 cursor-pointer">
      <span>
        <Mallbag />
      </span>
      <h4 className="text-white text-sm md:text-base">My Ordert</h4>
    </div>
  );
};
