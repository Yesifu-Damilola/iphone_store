export const TopHeader = () => {
  return (
    <header className="bg-black py-4 w-full sticky top-0 z-20 md:py-6 md:px-4 px-2">
      <div className="container mx-auto flex flex-col md:flex-row text-center justify-center">
        <div className="flex-1">
          <p className="text-white">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a href="" className="text-white underline ml-2">
              ShopNow
            </a>
          </p>
        </div>
        <div className="pr-10 mt-2 md:mt-0 md:pr-10">
          <select className="bg-black text-white ">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
      </div>
    </header>
  );
};
