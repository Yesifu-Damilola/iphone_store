import { Cancel } from "../../assets/icons/Cancel";

export const Cancellations = () => {
  return (
    <div className="flex gap-3 md:flex-row md:gap-x-4 py-2 cursor-pointer">
      <span>
        <Cancel />
      </span>
      <h4 className="text-white text-sm md:text-base">My Cancellations</h4>
    </div>
  );
};
