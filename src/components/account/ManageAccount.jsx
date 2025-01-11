import { Useracct } from "../../assets/icons/Useracct";

export const ManageAccount = () => {
  return (
    <div className="flex gap-3 md:flex-row md:gap-x-4 py-2 cursor-pointer">
      <span>
        <Useracct />
      </span>
      <h4 className="text-white text-sm md:text-base">Manage My Account</h4>
    </div>
  );
};
