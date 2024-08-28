import { SearchIcon } from "../../assets/icons/SearchIcon";

const CustomSearch = () => {
  return (
    <section className="flex items-center focus:outline-none w-full bg-[#F5F5F5]">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="text-xs py-3 px-6 flex-1   focus:outline-none border-none bg-transparent"
      />
      <div className="p-2 ">
        <SearchIcon className="h-6 w-5 text-black" />
      </div>
    </section>
  );
};

export default CustomSearch;
